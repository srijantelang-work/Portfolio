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

  const handleTorchClick = (e?: React.MouseEvent) => {
    // Prevent event bubbling
    if (e) {
      e.stopPropagation()
    }
    
    // Simple toggle: if playing, pause; if paused, play
    togglePlayback()
    
    // If we're starting playback and it's muted, unmute it
    if (!isPlaying && isMuted) {
      toggleMute()
    }
  }

  const handleCheckboxChange = () => {
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
          onChange={handleCheckboxChange}
        />
        <div className={styles.checkmark} />
        <div className={styles.torch} onClick={handleTorchClick}>
          <div className={styles.head} onClick={handleTorchClick}>
            <div className={`${styles.face} ${styles.top}`} onClick={handleTorchClick}>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={`${styles.face} ${styles.left}`} onClick={handleTorchClick}>
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className={`${styles.face} ${styles.right}`} onClick={handleTorchClick}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={styles.stick}>
            <div className={`${styles.side} ${styles.sideLeft}`} onClick={handleTorchClick}>
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
            <div className={`${styles.side} ${styles.sideRight}`} onClick={handleTorchClick}>
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