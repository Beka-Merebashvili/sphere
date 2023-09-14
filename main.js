import * as THREE from 'three';
import "./style.css"

// Scene
const scene = new THREE.Scene();

// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
})
const mash = new THREE.Mesh(geometry, material)
scene.add(mash)

// Sizes
const sizes = {
    width: window.innerWidth,
    heigth: window.innerHeight,
}

// Light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.heigth, 0.1, 100)
camera.position.z = 20
scene.add(camera)

// Rerender
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.heigth)
renderer.render(scene, camera)

// Resize
window.addEventListener("resize", () => {
    // Update Sizes
    sizes.width = window.innerWidth
    sizes.heigth = window.innerHeight
    // Update Camerea
    
    camera.aspect = sizes.width / sizes.heigth
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.heigth)
})

const loop = () => {
    renderer.render(scene,camera);
    window.requestAnimationFrame(loop);

}
loop()




