
import React, { useEffect, useRef } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width: number, height: number;
    let stars: Star[] = [];
    let entities: SpaceEntity[] = [];
    let galaxyParticles: GalaxyParticle[] = [];
    let glitters: Glitter[] = [];
    
    const STAR_COUNT = 600;
    const GLITTER_COUNT = 400;
    const ENTITY_COUNT = 10;
    const GALAXY_PARTICLE_COUNT = 1200;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) / (width / 2);
      mouseRef.current.targetY = (e.clientY - height / 2) / (height / 2);
    };

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      baseBrightness: number;
      brightness: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      color: string;

      constructor() {
        this.reset(true);
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.twinkleSpeed = 0.02 + Math.random() * 0.05;
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * width * 8;
        this.y = (Math.random() - 0.5) * height * 8;
        this.z = initial ? Math.random() * 3000 : 3000;
        this.size = 0.6 + Math.random() * 1.2;
        this.baseBrightness = 0.4 + Math.random() * 0.6;
        const colors = ['#ffffff', '#ffe9e9', '#e9f0ff', '#fdfaff', '#e0f7ff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(speed: number, mx: number, my: number, time: number) {
        this.z -= speed;
        this.x -= mx * 1.2;
        this.y -= my * 1.2;

        // Twinkle logic
        this.brightness = this.baseBrightness * (0.7 + 0.3 * Math.sin(time * this.twinkleSpeed + this.twinkleOffset));

        if (this.z <= 0) this.reset();
      }

      draw() {
        const k = 150 / this.z;
        const px = this.x * k + width / 2;
        const py = this.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const s = this.size * k * 1.8;
          ctx!.fillStyle = this.color;
          ctx!.globalAlpha = (1 - this.z / 3000) * this.brightness;
          ctx!.beginPath();
          ctx!.arc(px, py, s, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    class Glitter {
      x: number;
      y: number;
      z: number;
      size: number;
      flickerSpeed: number;
      color: string;

      constructor() {
        this.reset();
        this.flickerSpeed = 0.1 + Math.random() * 0.3;
      }

      reset() {
        this.x = (Math.random() - 0.5) * width * 10;
        this.y = (Math.random() - 0.5) * height * 10;
        this.z = Math.random() * 3000;
        this.size = 0.5 + Math.random() * 1.5;
        const colors = ['#ffffff', '#fff7ad', '#b3f0ff', '#f5d4ff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(mx: number, my: number, time: number) {
        this.x -= mx * 0.8;
        this.y -= my * 0.8;
        
        // High frequency flicker
        const visibility = Math.sin(time * this.flickerSpeed) > 0.8 ? 1 : 0;
        
        const k = 150 / this.z;
        const px = this.x * k + width / 2;
        const py = this.y * k + height / 2;

        if (px >= 0 && px <= width && py >= 0 && py <= height && visibility) {
          ctx!.fillStyle = this.color;
          ctx!.globalAlpha = (1 - this.z / 3000) * 0.8;
          ctx!.beginPath();
          ctx!.arc(px, py, this.size * k, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    class GalaxyParticle {
      angle: number;
      radius: number;
      z: number;
      size: number;
      color: string;
      speed: number;

      constructor() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 100 + Math.random() * 800;
        this.z = (Math.random() - 0.5) * 400;
        this.size = 1 + Math.random() * 2;
        const hue = Math.random() > 0.5 ? 260 + Math.random() * 40 : 200 + Math.random() * 40;
        this.color = `hsla(${hue}, 80%, 70%, 1)`;
        this.speed = (0.0004 + Math.random() * 0.0008) * (1 / (this.radius * 0.01));
      }

      update(mx: number, my: number) {
        this.angle += this.speed;
        const driftX = mx * 40;
        const driftY = my * 40;
        
        const depth = 1500 + this.z;
        const k = 400 / depth;
        
        const spiralX = Math.cos(this.angle) * this.radius;
        const spiralY = Math.sin(this.angle) * this.radius * 0.35;

        const px = (spiralX + driftX) * k + width / 2;
        const py = (spiralY + driftY) * k + height / 2;
        const s = this.size * k;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          ctx!.fillStyle = this.color;
          ctx!.globalAlpha = 0.1 * k;
          ctx!.beginPath();
          ctx!.arc(px, py, s, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    class SpaceEntity {
      x: number;
      y: number;
      z: number;
      rotX: number;
      rotY: number;
      vRotX: number;
      vRotY: number;
      size: number;

      constructor() {
        this.x = (Math.random() - 0.5) * width * 4;
        this.y = (Math.random() - 0.5) * height * 4;
        this.z = Math.random() * 2000;
        this.size = 35 + Math.random() * 55;
        this.rotX = Math.random() * Math.PI;
        this.rotY = Math.random() * Math.PI;
        this.vRotX = (Math.random() - 0.5) * 0.012;
        this.vRotY = (Math.random() - 0.5) * 0.012;
      }

      update(speed: number, mx: number, my: number) {
        this.z -= speed * 0.3;
        this.rotX += this.vRotX;
        this.rotY += this.vRotY;
        this.x -= mx * 1.8;
        this.y -= my * 1.8;

        if (this.z <= 0) {
          this.z = 2000;
          this.x = (Math.random() - 0.5) * width * 4;
          this.y = (Math.random() - 0.5) * height * 4;
        }
      }

      draw() {
        const k = 200 / this.z;
        const px = this.x * k + width / 2;
        const py = this.y * k + height / 2;
        const s = this.size * k;

        if (this.z > 200 && px > -200 && px < width + 200 && py > -200 && py < height + 200) {
          ctx!.save();
          ctx!.translate(px, py);
          ctx!.rotate(this.rotX);
          
          const alpha = (1 - this.z / 2000) * 0.25;
          ctx!.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx!.lineWidth = 1.2;

          ctx!.beginPath();
          ctx!.moveTo(0, -s);
          ctx!.lineTo(s * Math.cos(this.rotY), 0);
          ctx!.lineTo(0, s);
          ctx!.lineTo(-s * Math.cos(this.rotY), 0);
          ctx!.closePath();
          ctx!.stroke();

          ctx!.restore();
        }
      }
    }

    const init = () => {
      stars = Array.from({ length: STAR_COUNT }, () => new Star());
      glitters = Array.from({ length: GLITTER_COUNT }, () => new Glitter());
      entities = Array.from({ length: ENTITY_COUNT }, () => new SpaceEntity());
      galaxyParticles = Array.from({ length: GALAXY_PARTICLE_COUNT }, () => new GalaxyParticle());
    };

    let time = 0;
    const animate = () => {
      time++;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.globalAlpha = 1;
      ctx.fillStyle = '#020005';
      ctx.fillRect(0, 0, width, height);

      // Core Galaxy Glow
      const grad = ctx.createRadialGradient(
        width / 2 + mouseRef.current.x * 40, 
        height / 2 + mouseRef.current.y * 40, 
        0, 
        width / 2 + mouseRef.current.x * 40, 
        height / 2 + mouseRef.current.y * 40, 
        width / 1.5
      );
      grad.addColorStop(0, 'rgba(70, 0, 120, 0.12)');
      grad.addColorStop(0.6, 'rgba(20, 0, 50, 0.03)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render layers
      galaxyParticles.forEach(p => p.update(mouseRef.current.x, mouseRef.current.y));
      stars.forEach(star => star.update(0.7, mouseRef.current.x, mouseRef.current.y, time));
      glitters.forEach(g => g.update(mouseRef.current.x, mouseRef.current.y, time));
      entities.forEach(entity => entity.update(0.7, mouseRef.current.x, mouseRef.current.y));

      stars.forEach(star => star.draw());
      entities.forEach(entity => entity.draw());

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-container"
      className="fixed top-0 left-0 w-full h-full z-[-10] pointer-events-none"
      style={{ background: '#020005' }}
    />
  );
};

export default CanvasBackground;
