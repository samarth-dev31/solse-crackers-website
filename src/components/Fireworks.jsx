import { Fireworks } from "@fireworks-js/react";

export default function FireworksBackground() {
  return (
    <Fireworks
      options={{
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 80,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 20,
        flickering: 50,
        lineStyle: "round",
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}