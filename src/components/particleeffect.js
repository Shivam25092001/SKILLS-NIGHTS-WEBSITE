import React from 'react'
import '../App.css';
import Particles from 'react-particles-js';

export default function ParticleEffect() {
    return (
        <div >
            <br />
            <br />
            Particle Js
            <Particles id="particles-js"
            params={{
                particles: {
                    number: {
                        value: 400,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#fff'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 0.2
                    }
                 }    
            }}    
        />
        </div>
    )
}
