import { 
  AppBar, 
  Toolbar, 
  InputBase, 
  IconButton, 
  Badge,
  Avatar, 
  Box
} from '@mui/material';
import {
  Menu,
  Search,
  Mic,
  VideoCall,
  Notifications,
  Apps
} from '@mui/icons-material';

const YouTubeTopBar = () => {
  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0}
      sx={{ 
        bgcolor: 'white',
        borderBottom: '1px solid #e0e0e0',
        height: 64
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left Section - Logo and Menu */}
        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start">
            <Menu />
          </IconButton>
          <Box 
            component="img"
            src="/youtube.png" 
            alt="YouTube"
            sx={{ 
              height: 40, 
              ml: 2,
              cursor: 'pointer'
            }}
          />
        </Box>

        {/* Middle Section - Search */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            width: '100%',
            maxWidth: 600,
            mx: 2
          }}
        >
          <InputBase
            placeholder="Search"
            fullWidth
            sx={{
              border: '1px solid #ccc',
              borderRadius: 10,
              px: 2,
              py: 1,
              '&:focus-within': {
                borderColor: '#065fd4'
              }
            }}
            endAdornment={
              <IconButton
                sx={{
                  bgcolor: '#f8f8f8',
                  borderLeft: '1px solid #ccc',
                  borderRadius: '0 15px 15px 0',
                  height: '100%',
                  position: 'absolute',
                  right: 0
                }}
              >
                <Search />
              </IconButton>
            }
          />
          <IconButton sx={{ ml: 1 }}>
            <Mic />
          </IconButton>
        </Box>

        {/* Right Section - Icons */}
        <Box display="flex" alignItems="center">
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar 
            src="/user-avatar.jpg" 
            sx={{ 
              width: 32, 
              height: 32, 
              ml: 2,
              cursor: 'pointer'
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default YouTubeTopBar;