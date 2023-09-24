import React, { useState, useEffect } from 'react';
import PushNotification from 'react-push-notification';

const pushNotification= () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Initialize the `PushNotification` component.
    const pushNotification = new PushNotification({
      provider: 'pushpad',
      appId: 'YOUR_PUSHPAD_APP_ID',
    });

    // Listen for the `notificationclick` event.
    pushNotification.addEventListener('notificationclick', function(event) {
      // Get the notification object.
      const notification = event.notification;

      // Set the notification state.
      setNotification(notification);
    });
  }, []);

  if (notification) {
    // Extract the data of the notification.
    const title = notification.title;
    const body = notification.body;
    const additionalData = notification.data;

    // Do something with the notification data, such as display it on your website or send it to an API.
    return (
      <div>
        <h1>Notification Title: {title}</h1>
        <p>Notification Body: {body}</p>
        <p>Notification Additional Data: {additionalData}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No notifications yet</h1>
      </div>
    );
  }
};

export default pushNotification;