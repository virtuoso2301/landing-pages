'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type RecognitionResult = {
  id: string;
  name: string;
  confidence: number;
  boundingBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export default function Demo() {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<RecognitionResult[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock recognition results for demo purposes
  const mockRecognition = () => {
    setLoading(true);
    setTimeout(() => {
      setResults([
        {
          id: '1',
          name: 'John Doe',
          confidence: 0.98,
          boundingBox: { x: 100, y: 50, width: 200, height: 200 }
        },
        {
          id: '2',
          name: 'Jane Smith',
          confidence: 0.95,
          boundingBox: { x: 400, y: 100, width: 180, height: 180 }
        }
      ]);
      setLoading(false);
    }, 1500);
  };

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamActive(true);
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsWebcamActive(false);
      setResults([]);
    }
  };

  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Try It Yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Experience real-time face recognition in action
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Video Feed Section */}
          <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full aspect-video object-cover"
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            />
            {!isWebcamActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={startWebcam}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
                >
                  Start Camera
                </motion.button>
              </div>
            )}
            {/* Bounding Boxes */}
            <AnimatePresence>
              {results.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute border-2 border-blue-400"
                  style={{
                    left: `${result.boundingBox.x}px`,
                    top: `${result.boundingBox.y}px`,
                    width: `${result.boundingBox.width}px`,
                    height: `${result.boundingBox.height}px`
                  }}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Controls and Results Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={isWebcamActive ? stopWebcam : startWebcam}
                className={`px-6 py-3 rounded-lg font-medium ${isWebcamActive ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'}`}
              >
                {isWebcamActive ? 'Stop Camera' : 'Start Camera'}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={mockRecognition}
                disabled={!isWebcamActive || loading}
                className={`px-6 py-3 bg-green-600 text-white rounded-lg font-medium ${(!isWebcamActive || loading) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : 'Recognize Faces'}
              </motion.button>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Recognition Results</h3>
              <AnimatePresence>
                {results.map((result) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white/20 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{result.name}</span>
                      <span className="text-green-400">
                        {(result.confidence * 100).toFixed(1)}% confidence
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isWebcamActive && results.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 text-center py-8"
                >
                  No faces detected. Click "Recognize Faces" to start detection.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}