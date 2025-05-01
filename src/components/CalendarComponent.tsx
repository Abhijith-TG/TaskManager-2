// CalendarComponent.jsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../calendarStyle.css'

const CalendarComponent = () => {
  const handleDateClick = (info:any) => {
    alert(`Clicked on: ${info.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: 'prev',
        center: 'title',
        end: 'next'
      }}
      dateClick={handleDateClick}
      events={[
        { title: 'Meeting', date: '2025-05-10' },
        { title: 'Conference', date: '2025-05-12' }
      ]}
      height="500px"
    />
  );
};

export default CalendarComponent;
