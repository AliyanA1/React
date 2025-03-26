export const notifyUser = (event) => {
    if (Notification.permission === "granted") {
      new Notification(event.title, {
        body: `Event at ${new Date(event.dateTime).toLocaleString()}`,
        icon: '/icon.png' // Path relative to public folder
      });
    }
  };
  
  export const scheduleNextOccurrence = (event, setEvents) => {
    let nextDate = new Date(event.dateTime);
    switch (event.frequency) {
      case 'daily':
        nextDate.setDate(nextDate.getDate() + 1);
        break;
      case 'weekly':
        nextDate.setDate(nextDate.getDate() + 7);
        break;
      case 'monthly':
        nextDate.setMonth(nextDate.getMonth() + 1);
        break;
      default:
        break;
    }
    const nextEvent = { 
      ...event, 
      id: Date.now(), 
      dateTime: nextDate.toISOString().slice(0,16), 
      notified: false 
    };
    setEvents(prev => [...prev, nextEvent]);
  };