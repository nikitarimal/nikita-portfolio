"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface AntigravityParticlesProps {
  count?: number;
  repelRadius?: number;
  repelStrength?: number;
  baseSize?: number;
  accentColor?: string;
  baseColor?: string;
  opacity?: number;
}

/**
 * Antigravity: Interactive particle hover component.
 * Particles subtly repel from the cursor, creating a smooth anti-gravity effect.
 */
export default function AntigravityParticles({
  count = 2500,
  repelRadius = 750,
  repelStrength = 1.5,
  baseSize = 3.0, 
  accentColor = "#e5ff00",
  baseColor = "#ffffff",
  opacity = 0.8,
}: AntigravityParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    containerRef.current.appendChild(renderer.domElement);

    // --- Particle System ---
    const positions = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    
    const palette = [
      new THREE.Color(baseColor),
      new THREE.Color("#888888"), // Muted White/Gray
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 5000;
      const y = (Math.random() - 0.5) * 4000;
      const z = (Math.random() - 0.5) * 2000;

      positions[i3] = initialPositions[i3] = x;
      positions[i3+1] = initialPositions[i3+1] = y;
      positions[i3+2] = initialPositions[i3+2] = z;

      velocities[i3] = (Math.random() - 0.5) * 0.5;
      velocities[i3+1] = (Math.random() - 0.5) * 0.5;
      velocities[i3+2] = (Math.random() - 0.5) * 0.5;
      
      phases[i] = Math.random() * Math.PI * 2;

      const rarity = Math.random();
      const color = rarity > 0.7 ? palette[1] : palette[0];
      
      colors[i3] = color.r;
      colors[i3+1] = color.g;
      colors[i3+2] = color.b;

      sizes[i] = (Math.random() * baseSize + 2.0);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          // High-visibility attenuation
          gl_PointSize = size * (2500.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          // Vivid bloom-like point with intense core
          float strength = 1.0 - (dist * 2.0);
          float core = pow(strength, 6.0) * 1.5;
          float glow = pow(strength, 2.0) * 0.6;
          gl_FragColor = vec4(vColor, core + glow);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // --- Interaction ---
    const mouse = new THREE.Vector2(-9999, -9999);
    const targetMouse = new THREE.Vector2(-9999, -9999);
    
    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const posAttr = geometry.attributes.position.array as Float32Array;

      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;

      // Map mouse more broadly
      const mouseX = mouse.x * 1500;
      const mouseY = mouse.y * 1200;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // 1. Organic Anti-gravity Drift (Continuous motion for all)
        const drift = 0.4; // Increased speed
        const amp = 0.012; // Increased amplitude
        velocities[i3] += Math.sin(elapsedTime * drift + phases[i]) * amp;
        velocities[i3+1] += Math.cos(elapsedTime * (drift * 0.8) + phases[i] * 1.5) * amp;
        velocities[i3+2] += Math.sin(elapsedTime * (drift * 0.5) + phases[i]) * amp;

        // 2. Continuous Floating Logic (Never static)
        velocities[i3] += (Math.random() - 0.5) * 0.005;
        velocities[i3+1] += (Math.random() - 0.5) * 0.005;

        // 3. Repel Logic
        const dx = posAttr[i3] - mouseX;
        const dy = posAttr[i3+1] - mouseY;
        const distSq = dx * dx + dy * dy;
        const radiusSq = repelRadius * repelRadius;

        if (distSq < radiusSq) {
          const dist = Math.sqrt(distSq);
          const force = (1.0 - dist / repelRadius) * repelStrength;
          
          velocities[i3] += (dx / dist) * force * 2.0;
          velocities[i3+1] += (dy / dist) * force * 2.0;
        }

        // 4. Elastic Anchor (Gentler so drift stays dominant)
        const anchor = 0.0015;
        velocities[i3] += (initialPositions[i3] - posAttr[i3]) * anchor;
        velocities[i3+1] += (initialPositions[i3+1] - posAttr[i3+1]) * anchor;
        velocities[i3+2] += (initialPositions[i3+2] - posAttr[i3+2]) * anchor;

        posAttr[i3] += velocities[i3];
        posAttr[i3+1] += velocities[i3+1];
        posAttr[i3+2] += velocities[i3+2];

        // Smooth Friction
        velocities[i3] *= 0.96;
        velocities[i3+1] *= 0.96;
        velocities[i3+2] *= 0.96;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [count, repelRadius, repelStrength, baseSize, accentColor, baseColor]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}
