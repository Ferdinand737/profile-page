import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  Link,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Download } from '@mui/icons-material';
import profilePic from '../images/profilePic.jpeg';

export default function ProfileHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        p: 3,
        mb: 4,
      }}
    >
      <Avatar
        src={profilePic}
        alt="Ferdinand Haaben"
        sx={{
          width: 180,
          height: 180,
          border: '3px solid',
          borderColor: 'primary.main',
        }}
      />

      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ferdinand Haaben
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          Full Stack Developer
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, maxWidth: 600 }}>
          Full Stack Software Developer with experience across modern web
          frameworks including Next.js, TypeScript, Django, and Laravel. Strong
          interest in blockchain and Web3 technologies, with hands-on experience
          building decentralized applications and smart contract–enabled
          platforms. Actively integrates AI into applications to enhance
          functionality and improve development workflows. Passionate about
          self-hosting and infrastructure management, maintaining a personal
          server environment to deploy and manage personal projects. Experienced
          in building and maintaining end-to-end systems, from backend services
          to frontend user interfaces.
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
        >
          <IconButton
            component="a"
            href="https://github.com/Ferdinand737"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="GitHub"
          >
            <GitHub />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/ferdinand-haaben-a46887208/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:ferdinand@haaben.net"
            color="inherit"
            aria-label="Email"
          >
            <Email />
          </IconButton>

          <Link
            href={require('../resume.pdf')}
            download="ferdinand-haaben-resume.pdf"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              ml: 2,
              textDecoration: 'none',
              color: 'primary.main',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            <Download fontSize="small" />
            Resume
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
