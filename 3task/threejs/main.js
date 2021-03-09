/*
##############################
Trabalho realizado por:
Henrique Vermelho
Hugo Fernandes

Código parcialmente dado e completado pela dupla.
##############################
*/

// ThreeJS variables
var camera, scene, renderer;

// OrbitControls (camera)
var controls;

// Optional (showFps)
var stats;

// Objects in Scene
var sun, earth;
// To be added 
// var moon; ...  

// Light in the scene 
var sunlight;

function init() {

    // Setting up renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    window.addEventListener('resize', onWindowResize, false);
    renderer.setSize(window.innerWidth, window.innerHeight); 

    // Setting up camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.5, 1000 );
    camera.position.z = 3;
    camera.position.y = 20;
    camera.lookAt( 0, 0, -4);
    
    

    // Setting up scene
    scene = new THREE.Scene();
    // Earth
    earth = createSphere(1, 20, 'texture/earth.jpg', 'Phong');
    earth.position.z = -16;

    // Sun (Sphere + Light)
    sun = createSphere(1.5, 20, 'texture/sun.jpg');
    sun.position.z = -3;
    /* Complete: add light
    sunlight...;
    sun...
    */
    sunlight = new THREE.PointLight(0xffffff, 1.5, 0);
    sun.add(sunlight); 
    sun.add(earth);
    
    /* Complete: add 
    other planets */ 
    moon = createSphere(0.125, 20, 'texture/moon.jpg', 'Phong')
    moon.position.z = -3;
    
    mars = createSphere(0.5, 20, 'texture/mars.jpg', 'Phong');
    mars.position.z = -20;
    mercury = createSphere(0.5, 20, 'texture/mercury.jpg', 'Phong')
    mercury.position.z = -5;
    
    venus = createSphere(1, 20, 'texture/venus.jpg', 'Phong')
    venus.position.z = -10;
    
    jupiter = createSphere(1.5, 20, 'texture/jupiter.jpg', 'Phong')
    jupiter.position.z = -30;
   
    saturn = createSphere(1.44, 20, 'texture/saturn.jpg', 'Phong')
    saturn.position.z = -35;

    saturn_ring = createRing(1.66,2.6,90, 'texture/saturn_ring.png', 'Phong') 
    saturn_ring.rotation.x=-1.1;
    saturn_ring.position.z = -35;   
   
    uranus = createSphere(1.25, 20, 'texture/uranus.jpg', 'Phong')
    uranus.position.z = -40;

    neptune = createSphere(1.25, 20, 'texture/neptune.jpg', 'Phong')
    neptune.position.z = -45;
    /*




    */

    sun.add(mars);
    sun.add(mercury);
    sun.add(venus);
    sun.add(jupiter); //
    sun.add(saturn); //
    sun.add(uranus); //
    sun.add(neptune);
    
    
    sun.add(saturn_ring);   
    
    earth.add(moon);

    //scene.add(earth);
    //scene.add(moon);
    scene.add(sun);

    /*
    scene.add(mars);
    scene.add(mercury);
    scene.add(neptune);
    scene.add(uranus);
    scene.add(venus);
    */

    
    // Adding both renderer and stats to the Web page, also adjusting OrbitControls
    stats = new Stats();
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(stats.dom);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.zoomSpeed = 2;

    // Adding listener for keydown 
    document.addEventListener("keydown", onDocumentKeyDown, false);

    // Saving initial position 
    scene.traverse( function( node ) {
        if ( node instanceof THREE.Object3D ) {
            node.savePosition();
        }
    
    } ); 
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
}

function onDocumentKeyDown(event) {
    console.log(event.which);
}

// For rotation

var origin = new THREE.Vector3(0, 0, 0);

var axis = new THREE.Vector3(0, 1, 0);

/*
var dt = 0.25;
var earth_trans_speed = 25;
var mercury_trans_speed = 25/88;
var venus_trans_speed = 25/220;
var mars_trans_speed = 25 * 2;
var jupiter_trans_speed = 25* 11.8;
var saturn_trans_speed = 25/30;
var uranus_trans_speed = 25/88;
var neptune_trans_speed = 25/165;
*/

// Teste com velocidades 2
var dt = 5;
var earth_trans_speed = 1/365;
var mercury_trans_speed = 1/88;
var venus_trans_speed = 1/225;
var mars_trans_speed = 1/686;
var jupiter_trans_speed = 1/4329;
var saturn_trans_speed = 1/10585;
var uranus_trans_speed = 1/30660;
var neptune_trans_speed = 1/60225;

var saturn_ring_trans_speed = 1/10585;

var earth_value = earth_trans_speed * dt; 
var mercury_value = mercury_trans_speed * dt;
var venus_value = venus_trans_speed * dt;
var mars_value = mars_trans_speed * dt;
var jupiter_value = jupiter_trans_speed * dt;
var saturn_value = saturn_trans_speed * dt;
var uranus_value = uranus_trans_speed * dt;
var neptune_value = neptune_trans_speed * dt;

var saturn_ring_value = saturn_ring_trans_speed * dt;



function animate() {
    
    requestAnimationFrame( animate );

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

    stats.update();
    renderer.render( scene, camera );

    // rotation.y 0.02 is one earth day
    var earthRotationDay = 365;
    earth.rotation.y+=earthRotationDay;
    mercury.rotation.y+=(earthRotationDay/58.6);
    venus.rotation.y+=(earthRotationDay/243);
    mars.rotation.y+=(earthRotationDay/1.03);
    jupiter.rotation.y+=(earthRotationDay*0.41);
    saturn.rotation.y+=(earthRotationDay*0.45);
    uranus.rotation.y+=(earthRotationDay*0.72);
    neptune.rotation.y+=(earthRotationDay*0.67);

    saturn_ring.rotation.z+=(earthRotationDay*0.00045);
    
    
    //Revolution
    earth.rotateAroundPoint(origin,earth_value,axis,0);
    mercury.rotateAroundPoint(origin,mercury_value, axis)
    venus.rotateAroundPoint(origin, venus_value, axis)
    mars.rotateAroundPoint(origin, mars_value, axis)
    jupiter.rotateAroundPoint(origin, jupiter_value, axis)
    saturn.rotateAroundPoint(origin, saturn_value, axis)
    uranus.rotateAroundPoint(origin, uranus_value, axis)
    neptune.rotateAroundPoint(origin, neptune_value, axis)
    saturn_ring.rotateAroundPoint(origin, saturn_value, axis)    
    //sun.rotation.y+=0.02;

    
    

}

init();
animate();


