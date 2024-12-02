import React, { useState } from 'react';
import './Calendar.css';

const holidays = {
  1: [
    { date: '1', name: 'Tahun Baru 2024' },
  ],
  2: [
    { date: '8', name: 'Isra Mi’raj Nabi Muhammad SAW' },
    { date: '10', name: 'Tahun Baru Imlek 2575 Kongzili' },
  ],
  3: [
    { date: '11', name: 'Hari Suci Nyepi Tahun Baru Saka 1946' },
    { date: '29', name: 'Wafat Isa Almasih' },
    { date: '31', name: 'Hari Paskah' },
  ],
  4: [
    { date: '10', name: 'Hari Raya Idul Fitri 1445 Hijriah' },
    { date: '11', name: 'Hari Raya Idul Fitri 1445 Hijriah' },
  ],
  5: [
    { date: '1', name: 'Hari Buruh Internasional' },
    { date: '9', name: 'Kenaikan Isa Almasih' },
    { date: '23', name: 'Hari Raya Waisak 2568' },
  ],
  6: [
    { date: '1', name: 'Hari Lahir Pancasila' },
    { date: '17', name: 'Hari Raya Idul Adha 1445 Hijriah' },
    { date: '18', name: 'Cuti Bersama Idul Adha 1445 Hijriah' },
  ],
  7: [
    { date: '7', name: 'Tahun Baru Islam 1446 Hijriah' },
  ],
  8: [
    { date: '17', name: 'Hari Kemerdekaan RI' },
  ],
  9: [
    { date: '16', name: 'Maulid Nabi Muhammad SAW' },
  ],
  12: [
    { date: '25', name: 'Hari Raya Natal' },
  ],
};

const leaveDays = {
  2: [
    { date: '9', name: 'Cuti Bersama Tahun Baru Imlek' },
  ],
  3: [
    { date: '12', name: 'Cuti Bersama Hari Suci Nyepi Tahun Baru Saka 1946' },
  ],
  4: [
    { date: '8', name: 'Cuti Bersama Idul Fitri 1445 Hijriah' },
    { date: '9', name: 'Cuti Bersama Idul Fitri 1445 Hijriah' },
    { date: '12', name: 'Cuti Bersama Idul Fitri 1445 Hijriah' },
    { date: '15', name: 'Cuti Bersama Idul Fitri 1445 Hijriah' },
  ],
  5: [
    { date: '10', name: 'Cuti Bersama Kenaikan Isa Al Masih' },
    { date: '24', name: 'Cuti Bersama Hari Raya Waisak' },
  ],
  6: [
    { date: '18', name: 'Cuti Bersama Idul Adha 1445 Hijriah' },
  ],
  12: [
    { date: '26', name: 'Cuti Bersama Hari Raya Natal' },
  ],
};

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const getDayOfWeek = (day, month, year) => new Date(year, month, day).getDay();

  const generateCalendar = () => {
    const monthDays = [];
    const totalDays = daysInMonth(currentMonth, currentYear);
    const startDay = getDayOfWeek(1, currentMonth, currentYear);
    
    // Add empty days at the start of the month
    for (let i = 0; i < startDay; i++) {
      monthDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add the actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const holiday = holidays[currentMonth + 1]?.find(h => h.date === day.toString());
      const leaveDay = leaveDays[currentMonth + 1]?.find(l => l.date === day.toString());
      const isWeekend = getDayOfWeek(day, currentMonth, currentYear) === 0 || getDayOfWeek(day, currentMonth, currentYear) === 6;

      monthDays.push(
        <div key={day} className={`calendar-day ${isWeekend ? 'weekend' : ''} ${holiday ? 'holiday' : ''} ${leaveDay ? 'leave' : ''}`}>
          {day}
          {holiday && <div className="holiday-tooltip"></div>}
        </div>
      );
    }
    
    return monthDays;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1))}>❮</button>
        <h2>{new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(new Date(currentYear, currentMonth))} {currentYear}</h2>
        <button onClick={() => setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1))}>❯</button>
      </div>
      <div className="calendar-grid">
        <div className="calendar-day-header">Min</div>
        <div className="calendar-day-header">Sen</div>
        <div className="calendar-day-header">Sel</div>
        <div className="calendar-day-header">Rab</div>
        <div className="calendar-day-header">Kam</div>
        <div className="calendar-day-header">Jum</div>
        <div className="calendar-day-header">Sab</div>
        {generateCalendar()}
      </div>
      <div className="event-info">
        {holidays[currentMonth + 1]?.length > 0 ? (
          <div className="event-info-text">
            <h4>Hari Libur Nasional:</h4>
            {holidays[currentMonth + 1].map((holiday, index) => (
              <div key={index} className="holiday-event">{holiday.date} - {holiday.name}</div>
            ))}
          </div>
        ) : (
          <div className="no-holiday">
            <h4>Tidak ada hari libur nasional di bulan ini.</h4>
          </div>
        )}
        {leaveDays[currentMonth + 1]?.length > 0 ? (
          <div className="event-info-text">
            <h4>Hari Cuti Bersama:</h4>
            {leaveDays[currentMonth + 1].map((leave, index) => (
              <div key={index} className="leave-event">{leave.date} - {leave.name}</div>
            ))}
          </div>
        ) : (
          <div className="no-leave">
            <h4>Tidak ada hari cuti bersama di bulan ini.</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
