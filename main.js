import * as THREE from 'three';
import './style.css'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth * 0.7 / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth * 0.7, window.innerHeight );
document.body.appendChild( renderer.domElement );

const webGLDiv = document.getElementById('webGL');
webGLDiv.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 2.8, 64, 64 );
const material = new THREE.MeshBasicMaterial( { color: 0xf5f5f5 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();



window.onblur = function () { document.title = 'OVERPROFED DOUGH!! Come back!!!'; }
window.onfocus = function () { document.title = 'Doughboyz Bakery - 🍞 Sourdough Bread Only'; }