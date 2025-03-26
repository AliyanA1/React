import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { notifyUser, scheduleNextOccurrence } from './utils/eventUtils';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      events.forEach(event => {
        const eventTime = new Date(event.dateTime);
        if (now >= eventTime && !event.notified) {
          notifyUser(event);
          setEvents(prev => prev.map(e => 
            e.id === event.id ? { ...e, notified: true } : e
          ));
          if (event.recurring) {
            scheduleNextOccurrence(event, setEvents);
          }
        }
      });
    }, 1000 * 60); // Check every minute
    
    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className="app">
      <h1>Event Scheduler</h1>
      <EventForm setEvents={setEvents} />
      <EventList events={events} />
    </div>
  );
}

export default App;