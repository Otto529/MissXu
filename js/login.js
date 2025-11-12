function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const correctUsername = "MissXu";
  const correctPassword = "20030713";

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "welcome.html";
  } else {
    alert("请许同学输入正确的用户名和密码哦！");
  }
}

function register() {
  alert("只有许同学可以使用哦！");
}
