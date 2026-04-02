import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function Camera3D() {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1, 0.8]} />
        <meshStandardMaterial color="#2E7D32" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, 0.2, 0.5]}>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#1565C0" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.6, 0.2, 0.9]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#64B5F6" metalness={0.7} roughness={0.3} />
      </mesh>
      <pointLight position={[2, 2, 2]} intensity={1} />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#64B5F6" />
    </group>
  );
}
