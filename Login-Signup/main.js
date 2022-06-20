function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
      username: username,
      email: email,
      password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Sign Up Success");
  }

  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("Enter Your Username & Password");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Login Success");
      window.location.href = "todolist.html";
    } else {
      alert("Login Failed");
    }
  }