import React, { useState } from 'react';

function EventForm({ setEvents }) {
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [frequency, setFrequency] = useState('weekly');
  const [category, setCategory] = useState('personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      dateTime,
      recurring,
      frequency,
      category,
      notified: false
    };
    setEvents(prev => [...prev, newEvent]);
    setTitle('');
    setDateTime('');
    setRecurring(false);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input 
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />
      <label>
        <input 
          type="checkbox"
          checked={recurring}
          onChange={(e) => setRecurring(e.target.checked)}
        />
        Recurring Event
      </label>
      {recurring && (
        <select 
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      )}
      <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="personal">Personal (Blue)</option>
        <option value="work">Work (Red)</option>
        <option value="family">Family (Green)</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;