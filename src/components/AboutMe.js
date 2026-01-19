import { Box, Container } from '@mui/material';
import ProfileHeader from './ProfileHeader';
import ExperienceTimeline from './ExperienceTimeline';

export default function AboutMe() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <ProfileHeader />
      </Box>
      <ExperienceTimeline />
    </Container>
  );
}
