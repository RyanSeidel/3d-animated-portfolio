import React from 'react';
import { Sphere } from '@react-three/drei'; // Import Sphere from drei
import { MeshDistortMaterial } from '@react-three/drei'; 

const Shape = () => {
  return (

    <>
            <Sphere args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial 
            color="#DB8B9B"
            attach="material" 
            distort={0.5} 
            speed={2}/>
            </Sphere>
            <ambientLight intensity={2} />
            <directionalLight position={[1, 2, 3]} />
            {/* <OrbitControls enabledZoom={false}/> */}
            

    </>


  )
}

export default Shape