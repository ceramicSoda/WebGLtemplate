var canvas = document.querySelector("#gl_render");
var gl = canvas.getContext("webgl");
if (!gl) {
  canvas.style.display = "none";
  document.querySelector("#gl_error").style.display = "block";
}
