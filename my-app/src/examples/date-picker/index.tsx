import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const CustomDatepicker = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleClearDates = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 border border-cyan-200 rounded-lg flex items-center space-x-2">
        <div className="relative flex-1">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date ?? undefined)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="w-full p-2 border border-cyan-400 rounded-l-lg"
            placeholderText="Start Date"
            isClearable={false}
          />
        </div>
        <div className="relative flex-1">
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date ?? undefined)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="w-full p-2 border border-cyan-400 rounded-r-lg"
            placeholderText="End Date"
            isClearable={false}
          />
        </div>
        <button
          onClick={handleClearDates}
          className="flex items-center justify-center px-3 py-2 border border-cyan-400 text-cyan-400 bg-white rounded-lg font-bold hover:bg-cyan-50"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CustomDatepicker;
