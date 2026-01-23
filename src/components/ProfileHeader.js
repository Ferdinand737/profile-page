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
        flexDirection: 'column',
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

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Ferdinand Haaben
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom>
          Full Stack Developer
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, maxWidth: 600 }}>
          I'm a Full Stack Developer who builds end-to-end applications using
          Next.js, Django, and Laravel. I have a strong interest in blockchain
          technology, Web3 and building decentralized apps. I enjoy integrating
          AI into my projects, whether for voice cloning, content generation, or
          enhancing user workflows. Outside of client work, I run my own
          self-hosted infrastructure to deploy and manage personal projects.
          Don't hesitate to reach out if you have any questions or want to chat
          about my work.
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center">
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
            target="_blank"
            rel="noopener noreferrer"
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
