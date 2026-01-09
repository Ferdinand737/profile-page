import { Box, Typography, Container } from '@mui/material';
import { Construction } from '@mui/icons-material';

export default function Blog() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
        }}
      >
        <Construction sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Blog posts will be available here in the future.
        </Typography>
      </Box>
    </Container>
  );
}
