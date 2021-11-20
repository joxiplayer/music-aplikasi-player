// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCG_92OLetfydA6KDg2kwweJF4bf4hG7Jw",
  authDomain: "joxiplayer-site.firebaseapp.com",
  databaseURL: "https://joxiplayer-site-default-rtdb.firebaseio.com",
  projectId: "joxiplayer-site",
  storageBucket: "joxiplayer-site.appspot.com",
  messagingSenderId: "288570493379",
  appId: "1:288570493379:web:8c1168c876624cc6a95576",
  measurementId: "G-4J03BRQ7Y1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



