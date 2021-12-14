export function gfxSphereMesh(r, stacks, sectors){
	const PI = 3.1415; 																//becasuse I hate JS math lib
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

		mesh.vert.push(0);																		//first vertex X coord
		mesh.vert.push(0);																		//first vertex Y coord
		mesh.vert.push(-r);																		//first vertex Z coord
	for (let i = 1; i < (stacks); i++){
		let alpha = (180/stacks)*(i)*(PI/180);
		for(let j = 0; j < sectors; j++){
				let beta = (360/sectors)*(j)*(PI/180); 
				mesh.vert.push(Math.round(r*Math.cos(alpha)*Math.cos(beta)*1000)/1000);	// Vertex X coord
				mesh.vert.push(Math.round(r*Math.cos(alpha)*Math.sin(beta)*1000)/1000);	// Vertex Y coord
				mesh.vert.push(Math.round(r*Math.sin(alpha)								*1000)/1000);	// Vertex Z coord
		}
	}
	mesh.vert.push(0);																		//last vertex X coord
	mesh.vert.push(0);																		//last vertex Y coord
	mesh.vert.push(r);																		//last vertex Z coord
	return(mesh);
}