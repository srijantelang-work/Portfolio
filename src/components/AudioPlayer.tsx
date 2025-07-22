"use client"

import { useEffect, useRef, useState } from 'react'
import styles from './AudioPlayer.module.css'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    
    const initializeAudio = () => {
      audio = new Audio('/background-music.mp3')
      audio.loop = true
      audio.volume = 0.4
      audioRef.current = audio
      return audio
    }

    // Initialize audio without autoplay
    initializeAudio()

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
        setIsPlaying(false)
      } else {
        audioRef.current.muted = false // Ensure unmuted when manually playing
        await audioRef.current.play()
        setIsPlaying(true)
      }
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