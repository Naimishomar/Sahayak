const CalendarPage = () => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold">Upcoming Events</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium">Sep</div>
              <div className="text-lg font-bold">15</div>
            </div>
            <div className="flex-1">
              <p className="font-medium">Team Meeting</p>
              <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium">Sep</div>
              <div className="text-lg font-bold">18</div>
            </div>
            <div className="flex-1">
              <p className="font-medium">Product Launch</p>
              <p className="text-sm text-gray-600">2:00 PM - 4:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 border rounded-lg">
            <div className="text-center">
              <div className="text-sm font-medium">Sep</div>
              <div className="text-lg font-bold">22</div>
            </div>
            <div className="flex-1">
              <p className="font-medium">Client Review</p>
              <p className="text-sm text-gray-600">3:00 PM - 4:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default CalendarPage;