// Sign-in page

function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform validation here
    
    // Example: Check if any field is empty
    if (email === '' || password === '') {
      alert("Please fill in all fields.");
      return;
    }
    
    alert("Sign in successful!");
  }

  //Sign-up page

  function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Perform validation here
    
    // Example: Check if any field is empty
    if (username === '' || email === '' || password === '') {
      alert("Please fill in all fields.");
      return;
    }
    
    alert("Form submitted successfully!");
  }