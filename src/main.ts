import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const ringTexture = textureLoader.load(
  "asphalt_textura.avif",
  function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(100, 100);
  }
);

const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ map: ringTexture });
const plane = new THREE.Mesh(geometry, material);

scene.add(plane);

camera.position.z = 5;
camera.position.y = 10;
camera.rotation.x = Math.PI / 4;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
