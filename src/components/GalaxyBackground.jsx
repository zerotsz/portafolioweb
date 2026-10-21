import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GalaxyBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Escena y Cámara
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06090e, 0.07);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3.2, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Parámetros de la Galaxia (Estrellas más pequeñas y verdosas)
    const count = 5500; // Más cantidad de estrellas
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    // Colores: Centro verde menta claro, brazos en verde neón esmeralda (#4DE6A8 / #10B981)
    const colorInside = new THREE.Color('#A7F3D0');
    const colorOutside = new THREE.Color('#4DE6A8');

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 4.8 + 0.1;
      const spinAngle = radius * 2.4;
      const branches = 3;
      const branchAngle = ((i % branches) * 2 * Math.PI) / branches;

      const randomX = (Math.random() - 0.5) * 0.3 * radius;
      const randomY = (Math.random() - 0.5) * 0.3 * radius;
      const randomZ = (Math.random() - 0.5) * 0.3 * radius;

      const i3 = i * 3;
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Degradado de color verde
      const mixedColor = colorInside.clone().lerp(colorOutside, radius / 4.8);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Estrellas con tamaño reducido (size: 0.018)
    const material = new THREE.PointsMaterial({
      size: 0.018,
      sizeAttenuation: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.9,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animación suave
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      points.rotation.y = elapsedTime * 0.09;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#06090e',
      }}
    />
  );
}