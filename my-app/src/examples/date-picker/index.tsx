import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './style.css';
import StarRateIcon from '@mui/icons-material/StarRate';

import React, { useState } from 'react';
import { DateRangePicker, Range } from 'react-date-range';
import { addDays } from 'date-fns';

const DateRangePickerComponent: React.FC = () => {
  const [selectionRange, setSelectionRange] = useState<Range>({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection',
  });

  const handleSelect = (ranges: { [key: string]: Range }) => {
    setSelectionRange(ranges.selection);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('ko-KR', options).format(date);
  };

  return (
    <div className="custom-date-range-picker">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        months={1}
        direction="horizontal"
        fixedHeight={true}
        showDateDisplay={false}
      />
    </div>
  );
};

export default DateRangePickerComponent;
