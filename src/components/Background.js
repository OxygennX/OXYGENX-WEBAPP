import React, { useState, useEffect, useRef } from "react";
import BIRDS from "D:/start-up/OxygennX/my-app/node_modules/vanta/dist/vanta.birds.min";
import * as THREE from "three";

export const Background = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0,
          color1: 0xff21,
          speedLimit: 4.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="content">

        <p>Join the Change</p>

    </div>
  );
};