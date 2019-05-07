var firebaseConfig = {
    apiKey: "AIzaSyAFwHOO_A4INWWsF3d4nl6vkY8FldK1JXk",
    authDomain: "rexar-8658c.firebaseapp.com",
    databaseURL: "https://rexar-8658c.firebaseio.com",
    projectId: "rexar-8658c",
    storageBucket: "rexar-8658c.appspot.com",
    messagingSenderId: "414960729379",
    appId: "1:414960729379:web:b6f0ca4df21805ad"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  // 
var database = firebase.database();
// Reference Guest Collection

var guestsRef = database.ref('guests');

// Listen for form submit

document.getElementById('checkoutForm').addEventListener('submit', submitForm);

// Submit Form

  function submitForm(e) {
      e.preventDefault();
    
      var name = getInputVal('name');
      var email = getInputVal('email');
      var address = getInputVal('address');
      var city = getInputVal('city');
      var state = getInputVal('state');
      var zip = getInputVal('zip');

      saveGuests(name, email, address, city, state, zip);

      console.log("submitted!");
  }

// Function to get form values

function getInputVal(id) {
return document.getElementById(id).value;
}

// Save guests to firebase

function saveGuests(name, email, address, city, state, zip) {

    guestsRef.push().set({
        name: name,
        email: email,
        address: address,
        city: city,
        state: state,
        zip: zip
    });
}