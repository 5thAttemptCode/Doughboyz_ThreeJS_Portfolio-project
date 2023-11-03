import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import { gsap } from "gsap";
import './style.css'

gsap.registerPlugin(ScrollTrigger) 


//_____________________________________________________
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth * 0.7 / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth * 0.7, window.innerHeight )
const webGl= document.getElementById('webGL');
webGl.appendChild(renderer.domElement);

//Resize
window.addEventListener('resize', () => {
	const width = window.innerWidth * 0.7;
	const height = window.innerHeight;

	// Update camera
	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(width, height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const webGLDiv = document.getElementById('webGL')
webGLDiv.appendChild( renderer.domElement )


const geometry = new THREE.SphereGeometry( 2.8, 64, 64 )
const material = new THREE.RawShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
	uniforms: 
	{
		// uFrequency: { value: 3.0 }
		uFrequency: { value: new THREE.Vector2(2.75, 2.75) },
		uTime: { value: 0 }
	}
})


const dough = new THREE.Mesh( geometry, material )
scene.add( dough )
camera.position.z = 5
const clock = new THREE.Clock()

function animate() {
	const elapsedTime = clock.getElapsedTime()
	//Update material
	material.uniforms.uTime.value = elapsedTime

	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}

animate()



//_____________________________________________________
//MENU_________________________________________________
const menuBtn = document.getElementById("menuBtn")
// const menu = document.getElementById("menu")

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('isActive')
})

gsap.to(".menuBtn", {
    opacity: 1,
	pointerEvents: "all",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      toggleActions: "restart none none reverse"
    },
});


window.addEventListener('click', (e) => {
	if (e.target !== menuBtn && !menuBtn.contains(e.target)) {
	  menuBtn.classList.remove('isActive');
	}
  });



//__________________________________________________________
//TAB TITLE_________________________________________________
window.onblur = function () { document.title = 'OVERPROFED DOUGH!! Come back!!!'; }
window.onfocus = function () { document.title = 'Doughboyz Bakery - 🍞 Sourdough Bread Only'; }