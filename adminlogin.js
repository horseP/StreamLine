document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform validation
    if (username === "admin" && password === "password") {
      alert("Login successful");
      // Redirect to admin dashboard or perform other actions
    } else {
      alert("Invalid username or password");
    }
  });
  