import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface FloatingIconProps {
  icon: React.ReactNode;
  color: string;
  size: string;
  position: string;
  delay: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  color,
  size,
  position,
  delay,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current && constraintsRef.current) {
      const icon = iconRef.current;
      const constraints = constraintsRef.current;

      // Animasi mengambang
      gsap.to(icon, {
        y: "+=20",
        x: "+=10",
        rotate: "+=5",
        repeat: -1,
        yoyo: true,
        duration: 2 + Math.random(),
        ease: "sine.inOut",
        delay: delay,
      });

      // Draggable dengan inersia dan pantulan
      Draggable.create(icon, {
        type: "x,y",
        bounds: constraints,
        inertia: true,
        minimumMovement: 1, // Lebih responsif
        overshootTolerance: 0, // Pantulan segera terjadi
        throwResistance: 100, // Kecepatan drag lebih tinggi
        onDrag: function () {
          gsap.to(this.target, {
            rotation: this.getDirection("start") === "left" ? -5 : 5,
            duration: 0.1,
          });
        },
        onDragEnd: function () {
          const bounds = this.vars.bounds as HTMLElement;
          const rect = this.target.getBoundingClientRect();
          const containerRect = bounds.getBoundingClientRect();

          // Pantulan saat melebihi batas
          if (rect.left < containerRect.left) {
            gsap.to(this.target, {
              x: "+=20",
              ease: "bounce.out",
              duration: 0.2,
            });
          } else if (rect.right > containerRect.right) {
            gsap.to(this.target, {
              x: "-=20",
              ease: "bounce.out",
              duration: 0.2,
            });
          }
          if (rect.top < containerRect.top) {
            gsap.to(this.target, {
              y: "+=20",
              ease: "bounce.out",
              duration: 0.2,
            });
          } else if (rect.bottom > containerRect.bottom) {
            gsap.to(this.target, {
              y: "-=20",
              ease: "bounce.out",
              duration: 0.2,
            });
          }
        },
        onRelease: function () {
          // Reset rotasi setelah dilepaskan
          gsap.to(this.target, { rotation: 0, duration: 0.2 });
        },
      });
    }
  }, [delay]);

  return (
    <div
      ref={constraintsRef}
      className={`absolute ${position} w-48 h-48 bg-transparent border border-dashed border-gray-300`}
    >
      <div
        ref={iconRef}
        className={`${size} ${color} rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 cursor-move`}
      >
        {icon}
      </div>
    </div>
  );
};

export default FloatingIcon;
