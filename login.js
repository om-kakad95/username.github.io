function login(){
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // demo credentials
  if(user === "jee" && pass === "1234"){
    localStorage.setItem("login", "true");
    window.location.href = "index.html";
  }else{
    document.getElementById("error").innerText = "Invalid login";
  }
}
