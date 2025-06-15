"use client"

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX, Pause, Play } from 'lucide-react'
import { toast } from 'sonner'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const playAttempts = useRef(0)
  const maxPlayAttempts = 5

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    
    const initializeAudio = () => {
      audio = new Audio('/background-music.mp3')
      audio.loop = true
      audio.volume = 0.4
      audio.autoplay = true // Enable autoplay attribute
      audio.muted = true // Start muted to help with autoplay
      audioRef.current = audio
      return audio
    }

    const attemptPlay = async (audio: HTMLAudioElement) => {
      try {
        if (!audio.paused) return true
        await audio.play()
        setIsPlaying(true)
        
        // If we successfully autoplayed while muted, unmute after a short delay
        if (audio.muted) {
          setTimeout(() => {
            audio.muted = false
            setIsMuted(false)
            toast.success('Background music is now playing', {
              position: 'bottom-right',
              duration: 2000,
            })
          }, 100)
        }
        return true
      } catch (error) {
        console.log('Playback attempt failed:', error)
        return false
      }
    }

    const startPlayback = async () => {
      const audio = initializeAudio()
      
      // Strategy 1: Immediate play attempt
      const success = await attemptPlay(audio)
      if (success) return

      // Strategy 2: Multiple delayed attempts
      const attemptInterval = setInterval(async () => {
        if (playAttempts.current >= maxPlayAttempts) {
          clearInterval(attemptInterval)
          return
        }

        playAttempts.current++
        const success = await attemptPlay(audio)
        if (success) {
          clearInterval(attemptInterval)
        }
      }, 1000)

      // Strategy 3: User interaction events
      const handleUserInteraction = async () => {
        const success = await attemptPlay(audio)
        if (success) {
          document.removeEventListener('click', handleUserInteraction, true)
          document.removeEventListener('touchstart', handleUserInteraction, true)
          document.removeEventListener('keydown', handleUserInteraction, true)
          document.removeEventListener('scroll', handleUserInteraction, true)
          document.removeEventListener('mousemove', handleUserInteraction, true)
        }
      }

      // Add capture phase listeners to catch events as early as possible
      document.addEventListener('click', handleUserInteraction, true)
      document.addEventListener('touchstart', handleUserInteraction, true)
      document.addEventListener('keydown', handleUserInteraction, true)
      document.addEventListener('scroll', handleUserInteraction, true)
      document.addEventListener('mousemove', handleUserInteraction, true)
    }

    startPlayback()

    return () => {
      if (audio) {
        audio.pause()
        audio.src = ''
      }
    }
  }, [])

  const togglePlayback = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        toast.info('Music paused', {
          position: 'bottom-right',
          duration: 2000,
        })
      } else {
        audioRef.current.muted = false // Ensure unmuted when manually playing
        await audioRef.current.play()
        toast.success('Music playing', {
          position: 'bottom-right',
          duration: 2000,
        })
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.log('Toggle playback failed:', error)
      toast.error('Failed to play music', {
        position: 'bottom-right',
        duration: 2000,
      })
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    
    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(!isMuted)
    
    toast.info(audioRef.current.muted ? 'Music muted' : 'Music unmuted', {
      position: 'bottom-right',
      duration: 2000,
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayback}
        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </div>
  )
} 