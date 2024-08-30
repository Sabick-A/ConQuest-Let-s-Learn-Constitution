// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9a9a9a); // Set background to light gray

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft ambient light
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 3.5); // Increase intensity
light.position.set(1, 1, 1).normalize();
scene.add(light);

let model;
let initialRotationY = Math.PI / 4; // 45 degrees to the right

// Load the Lady Justice model using GLTFLoader
const loader = new THREE.GLTFLoader();
loader.load('model.glb', function (gltf) {
    model = gltf.scene;
    model.scale.set(5, 5, 5);  // Adjust scale
    model.position.set(0, 0, 0); // Center the model in the scene

    // Set the initial rotation of the model to 45 degrees to the right
    model.rotation.y = initialRotationY;

    scene.add(model);
    
    // Position the camera
    camera.position.set(0, 1.5, 7); // Move camera further back for better view
    camera.lookAt(model.position); // Make the camera look at the model
    
    // Start animation
    animate();
}, undefined, function (error) {
    console.error(error);
});

// Track mouse movement
const mouse = new THREE.Vector2();

// Event listener to capture mouse movements
window.addEventListener('mousemove', function (event) {
    // Convert mouse X coordinate to normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
});

// Function to rotate model left and right (Y-axis) based on the cursor's horizontal position
function rotateModelLeftRight() {
    if (model) {
        // Map mouse.x to a range between -90 degrees and +90 degrees (i.e., -π/2 to π/2 radians)
        const rotationY = mouse.x * (Math.PI / 2); // -π/2 to +π/2 (90°)

        // Apply the calculated rotation to the model (add it to the initial 45 degrees)
        model.rotation.y = initialRotationY + rotationY;
    }
}

// Render loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model based on mouse's X-axis movement
    rotateModelLeftRight();

    // Render the scene
    renderer.render(scene, camera);
}

// Adjust scene on window resize
window.addEventListener('resize', function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
