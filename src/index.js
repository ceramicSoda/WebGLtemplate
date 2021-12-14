import "/src/styles.css";
import * as gfx from "/src/gfx.js";

var canvas = document.querySelector("#gl_render");
var gl = canvas.getContext("webgl");
if (!gl) {
  canvas.style.display = "none";
  document.querySelector("#gl_error").style.display = "block";
} else {
  let Mesh = gfx.gfxSphereMesh(1,4,8);
  //console.log(Mesh);
}