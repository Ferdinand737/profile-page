import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import {
  Work,
  School,
  Code,
  Build,
  Schedule,
  AttachMoney,
  MenuBook,
  EmojiEvents,
  LocationOn,
  Business,
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
  if (!startYear) return null;
  const effectiveEndYear = endYear || new Date().getFullYear();
  const years = effectiveEndYear - startYear;
  if (years === 0) return null;
  if (years === 1) return '1 year';
  return `${years} years`;
}

function formatDateRange(startYear, endYear) {
  if (!startYear && !endYear) return '';
  if (startYear === endYear) return String(startYear);
  const endDisplay = endYear || 'Present';
  return `${startYear} - ${endDisplay}`;
}

export default function MobileTimelineEntry({
  type = 'project',
  title,
  organization,
  location,
  startYear,
  endYear,
  description,
  skills = [],
  paid = false,
  onClick,
}) {
  const config = typeConfig[type] || typeConfig.project;
  const IconComponent = config.icon;
  const dateDisplay = formatDateRange(startYear, endYear);
  const duration = formatDuration(startYear, endYear);

  return (
    <Box sx={{ position: 'relative', pl: 4, pb: 3 }}>
      {/* Vertical line */}
      <Box
        sx={{
          position: 'absolute',
          left: 15,
          top: 0,
          bottom: 0,
          width: 2,
          bgcolor: 'divider',
          opacity: 0.4,
        }}
      />

      {/* Dot */}
      <Box
        sx={{
          position: 'absolute',
          left: 4,
          top: 12,
          width: 24,
          height: 24,
          borderRadius: '50%',
          bgcolor: `${config.color}.main`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <IconComponent sx={{ fontSize: 14, color: 'black' }} />
      </Box>

      {/* Date and duration */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, pl: 1 }}>
        <Typography variant="body2" fontWeight="medium" color="text.secondary">
          {dateDisplay}
        </Typography>
        {duration && (
          <Chip
            icon={<Schedule sx={{ fontSize: 12 }} />}
            label={duration}
            size="small"
            variant="outlined"
            sx={{ fontSize: '0.65rem', height: 20 }}
          />
        )}
      </Box>

      {/* Card */}
      <Card
        variant="outlined"
        sx={{
          ml: 1,
          cursor: onClick ? 'pointer' : 'default',
          '&:hover': onClick
            ? { borderColor: 'primary.main', boxShadow: 1 }
            : {},
        }}
      >
        <CardActionArea
          onClick={onClick}
          disabled={!onClick}
          component={onClick ? 'button' : 'div'}
        >
          <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 0.5,
                flexWrap: 'wrap',
                gap: 0.5,
              }}
            >
              <Typography variant="subtitle1" component="span" fontWeight="bold" sx={{ fontSize: '0.95rem' }}>
                {title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {paid && (
                  <Chip
                    icon={<AttachMoney sx={{ fontSize: 14 }} />}
                    label="Paid"
                    size="small"
                    color="success"
                    variant="outlined"
                    sx={{ height: 22, fontSize: '0.7rem' }}
                  />
                )}
                <Chip
                  label={config.label}
                  size="small"
                  color={config.color}
                  variant="outlined"
                  sx={{ height: 22, fontSize: '0.7rem' }}
                />
              </Box>
            </Box>

            {(organization || location) && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  flexWrap: 'wrap',
                  mb: 0.5,
                }}
              >
                {organization && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}
                  >
                    <Business sx={{ fontSize: 14 }} />
                    {organization}
                  </Typography>
                )}
                {location && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}
                  >
                    <LocationOn sx={{ fontSize: 14 }} />
                    {location}
                  </Typography>
                )}
              </Box>
            )}

            {description && (
              <Typography variant="body2" sx={{ mt: 0.5, mb: 1, fontSize: '0.85rem' }}>
                {description}
              </Typography>
            )}

            {skills.length > 0 && (
              <Box sx={{ mt: 1 }}>
                <Skills skills={skills} />
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
