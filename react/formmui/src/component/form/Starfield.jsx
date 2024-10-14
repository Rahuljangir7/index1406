// Starfield.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = ({ mousePosition, resetPositions }) => {
  const starGeometry = new THREE.SphereGeometry(0.5, 24, 24); // Increased size
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // Create random stars
  const generateStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
      stars.push(star);
    }
    return stars;
  };

  const [stars, setStars] = useState(generateStars(5000)); // 5000 stars
  const [originalPositions, setOriginalPositions] = useState([]); // Store original positions
  const group = useRef();

  useEffect(() => {
    // Save original positions when stars are first created
    const positions = stars.map(star => ({ x: star.position.x, y: star.position.y, z: star.position.z }));
    setOriginalPositions(positions);
  }, [stars]);

  useFrame((state) => {
    const { mouse } = state;

    // Rotate stars slightly
    group.current.rotation.x += 0.0005;
    group.current.rotation.y += 0.0005;

    // If mousePosition exists (cursor stopped), move stars towards cursor
    if (mousePosition) {
      stars.forEach((star, index) => {
        const targetX = mousePosition.x * 100; // Scale cursor position
        const targetY = mousePosition.y * 100;

        // Move stars closer to the cursor
        star.position.x += (targetX - star.position.x) * 0.02;
        star.position.y += (targetY - star.position.y) * 0.02;
      });
    }

    // If resetPositions is true, gradually return stars to their original positions
    if (resetPositions) {
      stars.forEach((star, index) => {
        star.position.x += (originalPositions[index].x - star.position.x) * 0.05; // Smooth return
        star.position.y += (originalPositions[index].y - star.position.y) * 0.05;
        star.position.z += (originalPositions[index].z - star.position.z) * 0.05;
      });
    }
  });

  return (
    <group ref={group}>
      {stars.map((star, index) => (
        <primitive object={star} key={index} />
      ))}
    </group>
  );
};

const Starfield = () => {
  const [mousePosition, setMousePosition] = useState(null);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [resetPositions, setResetPositions] = useState(false);
  const mouseTimer = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setIsMouseMoving(true);
      setResetPositions(true); // Trigger reset positions when mouse moves

      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      setMousePosition({ x, y });

      // Clear the timer if the mouse is still moving
      clearTimeout(mouseTimer.current);

      // Set a timer to detect when the mouse has stopped moving
      mouseTimer.current = setTimeout(() => {
        setIsMouseMoving(false); // Mouse has stopped moving
        setResetPositions(false); // Disable reset when mouse stops
      }, 1000); // 0.5 seconds
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
      <Stars mousePosition={!isMouseMoving ? mousePosition : null} resetPositions={resetPositions} />
    </Canvas>
  );
};

export default Starfield;
