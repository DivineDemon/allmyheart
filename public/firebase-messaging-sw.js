importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAs32T96rhRgzjO5ZBjClHOshFuGVIm58M",
  authDomain: "allmyheart.firebaseapp.com",
  databaseURL: "https://allmyheart.firebaseio.com",
  projectId: "allmyheart",
  storageBucket: "allmyheart.appspot.com",
  messagingSenderId: "105131676443",
  appId: "1:105131676443:web:fb780c47b67547f9e1f9be",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
