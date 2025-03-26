import React from 'react';

function EventList({ events }) {
  const categoryColors = {
    personal: '#87CEEB', // Sky Blue
    work: '#FF6B6B',     // Coral Red
    family: '#98FB98'    // Pale Green
  };

  return (
    <div className="event-list">
      <h2>Scheduled Events</h2>
      <ul>
        {events.map(event => (
          <li 
            key={event.id}
            style={{ backgroundColor: categoryColors[event.category] }}
          >
            {event.title} - {new Date(event.dateTime).toLocaleString()}
            {event.recurring && ` (Recurring: ${event.frequency})`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;