import { useEffect, useRef } from 'react';

const Globe = ({ size = 150 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = size / 2 - 10;

    let rotation = 0;
    let opacity = 0;

    // Risk hotspot locations (longitude, latitude)
    const hotspots = [
      { lng: -74, lat: 40.7 }, // New York
      { lng: 0, lat: 51.5 },   // London
      { lng: 139.7, lat: 35.7 }, // Tokyo
      { lng: 121.5, lat: 31.2 }, // Shanghai
      { lng: -118.2, lat: 34.1 }, // Los Angeles
      { lng: 2.3, lat: 48.9 },   // Paris
    ];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Fade in effect
      if (opacity < 1) {
        opacity += 0.02;
      }
      
      ctx.globalAlpha = opacity;
      
      // Draw globe outline
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw meridians
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 + rotation;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.cos(angle), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw parallels
      for (let i = 1; i < 6; i++) {
        const y = (radius * i) / 3;
        const ellipseRadius = radius * Math.sin(Math.acos(y / radius));
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - y, ellipseRadius, ellipseRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + y, ellipseRadius, ellipseRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw risk hotspots
      hotspots.forEach((hotspot, index) => {
        const x = centerX + (hotspot.lng / 180) * radius * Math.cos(rotation);
        const y = centerY - (hotspot.lat / 90) * radius * 0.8;
        
        // Pulsing effect
        const pulse = Math.sin(Date.now() * 0.005 + index) * 0.5 + 0.5;
        const dotRadius = 3 + pulse * 2;
        
        ctx.fillStyle = `rgba(239, 68, 68, ${0.7 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Outer ring
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.4 + pulse * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, dotRadius + 3, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      rotation += 0.005;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a brief delay
    setTimeout(() => {
      canvas.style.opacity = '1';
      animate();
    }, 100);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size]);

  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        width={size * 2} // Higher resolution
        height={size * 2}
        className="opacity-0 transition-opacity duration-500"
        style={{
          width: size,
          height: size,
          cursor: 'grab'
        }}
      />
    </div>
  );
};

export default Globe;