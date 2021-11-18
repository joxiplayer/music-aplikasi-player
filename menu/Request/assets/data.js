// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCmZTmGnbJoUWc_Smb_wlD6Q7VsayIEf9M",
  authDomain: "joxiplayer.firebaseapp.com",
  databaseURL: "https://joxiplayer-default-rtdb.firebaseio.com",
  projectId: "joxiplayer",
  storageBucket: "joxiplayer.appspot.com",
  messagingSenderId: "729525488928",
  appId: "1:729525488928:web:2600f2af0d292b731b1b45",
  measurementId: "G-6LE8X72504",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Request Lagu');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();
  alert("Terima Kasih, Telah Daftar Pada ShopZoid");

  // Get values
  var url = getInputVal('url');

  // Save message
  saveMessage(url);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(url) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    url: url,
  });
}