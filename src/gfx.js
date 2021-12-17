export function gfxSphereMesh(r, stacks, sectors) {
  if (!stacks || stacks < 1 || stacks > 120 || isNaN(stacks)) stacks = 8;
  if (!sectors || sectors < 1 || sectors > 120 || isNaN(sectors)) sectors = 8;
  let facesCount = (stacks - 2) * sectors * 2 + sectors * 2;
  let verticiesCount = (stacks-1) * sectors + 1; 
  let mesh = new Object();
  mesh.vert   = [];
  mesh.index  = [];
  mesh.uv     = [];
  mesh.normal = [];
  const PI = 3.1415; //becasuse I hate JS math lib

  //----------------------------calc-verticies------------------
  mesh.vert.push(0); //first vertex X coord
  mesh.vert.push(0); //first vertex Y coord
  mesh.vert.push(r); //first vertex Z coord
  let decPoint = Math.pow(10, 3);
  for (let i = 1; i < stacks; i++) {  
    let alpha = (180 / stacks) * i * (PI / 180);
    for (let j = 0; j < sectors; j++) {    
      let beta = (360 / sectors) * j * (PI / 180);
      let x = r * Math.sin(alpha) * Math.cos(beta);
      let y = r * Math.sin(alpha) * Math.sin(beta);
      let z = r * Math.cos(alpha); 
      mesh.vert.push(Math.round(x * decPoint) / decPoint); // Vertex X coord
      mesh.vert.push(Math.round(y * decPoint) / decPoint); // Vertex Y coord
      mesh.vert.push(Math.round(z * decPoint) / decPoint); // Vertex Z coord
    }
  }
  mesh.vert.push(0); //last vertex X coord
  mesh.vert.push(0); //last vertex Y coord
  mesh.vert.push(-r); //last vertex Z coord

  //----------------------------calc-face-indices------------------
  for (let i = 0; i < stacks; i++){
    for (let j = 0; j < sectors; j++){
      if (i === 0){ 
        mesh.uv.push((1/stacks)*i,(1/sectors)*j);
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*j);
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*(j+1));
        if (j < (sectors-1)){
          mesh.index.push(0, j+1, j+2);
        } else {
          mesh.index.push(0, j+1, 1);
        }      
      } else if(i === (stacks-1)) {
        mesh.uv.push((1/stacks)*i,(1/sectors)*j);
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*j);
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*(j+1));        
        if (j < (sectors-1)){
          mesh.index.push(verticiesCount, (i-1)*sectors+j+1, (i-1)*sectors+j+2);
        } else {
          mesh.index.push(verticiesCount, (i-1)*sectors+j+1, verticiesCount-sectors);
        }      
      } else {
        mesh.uv.push((1/stacks)*i,(1/sectors)*j);
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*j);
        mesh.uv.push((1/stacks)*i,(1/sectors)*(j+1));
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*j);
        mesh.uv.push((1/stacks)*i,(1/sectors)*(j+1));
        mesh.uv.push((1/stacks)*(i+1),(1/sectors)*(j+1));
        if (j < (sectors-1)){
          mesh.index.push((i)*sectors+j+1, (i-1)*sectors+j+1, (i-1)*sectors+j+2);
          mesh.index.push((i)*sectors+j+1, (i)  *sectors+j+2, (i-1)*sectors+j+2);
        } else {
          mesh.index.push((i)*sectors+j+1, (i-1)*sectors+j+1, (i-2)*sectors+j+2);
          mesh.index.push((i)*sectors+j+1, (i)  *sectors+j+2, (i-2)*sectors+j+2);
        }
      }
    }
  }
  console.log(mesh);
  return mesh;
}
