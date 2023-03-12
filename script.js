document.getElementById("show").addEventListener("click", function () {
  var senha = document.getElementById("password");
  var olho = document.getElementById("show");

  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
});
