'use client';

import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_darkMode;

      float dotGrid(vec2 uv, float spacing, float radius) {
          vec2 p = fract(uv / spacing) - 0.5;
          return 1.0 - smoothstep(radius, radius + 0.015, length(p));
      }

      void main() {
          vec2 uv = v_texCoord;
          vec2 aspectUv = (uv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0) + 0.5;
          vec2 mouseUv = u_mouse / u_resolution;
          vec2 mouseAspectUv = (mouseUv - 0.5) * vec2(u_resolution.x / u_resolution.y, 1.0) + 0.5;

          float spacing = 0.035;
          float baseRadius = 0.04;
          
          // Interactive displacement/bulge around cursor
          float dist = distance(aspectUv, mouseAspectUv);
          float bulge = smoothstep(0.25, 0.0, dist) * 0.015;
          vec2 displacedUv = aspectUv - normalize(aspectUv - mouseAspectUv) * bulge;
          
          // Render dots
          float dots = dotGrid(displacedUv, spacing, baseRadius);
          
          // Color palettes based on dark/light mode
          vec3 bgDark = vec3(10.0 / 255.0, 10.0 / 255.0, 10.0 / 255.0);
          vec3 bgLight = vec3(250.0 / 255.0, 250.0 / 255.0, 250.0 / 255.0);
          vec3 bgColor = mix(bgLight, bgDark, u_darkMode);
          
          vec3 accentColor = vec3(139.0 / 255.0, 92.0 / 255.0, 246.0 / 255.0); // #8B5CF6
          
          // Radial glow following the cursor
          float glowRadius = mix(0.4, 0.3, u_darkMode);
          float glowIntensity = mix(0.1, 0.15, u_darkMode);
          float glow = smoothstep(glowRadius, 0.0, dist);
          vec3 finalColor = mix(bgColor, accentColor, glow * glowIntensity);
          
          // Dot colors
          vec3 dotDark = accentColor * 0.35;
          vec3 dotLight = vec3(180.0 / 255.0, 180.0 / 255.0, 180.0 / 255.0);
          vec3 dotColor = mix(dotLight, dotDark, u_darkMode);
          
          finalColor = mix(finalColor, dotColor, dots);
          
          // Soft ambient diagonal gradient
          float diagonal = smoothstep(0.0, 1.8, uv.x + uv.y);
          finalColor += accentColor * diagonal * 0.03;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(glCtx: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error('Shader compilation error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const program = gl.createProgram();
    if (!program) return;

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vertexShader || !fragmentShader) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Geometry setup
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1
      ]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uDarkMode = gl.getUniformLocation(program, 'u_darkMode');

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = event.clientX - rect.left;
      // Flip Y for WebGL texture coordinates (0,0 is bottom-left)
      targetMouse.y = rect.height - (event.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Track dark mode via document observer
    let isDark = document.documentElement.classList.contains('dark');
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      gl?.viewport(0, 0, w, h);
    };

    window.addEventListener('resize', resize);
    resize();

    let animationId: number;
    const render = (time: number) => {
      if (!gl) return;
      
      // Interpolate mouse for smooth lag-follow effect
      mouse.x += (targetMouse.x - mouse.x) * 0.15;
      mouse.y += (targetMouse.y - mouse.y) * 0.15;

      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uDarkMode, isDark ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(animationId);
      gl?.deleteProgram(program);
      gl?.deleteShader(vertexShader);
      gl?.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-50"
      style={{ display: 'block' }}
    />
  );
}
