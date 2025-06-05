"use client"

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/background-music.mp3')
    audio.loop = true
    audio.volume = 0.4 // Set volume to 40%
    audioRef.current = audio

    // Function to attempt playback
    const attemptPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Playback failed:', error)
      }
    }

    // Try multiple methods to start playback
    const startPlayback = () => {
      // Method 1: Direct play
      attemptPlay()

      // Method 2: Play after a short delay
      setTimeout(attemptPlay, 1000)

      // Method 3: Play with user gesture
      const handleUserGesture = () => {
        attemptPlay()
        // Remove the event listeners after first interaction
        document.removeEventListener('click', handleUserGesture)
        document.removeEventListener('touchstart', handleUserGesture)
        document.removeEventListener('keydown', handleUserGesture)
        document.removeEventListener('scroll', handleUserGesture)
      }

      document.addEventListener('click', handleUserGesture)
      document.addEventListener('touchstart', handleUserGesture)
      document.addEventListener('keydown', handleUserGesture)
      document.addEventListener('scroll', handleUserGesture)
    }

    // Start playback attempts
    startPlayback()

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
      document.removeEventListener('click', startPlayback)
      document.removeEventListener('touchstart', startPlayback)
      document.removeEventListener('keydown', startPlayback)
      document.removeEventListener('scroll', startPlayback)
    }
  }, [])

  const togglePlayback = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        await audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setIsMuted(false)
    } catch (error) {
      console.log('Toggle playback failed:', error)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <button
        onClick={togglePlayback}
        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  )
} 