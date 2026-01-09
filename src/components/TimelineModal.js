import { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Chip,
  IconButton,
  Link,
  Fade,
  Backdrop,
} from '@mui/material';
import {
  Close,
  OpenInNew,
  LocationOn,
  Business,
  Schedule,
  AttachMoney,
  Work,
  School,
  Code,
  Build,
  MenuBook,
  EmojiEvents,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import Skills from './skills';

const typeConfig = {
  project: { icon: Code, color: 'info', label: 'Personal Project' },
  education: { icon: School, color: 'secondary', label: 'Education' },
  schoolProject: { icon: MenuBook, color: 'primary', label: 'School Project' },
  freelance: { icon: Build, color: 'warning', label: 'Freelance' },
  employment: { icon: Work, color: 'primary', label: 'Employment' },
  hackathon: { icon: EmojiEvents, color: 'warning', label: 'Hackathon' },
};

function formatDuration(startYear, endYear) {
  if (!startYear || !endYear) return null;
  const years = endYear - startYear;
  if (years === 0) return null;
  if (years === 1) return '1 year';
  return `${years} years`;
}

function formatDateRange(startYear, endYear) {
  if (!startYear && !endYear) return '';
  if (startYear === endYear) return String(startYear);
  return `${startYear} - ${endYear}`;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: '80%', md: '70%' },
  maxWidth: 800,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  overflow: 'auto',
};

export default function TimelineModal({ open, onClose, item }) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = item?.images || [];

  useEffect(() => {
    setImageIndex(0);
  }, [item]);

  if (!item) return null;

  const handlePrevImage = () => {
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const config = typeConfig[item.type] || typeConfig.project;
  const IconComponent = config.icon;
  const dateDisplay = formatDateRange(item.startYear, item.endYear);
  const duration = formatDuration(item.startYear, item.endYear);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 300 } }}
      aria-labelledby="timeline-modal-title"
      aria-describedby="timeline-modal-description"
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              bgcolor: 'background.paper',
              borderBottom: 1,
              borderColor: 'divider',
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                flex: 1,
                pr: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Typography
                id="timeline-modal-title"
                variant="h5"
                component="h2"
                fontWeight="bold"
              >
                {item.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {item.paid && (
                  <Chip
                    icon={<AttachMoney sx={{ fontSize: 16 }} />}
                    label="Paid"
                    size="small"
                    color="success"
                  />
                )}
                <Chip
                  icon={<IconComponent />}
                  label={config.label}
                  size="small"
                  color={config.color}
                />
              </Box>
            </Box>
            <IconButton onClick={onClose} size="small" sx={{ mt: -0.5 }}>
              <Close />
            </IconButton>
          </Box>

          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              {item.organization && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Business sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body1" color="text.secondary">
                    {item.organization}
                  </Typography>
                </Box>
              )}
              {item.location && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body1" color="text.secondary">
                    {item.location}
                  </Typography>
                </Box>
              )}
              {dateDisplay && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Schedule sx={{ fontSize: 20, color: 'text.secondary' }} />
                  <Typography variant="body1" color="text.secondary">
                    {dateDisplay}
                    {duration && ` (${duration})`}
                  </Typography>
                </Box>
              )}
            </Box>

            <Typography
              id="timeline-modal-description"
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.7 }}
            >
              {item.detailedDescription || item.description}
            </Typography>

            {item.url && (
              <Box sx={{ mb: 3 }}>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  Link
                  <OpenInNew sx={{ fontSize: 18 }} />
                </Link>
              </Box>
            )}

            {images.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Images
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                  }}
                >
                  <IconButton
                    onClick={handlePrevImage}
                    disabled={images.length <= 1}
                    sx={{ bgcolor: 'action.hover' }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <Box
                    sx={{
                      flex: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={images[imageIndex]}
                      alt={`${item.title} screenshot ${imageIndex + 1}`}
                      loading="lazy"
                      style={{
                        borderRadius: 8,
                        maxWidth: '100%',
                        maxHeight: 400,
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  <IconButton
                    onClick={handleNextImage}
                    disabled={images.length <= 1}
                    sx={{ bgcolor: 'action.hover' }}
                  >
                    <ChevronRight />
                  </IconButton>
                </Box>
                <Typography
                  variant="caption"
                  sx={{ display: 'block', textAlign: 'center', mt: 1 }}
                >
                  {imageIndex + 1} / {images.length}
                </Typography>
              </Box>
            )}

            {item.skills && item.skills.length > 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Technologies
                </Typography>
                <Skills skills={item.skills} />
              </Box>
            )}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
