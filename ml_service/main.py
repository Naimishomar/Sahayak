from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from ultralytics import YOLO
import tensorflow as tf
import numpy as np
from PIL import Image
import cv2
import io, base64

# -------------------------
# Initialize FastAPI
# -------------------------
app = FastAPI()

# Allow all origins for now (important if frontend is on different machine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# Load models
# -------------------------
yolo_model = YOLO("hazards_model.pt")
ann_model = tf.keras.models.load_model("rockfall_model.h5")


# -------------------------
# Helper: convert image to base64
# -------------------------
def image_to_base64(img_array):
    _, buffer = cv2.imencode(".jpg", img_array)
    return base64.b64encode(buffer).decode("utf-8")


# -------------------------
# Route: Predict
# -------------------------
@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    sensor_data: str = Form(...)  # frontend should send sensor data as JSON string
):
    # Read uploaded image
    image_bytes = await file.read()
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    img_np = np.array(image)

    # YOLO prediction
    results = yolo_model(img_np)

    # Draw bounding boxes
    annotated = results[0].plot()  # numpy BGR image
    detections = []
    for box in results[0].boxes:
        cls_id = int(box.cls)
        conf = float(box.conf)
        label = yolo_model.names[cls_id]
        detections.append({"class": label, "confidence": conf})

    # Prepare ANN input
    # Example: send [total_hazards, avg_confidence, sensor_value1, sensor_value2 ...]
    sensor_values = list(map(float, sensor_data.split(",")))
    total_hazards = len(detections)
    avg_conf = np.mean([d["confidence"] for d in detections]) if detections else 0.0

    ann_input = np.array([[total_hazards, avg_conf] + sensor_values])
    ann_pred = ann_model.predict(ann_input)
    ann_result = ann_pred.tolist()

    # Convert annotated image to base64 to send back
    annotated_b64 = image_to_base64(annotated)

    # Return response
    return JSONResponse({
        "detections": detections,
        "annotated_image": annotated_b64,
        "ann_output": ann_result
    })
