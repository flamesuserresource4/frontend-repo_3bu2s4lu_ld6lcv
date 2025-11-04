import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

// Utility to load external scripts once
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // If already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export default function Hero() {
  const viewerRef = useRef(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let panorama = null;
    let viewer = null;

    const setupPanolens = async () => {
      try {
        // Load Three.js first, then Panolens
        await loadScript('https://unpkg.com/three@0.158.0/build/three.min.js');
        await loadScript('https://unpkg.com/panolens@0.12.0/build/panolens.min.js');

        // Ensure globals exist
        if (!window.PANOLENS) {
          throw new Error('PANOLENS not available');
        }

        const container = viewerRef.current;
        if (!container) return;

        viewer = new window.PANOLENS.Viewer({
          container,
          controlBar: true,
          autoRotate: true,
          autoRotateSpeed: 0.3,
          output: 'console',
        });

        // Public domain/equirectangular demo texture
        const imageUrl = 'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg';
        panorama = new window.PANOLENS.ImagePanorama(imageUrl);

        viewer.add(panorama);
      } catch (e) {
        console.error(e);
        setError('Interactive 360° tour failed to load. Please refresh.');
      }
    };

    setupPanolens();

    return () => {
      try {
        if (panorama && panorama.dispose) panorama.dispose();
        if (viewer && viewer.container) {
          // Clean up canvas
          while (viewer.container.firstChild) {
            viewer.container.removeChild(viewer.container.firstChild);
          }
        }
      } catch (_) {
        // no-op
      }
    };
  }, []);

  return (
    <section id="tour" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
              <Sparkles size={14} /> New: Immersive 360° Campus Tour
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Belajar interaktif dengan LMS modern
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Bangun pengalaman belajar daring yang kaya fitur: kursus, kuis, pelacakan progres, dan tur 360° berbasis Panolens untuk orientasi kelas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                Jelajahi fitur
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-200 font-medium hover:border-gray-300">
                Mulai gratis
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="h-[420px] sm:h-[520px] rounded-xl overflow-hidden shadow-xl border border-gray-100" ref={viewerRef} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            {error && (
              <p className="mt-3 text-sm text-red-600">{error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
