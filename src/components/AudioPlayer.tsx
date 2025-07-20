"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './AudioPlayer.module.css'

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
      } else {
        audioRef.current.muted = false // Ensure unmuted when manually playing
        await audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.log('Toggle playback failed:', error)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    
    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(!isMuted)
  }

  const handleTorchClick = () => {
    // Simple toggle: if playing, pause; if paused, play
    togglePlayback()
    
    // If we're starting playback and it's muted, unmute it
    if (!isPlaying && isMuted) {
      toggleMute()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={styles.container}>
        <div className={styles.simpleText}>
          {isPlaying ? (isMuted ? 'Muted' : 'Playing') : 'Click me!'}
        </div>
        <input 
          type="checkbox" 
          checked={isPlaying && !isMuted}
          onChange={handleTorchClick}
        />
        <div className={styles.checkmark} />
        <div className={styles.torch}>
          <div className={styles.head}>
            <div className={`${styles.face} ${styles.top}`}>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={`${styles.face} ${styles.left}`}>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={`${styles.face} ${styles.right}`}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={styles.stick}>
            <div className={`${styles.side} ${styles.sideLeft}`}>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={`${styles.side} ${styles.sideRight}`}>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
        
        {/* Additional "Click me" option at the bottom */}
        <div 
          className={styles.bottomClickMe}
          onClick={handleTorchClick}
        >
          Click me!
        </div>
      </div>
    </div>
  )
} 