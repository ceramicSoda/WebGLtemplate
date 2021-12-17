export function gfxSphereMesh(r, stacks, sectors) {
  const PI = 3.1415; //becasuse I hate JS math lib
  let mesh = new Object();
  mesh.vert   = [];
  mesh.index  = [];
  mesh.uv     = [];
  mesh.normal = [];
  if (!stacks || stacks < 1 || stacks > 120 || isNaN(stacks)) stacks = 8;
  if (!sectors || sectors < 1 || sectors > 120 || isNaN(sectors)) sectors = 8;
  //----------------------------calc-verticies------------------
  mesh.vert.push(0); //first vertex X coord
  mesh.vert.push(0); //first vertex Y coord
  mesh.vert.push(-r); //first vertex Z coord
  let decPoint = Math.pow(10, 3);
  for (let i = 1; i < stacks; i++) {
    let alpha = (180 / stacks) * i * (PI / 180);
    for (let j = 0; j < sectors; j++) {
      let beta = (360 / sectors) * j * (PI / 180);
      mesh.vert.push(
        Math.round(r * Math.cos(alpha) * Math.cos(beta) * decPoint) / decPoint
      ); // Vertex X coord
      mesh.vert.push(
        Math.round(r * Math.cos(alpha) * Math.sin(beta) * decPoint) / decPoint
      ); // Vertex Y coord
      mesh.vert.push(Math.round(r * Math.sin(alpha) * decPoint) / decPoint); // Vertex Z coord
    }
  }
  mesh.vert.push(0); //last vertex X coord
  mesh.vert.push(0); //last vertex Y coord
  mesh.vert.push(r); //last vertex Z coord
  //----------------------------calc-face-indices------------------
  let indicesCount = (stacks - 2) * sectors * 2 + sectors * 2;
  for (let i = 0; i < indicesCount; i++) {
    if      (i < (sectors-1)) {mesh.index[i]=(0, i+1, i+2);}
    else if (i == (sectors-1)) {mesh.index[i]=(0, i+1, 1);}
  }
  console.log(mesh);
  return mesh;
}
