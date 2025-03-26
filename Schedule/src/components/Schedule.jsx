import React, { useState, useEffect } from 'react';

function EventScheduler() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [frequency, setFrequency] = useState('weekly');
  const [category, setCategory] = useState('personal');
  
  // Request notification permission on mount
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Check for upcoming events
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      events.forEach(event => {
        const eventTime = new Date(event.dateTime);
        if (now >= eventTime && !event.notified) {
          notifyUser(event);
          // Mark as notified
          setEvents(prev => prev.map(e => 
            e.id === event.id ? { ...e, notified: true } : e
          ));
          
          // Handle recurring events
          if (event.recurring) {
            scheduleNextOccurrence(event);
          }
        }
      });
    }, 1000 * 60); // Check every minute
    
    return () => clearInterval(interval);
  }, [events]);

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
    setEvents([...events, newEvent]);
    setTitle('');
    setDateTime('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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