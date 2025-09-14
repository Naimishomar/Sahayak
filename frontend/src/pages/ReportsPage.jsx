import { useState } from "react";
import { FileText, Trash2 } from "lucide-react";
import { jsPDF } from "jspdf";

const ReportsPage = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "September 2024 Report",
      date: "Generated on Sep 1, 2024",
      content: "This is the content of the September report.",
    },
    {
      id: 2,
      title: "August 2024 Report",
      date: "Generated on Aug 1, 2024",
      content: "This is the content of the August report.",
    },
    {
      id: 3,
      title: "July 2024 Report",
      date: "Generated on Jul 1, 2024",
      content: "This is the content of the July report.",
    },
  ]);

  const [newReportTitle, setNewReportTitle] = useState("");
  const [newReportContent, setNewReportContent] = useState("");

  const downloadPDF = (report) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(report.title, 10, 20);

    doc.setFontSize(12);
    doc.text(report.date, 10, 30);

    doc.text(report.content || "No additional content provided.", 10, 40);

    doc.save(`${report.title}.pdf`);
  };

  const deleteReport = (id) => {
    setReports((prevReports) => prevReports.filter((report) => report.id !== id));
  };

  const generateNewReport = () => {
    if (!newReportTitle.trim()) {
      alert("Please enter a report title");
      return;
    }

    const date = new Date().toLocaleDateString();
    const newReport = {
      id: Date.now(), // unique id based on timestamp
      title: newReportTitle,
      date: `Generated on ${date}`,
      content: newReportContent || "No additional content provided.",
    };

    // Add the new report to the list
    setReports((prevReports) => [newReport, ...prevReports]);

    // Generate and download the PDF
    downloadPDF(newReport);

    // Reset the input fields
    setNewReportTitle("");
    setNewReportContent("");
  };

  return (
    <div className="space-y-6">
      {/* Reports List */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Monthly Reports</h3>
        </div>
        <div className="p-6 space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="font-medium">{report.title}</p>
                  <p className="text-sm text-gray-600">{report.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => downloadPDF(report)}
                  className="px-3 py-1 text-sm font-medium text-gray-700 bg-transparent border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Download
                </button>
                <button
                  onClick={() => deleteReport(report.id)}
                  className="px-3 py-1 text-sm font-medium text-red-600 bg-transparent border border-gray-300 rounded-md hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate New Report */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 pb-2">
          <h3 className="text-lg font-semibold">Generate New Report</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Report Title</label>
            <input
              type="text"
              value={newReportTitle}
              onChange={(e) => setNewReportTitle(e.target.value)}
              placeholder="Enter report title"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Report Content</label>
            <textarea
              value={newReportContent}
              onChange={(e) => setNewReportContent(e.target.value)}
              placeholder="Enter report content"
              rows={5}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={generateNewReport}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
          >
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
