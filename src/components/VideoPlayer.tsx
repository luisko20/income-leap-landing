
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2 } from 'lucide-react';

// The video duration is in seconds
const VIDEO_DURATION = 60; // This is just for demonstration, as if video is 1 minute
const SHOW_BUTTON_AFTER = 30; // Show button after 30 seconds for demo purposes (would be 7-10 minutes in production)

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [viewers, setViewers] = useState(187); // Initial viewers count
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= SHOW_BUTTON_AFTER && !showButton) {
            setShowButton(true);
          }
          return newTime <= VIDEO_DURATION ? newTime : VIDEO_DURATION;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, showButton]);

  // Randomly fluctuate viewer count for realism
  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      setViewers(prev => Math.max(180, prev + change)); // Ensure it doesn't go below 180
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(prev => !prev);
  };

  return (
    <div className={`w-full mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 max-w-none m-0 rounded-none' : 'max-w-3xl'}`}>
      <div className="relative">
        {/* Video placeholder */}
        <div className={`bg-gray-800 flex items-center justify-center ${isFullscreen ? 'h-screen' : 'aspect-video'}`}>
          {!isPlaying ? (
            <div className="text-center">
              <div className="text-white text-xl mb-4">ASSISTA O VÍDEO COMPLETO!</div>
              <Button 
                className="bg-brand-blue hover:bg-brand-darkBlue text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
                onClick={handlePlay}
              >
                Iniciar Vídeo
              </Button>
            </div>
          ) : (
            <div className="text-white text-center">
              <div className="mb-4">
                Vídeo em reprodução... {Math.floor(currentTime / 60)}:{String(currentTime % 60).padStart(2, '0')}
              </div>
              <div className="text-gray-300 text-sm">
                (Este é um placeholder para o vídeo real)
              </div>
            </div>
          )}
        </div>
        
        {/* Viewers counter */}
        <div className="absolute top-4 right-4 bg-black/70 text-white text-sm py-1 px-3 rounded-full flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-slow mr-2"></div>
          <span>{viewers} pessoas assistindo agora</span>
        </div>

        {/* Fullscreen toggle button */}
        <button 
          onClick={toggleFullscreen}
          className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-all"
          aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>
      
      <div className={`p-6 text-center ${isFullscreen ? 'absolute bottom-0 left-0 right-0 bg-white/90' : ''}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">ASSISTA O VÍDEO COMPLETO!</h2>
        
        {showButton && (
          <div className="animate-fade-in">
            <p className="text-brand-blue font-semibold mb-4">
              Parabéns por assistir até aqui! Aproveite esta oportunidade exclusiva:
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-md shadow-lg text-lg transition-all transform hover:scale-105"
            >
              QUERO COMEÇAR AGORA!
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
