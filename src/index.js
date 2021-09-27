import './style.css';
import * as THREE from 'three';

class Scene {
    constructor() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas').appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        this.scene = new THREE.Scene();

        this.time = 0;

        this.addDoomy();
        this.animate();

        window.addEventListener('resize', this.resize.bind(this));

    }

    addDoomy() {
        this.doomyGeometry = new THREE.BoxGeometry(1, 1, 1);
        this.doomyMaterial = new THREE.MeshNormalMaterial();
        this.doomyMesh = new THREE.Mesh(this.doomyGeometry, this.doomyMaterial);
        this.scene.add(this.doomyMesh);
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }


    animate() {
        this.time++;
        this.renderer.render(this.scene, this.camera);
        this.doomyMesh.rotation.x += 0.01;
        this.doomyMesh.rotation.y += 0.02;

        requestAnimationFrame(this.animate.bind(this));
    }
}

new Scene();