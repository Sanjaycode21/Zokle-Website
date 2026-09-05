'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeIcosahedron() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    // Check WebGL availability safely
    let isSupported = false;
    try {
      const canvas = document.createElement('canvas');
      isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      isSupported = false;
    }

    setWebglSupported(isSupported);
    if (!isSupported) return;

    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    // Create Scene, Camera and WebGLRenderer
    let renderer: THREE.WebGLRenderer;
    try {
      // Set failIfMajorPerformanceCaveat to false and catch errors
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false });
    } catch (e) {
      console.warn('WebGLRenderer initialization failed:', e);
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create primary Icosahedron mesh
    const geometry = new THREE.IcosahedronGeometry(1.6, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.65,
      shininess: 120,
      reflectivity: 1.0,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Create secondary outer wireframe mesh for tech-forward look
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.62, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8B5CF6, 1.2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 0.8); // slight pink glow from bottom-left
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotations
      mesh.rotation.x = elapsedTime * 0.12;
      mesh.rotation.y = elapsedTime * 0.15;
      wireframe.rotation.x = elapsedTime * 0.12;
      wireframe.rotation.y = elapsedTime * 0.15;

      // Float effect up and down
      const floatOffset = Math.sin(elapsedTime * 1.5) * 0.12;
      mesh.position.y = floatOffset;
      wireframe.position.y = floatOffset;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
      }
      geometry.dispose();
      material.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      if (renderer && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglSupported === false) {
    return (
      <div className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center relative">
        {/* Large violet glow behind */}
        <div className="absolute w-72 h-72 bg-electric-violet/10 blur-[80px] rounded-full pointer-events-none" />
        {/* SVG Glowing Icosahedron fallback */}
        <svg
          width="240"
          height="240"
          viewBox="0 0 100 100"
          className="text-electric-violet drop-shadow-[0_0_30px_rgba(139,92,246,0.5)] animate-[spin_25s_linear_infinite]"
        >
          <polygon points="50,5 20,30 50,55" fill="rgba(139, 92, 246, 0.5)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          <polygon points="50,5 80,30 50,55" fill="rgba(139, 92, 246, 0.35)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          <polygon points="20,30 50,55 20,70" fill="rgba(139, 92, 246, 0.25)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          <polygon points="80,30 50,55 80,70" fill="rgba(139, 92, 246, 0.4)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          <polygon points="50,55 20,70 50,95" fill="rgba(139, 92, 246, 0.45)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          <polygon points="50,55 80,70 50,95" fill="rgba(139, 92, 246, 0.6)" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="0.5" />
          {/* Wireframe outer overlay */}
          <polygon points="50,5 20,30 80,30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <polygon points="20,70 80,70 50,95" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] lg:min-h-[500px] relative"
    />
  );
}
