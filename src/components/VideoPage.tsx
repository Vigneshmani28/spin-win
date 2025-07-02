import {
  Box,
  Typography,
  Stack,
  Avatar,
  IconButton,
  Button,
  Divider,
  Chip
} from '@mui/material';
import {
  ThumbUp,
  ThumbDown,
  Share,
  Save,
  MoreHoriz,
  Subscriptions
} from '@mui/icons-material';
import YouTubeTopBar from './YoutubeTopBar';

const comments = [
  {
    user : "@ashashah9888",
    image : "/users/one.jpg",
    title : "Thanks for showing us unseen parts of India...😊😊"
  },
  {
    user : '@pubgboy1162',
    image : "/users/two.jpg",
    title : "Apna gaaoon hamen dekhane ka shukria"
  },
  {
    user : '@sachinmishra4181',
    image : "/users/three.jpg",
    title : "Weldone congratulation for the documentary on Bihar. LALA KOHSAR DE SABZ MURGHZARDE MERE WATAN BIHAR KO GULSHAN-E-NAUBAHAR DE Aameen ya Elahulaalameen."
  },
  {
    user : '@snehasingh4214',
    image : "/users/four.jpg",
    title : "Bro literally u should be regular on YouTube and making these type of video...u can represent our culture, tradition❤"
  },
  {
    user : '@MuskanKhatoon-i5e',
    image : "/users/five.jpg",
    title : "Keep it up🎉👍🏻bohot acha bana he vlog🥳👀"
  },
]

const thumbnails = [
  {
    title: "EP01 - दिल्ली की सैर 🕌",
    image: "/thumbnails/five.jpg"
  },
  {
    title: "EP02 - Solo Trip to Himachal 🚶‍♂️",
    image: "/thumbnails/three.jpg"
  },
  {
    title: "EP03 - बारिश में बाइक ट्रिप 🌧️",
    image: "/thumbnails/seven.jpg"
  },
  {
    title: "EP04 - गोवा बीच पार्टी 🏖️",
    image: "/thumbnails/one.jpg"
  },
  {
    title: "EP05 - ट्रैवल Vlog बिहार ✈️",
    image: "/thumbnails/two.jpg"
  },
  {
    title: "EP06 - पहाड़ों में अकेला सफर ⛰️",
    image: "/thumbnails/six.jpg"
  },
  {
    title: "EP07 - Train Journey to Varanasi 🚆",
    image: "/thumbnails/four.jpg"
  },
  {
    title: "EP08 - खाने का जुनून 🍛",
    image: "/thumbnails/one.jpg"
  },
  {
    title: "EP09 - झील के किनारे रात 🌃",
    image: "/thumbnails/three.jpg"
  },
  {
    title: "EP10 - दोस्तों के साथ मस्ती 😂",
    image: "/thumbnails/seven.jpg"
  },
  {
    title: "EP11 - ट्रेकिंग एडवेंचर 🥾",
    image: "/thumbnails/two.jpg"
  },
  {
    title: "EP12 - एक दिन गाँव में 🏡",
    image: "/thumbnails/five.jpg"
  },
  {
    title: "EP13 - मुंबई लोकल का सफर 🚇",
    image: "/thumbnails/four.jpg"
  },
  {
    title: "EP14 - चाय पर चर्चा ☕",
    image: "/thumbnails/six.jpg"
  }
]


const VideoPage = () => {
  return (
    <Box minHeight="100vh" bgcolor="#f9f9f9" px={2} py={4}>
      <YouTubeTopBar />
      <Box width="100%" margin="0 auto" display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Main Content */}
        <Box flex={2}>
          {/* Video Player */}
          <Box
            bgcolor="#000"
            height={{ xs: 200, sm: 400, md: 700 }}
            borderRadius={2}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <img
              src="/thumbnail.jpg"
              alt="Video thumbnail"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
            />
            <Typography
              variant="h2"
              sx={{
                position: 'absolute',
                color: 'white',
                fontSize: 80,
                opacity: 0.6,
                userSelect: 'none',
                cursor: 'pointer',
                '&:hover': { opacity: 0.9 }
              }}
            >
              ▶
            </Typography>
            <Box position="absolute" bottom={10} right={10} bgcolor="rgba(0,0,0,0.7)" px={1} borderRadius={1}>
              <Typography variant="caption" color="white">10:30</Typography>
            </Box>
          </Box>

          {/* Video Title */}
          <Typography variant="h5" fontWeight="bold" mt={2}>
            New Entertainment Top Funny Video Best Comedy in 2022 Episode 139 By MY FAMILY
          </Typography>

          {/* Video Stats and Actions */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} flexWrap="wrap">
            <Typography variant="body2" color="text.secondary">
              1,245,678 views • Premiered 2 days ago
            </Typography>
            <Stack direction="row" spacing={1} mt={{ xs: 1, sm: 0 }}>
              <Button startIcon={<ThumbUp />} variant="text" size="small" color='inherit'>
                124K
              </Button>
              <Button startIcon={<ThumbDown />} variant="text" size="small" color='inherit'>
                Dislike
              </Button>
              <Button startIcon={<Share />} variant="text" size="small" color='inherit'>
                Share
              </Button>
              <Button startIcon={<Save />} variant="text" size="small" color='inherit'>
                Save
              </Button>
              <IconButton size="small" color='inherit'>
                <MoreHoriz />
              </IconButton>
            </Stack>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Channel Info */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Avatar src="/dp.jpg" alt="Channel" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="500">
                  Unseen World
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  124K subscribers
                </Typography>
              </Box>
            </Stack>
            <Button variant="contained" color="error" startIcon={<Subscriptions />}>
              Subscribe
            </Button>
          </Box>

          {/* Video Description */}
          <Box bgcolor="rgba(0,0,0,0.05)" p={2} borderRadius={2} mt={2}>
            <Typography variant="body2" color="text.secondary">
              1,245,678 views • Premiered 2 days ago
            </Typography>
            <Typography variant="body1" mt={1}>
              New Entertainment Top Funny Video Best Comedy in 2022 Episode 139 By MY FAMILY
              
Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.
            </Typography>
            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
              <Chip label="#bihar" size="small" />
              <Chip label="#hindi" size="small" />
              <Chip label="#bihari" size="small" />
              <Chip label="#fun" size="small" />
            </Stack>
          </Box>

          {/* Comments Section */}
          <Box mt={4}>
            <Typography variant="h6" fontWeight="bold">
             10 Comments
            </Typography>
            <Stack direction="row" spacing={2} mt={2}>
              <Avatar src="/user1.jpg" alt="User" />
              <Box flex={1}>
                <Typography variant="body2" color="text.secondary">
                  Add a comment...
                </Typography>
                <Divider sx={{ mt: 1 }} />
              </Box>
            </Stack>

            {/* Sample Comments */}
            {comments.map((comment, index) => (
              <Stack key={index} direction="row" spacing={2} mt={3}>
                <Avatar src={`${comment.image}`} alt="User" />
                <Box flex={1}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {comment.user}
                  </Typography>
                  <Typography variant="body2">
                    {comment.title}
                  </Typography>
                  <Stack direction="row" spacing={1} mt={1}>
                    <ThumbUp fontSize="small" sx={{ opacity: 0.7 }} />
                    
                    <ThumbDown fontSize="small" sx={{ opacity: 0.7 }} />
                    <Typography variant="caption" color="text.secondary" ml={1}>
                      Reply
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>

        {/* Sidebar - Related Videos */}
        <Box flex={1} minWidth={300}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            Up next
          </Typography>
          
          {thumbnails.map((video, index) => (
            <Box key={index} display="flex" mb={2} sx={{ cursor: 'pointer' }}>
              <Box
                width={160}
                height={90}
                bgcolor="#ddd"
                borderRadius={1}
                overflow="hidden"
                position="relative"
                flexShrink={0}
              >
                <img
                  src={`${video.image}`}
                  alt="Thumbnail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box position="absolute" bottom={4} right={4} bgcolor="rgba(0,0,0,0.7)" px={0.5} borderRadius={0.5}>
                  <Typography variant="caption" color="white">10:{30 + index}</Typography>
                </Box>
              </Box>
              <Box ml={1}>
                <Typography variant="subtitle2" fontWeight="500" noWrap>
                  Related video #{video.title} - Spin to win special
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  SpinMaster Channel
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  12K views • 1 day ago
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPage;