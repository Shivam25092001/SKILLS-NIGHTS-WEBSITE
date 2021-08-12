import './mainthree.css';
import React, { useEffect, useRef, useState } from 'react';
import { Section } from './section';
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import state from './state.js';

const Sphere = () => {

    return(
      <mesh castShadow position={[-30, 0, 0]}>
        <sphereGeometry attach='geometry' args={[10, 64, 64]} />
        <meshStandardMaterial attach='material'  color = "grey" roughness={0.57} metalness={1} />
      </mesh>
    );
}

const Plane = ()=> {
    return(
      <mesh receiveShadow rotation = {[-Math.PI/2 , 0 , 0]} position={[-75, -27, 0]}>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <meshStandardMaterial attach="material" color="lightblue" />
        <shadowMaterial attach='material' opacity={1} /> 
      </mesh>
    );
}
  
const MainContext = (props)=>{
    return(
      <Section factor={1.5} offset={1}>
        <group position={[0, props.posY , 0]}>
          <Sphere />
          <Plane />
          <Html fullscreen portal={props.domContent}>
            <div className="container">
              {props.children}
            </div>
          </Html>
        </group>
      </Section>
    );
}

function MainThree(){
    const domContent = useRef();
    const scrollArea = useRef();
    const onScroll = (e) => (state.top.current = e.target.scrollTop);
    useEffect(() => void onScroll({ target: scrollArea.current }), []);  
  
    return (
      <>
      <Canvas
        shadows
        colorManagement
        camera = {{position: [0,0,120] , fov: 35}}
      >
        <ambientLight intensity = {1} />
        <directionalLight castShadow
            position={[3, 25, 8]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10} 
          />
        <MainContext domContent={domContent} posY = {100}>
          <h1>Skills Nights</h1>
        </MainContext>
        <MainContext domContent={domContent} posY = {0}>
          <div className="container">
            <h1>Events</h1>
          </div>
        </MainContext>
        <MainContext domContent={domContent} posY = {-100}>
          <div className="container">
            <h1>Archives</h1>
          </div>
        </MainContext>
        <MainContext domContent={domContent} posY = {-200}>
          <div className="container">
            <h1>Team</h1>
          </div>
        </MainContext>
        <MainContext domContent={domContent} posY = {-300}>
          <div className="container">
            <h1>Connect With Us</h1>
          </div>
        </MainContext>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} >
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
      </>
    );
}

export default MainThree;