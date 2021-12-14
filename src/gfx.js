export function gfxSphereMesh(r, stacks, sectors){
	const PI = 3.14159265359; 
	let x 				= 0,
		  y 				= 0,
			z 				= 0,
			xangle 		= 0,
			yangle 		= 0;
	let mesh = new Object();
	mesh.vert   = [];
	mesh.index  = [];
	mesh.uv     = [];
	mesh.normal = []; 

	if ((!stacks) || (stacks < 1) || (stacks > 120) || (isNaN(stacks)))
		stacks = 8;  
	if ((!sectors) || (sectors < 1) || (sectors > 120) || (isNaN(sectors)))
		sectors = 8; 
	for (let i = 0; i < (stacks - 1); i++){
		let alpha = (180/stacks)*(i);
		for(let j = 0; j < sectors; j++){
				let beta = (180/stacks)*(i); 
				mesh.vert.push(r*Math.cos(alpha)*Math.cos(beta));	// Vertex X coord
				mesh.vert.push(r*Math.cos(alpha)*Math.sin(beta));	// Vertex Y coord
				mesh.vert.push(r*Math.sin(alpha));							 	// Vertex Z coord
		}
	}
}