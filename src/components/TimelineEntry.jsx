import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
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

export default function TimelineEntry({
  type = 'project',
  title,
  organization,
  location,
  startYear,
  endYear,
  description,
  skills = [],
  paid = false,
  isLast = false,
  onClick,
}) {
  const config = typeConfig[type] || typeConfig.project;
  const IconComponent = config.icon;
  const dateDisplay = formatDateRange(startYear, endYear);
  const duration = formatDuration(startYear, endYear);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="text.secondary"
      >
        <Typography variant="body2" fontWeight="medium">
          {dateDisplay}
        </Typography>
        {duration && (
          <Chip
            icon={<Schedule sx={{ fontSize: 14 }} />}
            label={duration}
            size="small"
            variant="outlined"
            sx={{ mt: 0.5, fontSize: '0.7rem' }}
          />
        )}
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineConnector sx={{ opacity: 0.3 }} />
        <TimelineDot color={config.color}>
          <IconComponent />
        </TimelineDot>
        {!isLast && <TimelineConnector sx={{ opacity: 0.3 }} />}
      </TimelineSeparator>

      <TimelineContent sx={{ py: 2, px: 2 }}>
        <Card
          variant="outlined"
          sx={{
            cursor: onClick ? 'pointer' : 'default',
            '&:hover': onClick
              ? {
                  borderColor: 'primary.main',
                  boxShadow: 1,
                }
              : {},
          }}
        >
          <CardActionArea
            onClick={onClick}
            disabled={!onClick}
            component={onClick ? 'button' : 'div'}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 1,
                  flexWrap: 'wrap',
                  gap: 0.5,
                }}
              >
                <Typography variant="h6" component="span">
                  {title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {paid && (
                    <Chip
                      icon={<AttachMoney sx={{ fontSize: 16 }} />}
                      label="Paid"
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  )}
                  <Chip
                    label={config.label}
                    size="small"
                    color={config.color}
                    variant="outlined"
                  />
                </Box>
              </Box>

              {(organization || location) && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    flexWrap: 'wrap',
                  }}
                >
                  {organization && (
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Business sx={{ fontSize: 16 }} />
                      {organization}
                    </Typography>
                  )}
                  {location && (
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <LocationOn sx={{ fontSize: 16 }} />
                      {location}
                    </Typography>
                  )}
                </Box>
              )}

              {description && (
                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
                  {description}
                </Typography>
              )}

              {skills.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Skills skills={skills} />
                </Box>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
}
