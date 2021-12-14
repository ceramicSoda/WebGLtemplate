import "/src/styles.css";
import * as gfx from "/src/gfx.js";

var canvas = document.querySelector("#gl_render");
var gl = canvas.getContext("webgl");
if (!gl) {
  console.error('ERROR: Browser does not support WebGL')
} else {
  gl.clearColor(0.12, 0.1, 0.12, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  let Mesh = gfx.gfxSphereMesh(1,4,8);
  console.log(Mesh);
}