function gfxSphereMesh(r, tracks, sectors){
	const PI = 3.14159265359; 
	let x = 0,
		  y = 0,
		  z = 0;
	let mesh = new Object();
	mesh.vert   = [];
	mesh.index  = [];
	mesh.uv     = [];
	mesh.normal = []; 

	if (!tracks) || (tracks < 1) || (tracks > 120) || (isNaN(tracks))
		tracks = 8;  
	if (!sectors) || (sectors < 1) || (sectors > 120) || (isNaN(sectors))
		sectors = 8; 
		
}