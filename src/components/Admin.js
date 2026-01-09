import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Tabs,
  Tab,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Stack,
  Alert,
  CircularProgress,
  Divider,
} from '@mui/material';
import { Add, Edit, Delete, Save } from '@mui/icons-material';

const API_BASE = '/api/admin';

function getAuthHeaders() {
  const credentials = sessionStorage.getItem('adminCredentials');
  if (!credentials) return {};
  return { Authorization: `Basic ${credentials}` };
}

function TabPanel({ children, value, index }) {
  return value === index ? <Box sx={{ py: 3 }}>{children}</Box> : null;
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const [experienceTypes, setExperienceTypes] = useState([]);
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    description: '',
  });
  const [contactMethods, setContactMethods] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const [skillDialog, setSkillDialog] = useState({ open: false, skill: null });
  const [expDialog, setExpDialog] = useState({ open: false, experience: null });
  const [contactDialog, setContactDialog] = useState({
    open: false,
    contact: null,
  });
  const [resumeDialog, setResumeDialog] = useState({
    open: false,
    resume: null,
  });

  const fetchData = useCallback(async () => {
    try {
      const headers = getAuthHeaders();
      const [typesRes, profileRes, skillsRes, expRes, contactRes, resumeRes] =
        await Promise.all([
          fetch('/api/experience-types'),
          fetch('/api/profile', { headers }),
          fetch('/api/skills', { headers }),
          fetch('/api/experiences', { headers }),
          fetch(`${API_BASE}/contact-methods`, { headers }),
          fetch(`${API_BASE}/resumes`, { headers }),
        ]);

      setExperienceTypes((await typesRes.json()) || []);
      const profileData = await profileRes.json();
      if (profileData) setProfile(profileData);
      setSkills((await skillsRes.json()) || []);
      setExperiences((await expRes.json()) || []);
      setContactMethods((await contactRes.json()) || []);
      setResumes((await resumeRes.json()) || []);
    } catch (err) {
      setError('Failed to fetch data');
    }
  }, []);

  const checkAuth = useCallback(async () => {
    const credentials = sessionStorage.getItem('adminCredentials');
    if (!credentials) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/check`, {
        headers: { Authorization: `Basic ${credentials}` },
      });
      if (res.ok) {
        setAuthenticated(true);
        await fetchData();
      } else {
        sessionStorage.removeItem('adminCredentials');
      }
    } catch (err) {
      sessionStorage.removeItem('adminCredentials');
    }
    setLoading(false);
  }, [fetchData]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = btoa(
      `${formData.get('username')}:${formData.get('password')}`
    );
    try {
      const res = await fetch(`${API_BASE}/check`, {
        headers: { Authorization: `Basic ${credentials}` },
      });
      if (res.ok) {
        sessionStorage.setItem('adminCredentials', credentials);
        setAuthenticated(true);
        setError('');
        await fetchData();
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  const handleSaveProfile = async () => {
    try {
      const res = await fetch(`${API_BASE}/profile`, {
        method: 'PUT',
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });
      if (!res.ok) throw new Error('Failed to save');
      alert('Profile saved!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveContact = async (contact) => {
    try {
      const method = contact.id ? 'PUT' : 'POST';
      const url = contact.id
        ? `${API_BASE}/contact-methods/${contact.id}`
        : `${API_BASE}/contact-methods`;
      const res = await fetch(url, {
        method,
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error('Failed to save');
      await fetchData();
      setContactDialog({ open: false, contact: null });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteContact = async (id) => {
    if (!window.confirm('Delete this contact method?')) return;
    try {
      await fetch(`${API_BASE}/contact-methods/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      await fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveResume = async (resume) => {
    try {
      const method = resume.id ? 'PUT' : 'POST';
      const url = resume.id
        ? `${API_BASE}/resumes/${resume.id}`
        : `${API_BASE}/resumes`;
      const res = await fetch(url, {
        method,
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(resume),
      });
      if (!res.ok) throw new Error('Failed to save');
      await fetchData();
      setResumeDialog({ open: false, resume: null });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteResume = async (id) => {
    if (!window.confirm('Delete this resume?')) return;
    try {
      await fetch(`${API_BASE}/resumes/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      await fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveSkill = async (skill) => {
    try {
      const method = skill.id ? 'PUT' : 'POST';
      const url = skill.id
        ? `${API_BASE}/skills/${skill.id}`
        : `${API_BASE}/skills`;
      const res = await fetch(url, {
        method,
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(skill),
      });
      if (!res.ok) throw new Error('Failed to save');
      await fetchData();
      setSkillDialog({ open: false, skill: null });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!window.confirm('Delete this skill?')) return;
    try {
      await fetch(`${API_BASE}/skills/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      await fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveExperience = async (experience) => {
    try {
      const method = experience.id ? 'PUT' : 'POST';
      const url = experience.id
        ? `${API_BASE}/experiences/${experience.id}`
        : `${API_BASE}/experiences`;
      const res = await fetch(url, {
        method,
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify(experience),
      });
      if (!res.ok) throw new Error('Failed to save');
      await fetchData();
      setExpDialog({ open: false, experience: null });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteExperience = async (id) => {
    if (!window.confirm('Delete this experience?')) return;
    try {
      await fetch(`${API_BASE}/experiences/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      await fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!authenticated) {
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Admin Login
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleLogin}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
        <Tab label="Profile" />
        <Tab label="Skills" />
        <Tab label="Experiences" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Name"
                value={profile.name || ''}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Title"
                value={profile.title || ''}
                onChange={(e) =>
                  setProfile({ ...profile, title: e.target.value })
                }
                fullWidth
              />
              <TextField
                label="Description"
                value={profile.description || ''}
                onChange={(e) =>
                  setProfile({ ...profile, description: e.target.value })
                }
                fullWidth
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                startIcon={<Save />}
                onClick={handleSaveProfile}
              >
                Save Profile
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6">Contact Methods</Typography>
              <Button
                startIcon={<Add />}
                onClick={() =>
                  setContactDialog({
                    open: true,
                    contact: { name: '', icon_url: '', url: '' },
                  })
                }
              >
                Add
              </Button>
            </Box>
            <Stack spacing={1}>
              {contactMethods.map((c) => (
                <Box
                  key={c.id}
                  sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                >
                  <Typography sx={{ flex: 1 }}>{c.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {c.url}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => setContactDialog({ open: true, contact: c })}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteContact(c.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6">Resumes</Typography>
              <Button
                startIcon={<Add />}
                onClick={() =>
                  setResumeDialog({
                    open: true,
                    resume: { name: '', path: '' },
                  })
                }
              >
                Add
              </Button>
            </Box>
            <Stack spacing={1}>
              {resumes.map((r) => (
                <Box
                  key={r.id}
                  sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                >
                  <Typography sx={{ flex: 1 }}>{r.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {r.path}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => setResumeDialog({ open: true, resume: r })}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteResume(r.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() =>
            setSkillDialog({ open: true, skill: { name: '', image_url: '' } })
          }
          sx={{ mb: 2 }}
        >
          Add Skill
        </Button>
        <Stack spacing={1}>
          {skills.map((skill) => (
            <Card key={skill.id} variant="outlined">
              <CardContent
                sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1 }}
              >
                <img
                  src={skill.image_url}
                  alt={skill.name}
                  style={{ width: 32, height: 32 }}
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <Typography sx={{ flex: 1 }}>{skill.name}</Typography>
                <IconButton
                  size="small"
                  onClick={() => setSkillDialog({ open: true, skill })}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => handleDeleteSkill(skill.id)}
                >
                  <Delete />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() =>
            setExpDialog({
              open: true,
              experience: {
                type_id: 1,
                title: '',
                organization: '',
                location: '',
                start_year: new Date().getFullYear(),
                end_year: new Date().getFullYear(),
                paid: false,
                short_description: '',
                long_description: '',
                point_description: '',
                url: '',
                skill_ids: [],
              },
            })
          }
          sx={{ mb: 2 }}
        >
          Add Experience
        </Button>
        <Stack spacing={1}>
          {experiences.map((exp) => (
            <Card key={exp.id} variant="outlined">
              <CardContent sx={{ py: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.organization} • {exp.start_year}-{exp.end_year}
                    </Typography>
                  </Box>
                  <Chip label={exp.type_name} size="small" />
                  {exp.paid && (
                    <Chip label="Paid" size="small" color="success" />
                  )}
                  <IconButton
                    size="small"
                    onClick={() =>
                      setExpDialog({
                        open: true,
                        experience: {
                          ...exp,
                          skill_ids: exp.skills?.map((s) => s.id) || [],
                        },
                      })
                    }
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => handleDeleteExperience(exp.id)}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </TabPanel>

      <ContactDialog
        open={contactDialog.open}
        contact={contactDialog.contact}
        onClose={() => setContactDialog({ open: false, contact: null })}
        onSave={handleSaveContact}
      />
      <ResumeDialog
        open={resumeDialog.open}
        resume={resumeDialog.resume}
        onClose={() => setResumeDialog({ open: false, resume: null })}
        onSave={handleSaveResume}
      />
      <SkillDialog
        open={skillDialog.open}
        skill={skillDialog.skill}
        onClose={() => setSkillDialog({ open: false, skill: null })}
        onSave={handleSaveSkill}
      />
      <ExperienceDialog
        open={expDialog.open}
        experience={expDialog.experience}
        experienceTypes={experienceTypes}
        skills={skills}
        onClose={() => setExpDialog({ open: false, experience: null })}
        onSave={handleSaveExperience}
      />
    </Box>
  );
}

function ContactDialog({ open, contact, onClose, onSave }) {
  const [form, setForm] = useState(contact || {});
  useEffect(() => {
    setForm(contact || {});
  }, [contact]);
  if (!contact) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{contact.id ? 'Edit Contact' : 'Add Contact'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={form.name || ''}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Icon URL"
            value={form.icon_url || ''}
            onChange={(e) => setForm({ ...form, icon_url: e.target.value })}
            fullWidth
          />
          <TextField
            label="URL"
            value={form.url || ''}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ResumeDialog({ open, resume, onClose, onSave }) {
  const [form, setForm] = useState(resume || {});
  useEffect(() => {
    setForm(resume || {});
  }, [resume]);
  if (!resume) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{resume.id ? 'Edit Resume' : 'Add Resume'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={form.name || ''}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Path"
            value={form.path || ''}
            onChange={(e) => setForm({ ...form, path: e.target.value })}
            fullWidth
            helperText="e.g., /resume.pdf"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function SkillDialog({ open, skill, onClose, onSave }) {
  const [form, setForm] = useState(skill || {});
  useEffect(() => {
    setForm(skill || {});
  }, [skill]);
  if (!skill) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{skill.id ? 'Edit Skill' : 'Add Skill'}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={form.name || ''}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Image URL"
            value={form.image_url || ''}
            onChange={(e) => setForm({ ...form, image_url: e.target.value })}
            fullWidth
            helperText="Use devicons URL"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function ExperienceDialog({
  open,
  experience,
  experienceTypes,
  skills,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(experience || {});
  useEffect(() => {
    setForm(experience || {});
  }, [experience]);
  if (!experience) return null;

  const handleSkillToggle = (skillId) => {
    const current = form.skill_ids || [];
    if (current.includes(skillId)) {
      setForm({ ...form, skill_ids: current.filter((id) => id !== skillId) });
    } else {
      setForm({ ...form, skill_ids: [...current, skillId] });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {experience.id ? 'Edit Experience' : 'Add Experience'}
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={form.type_id || 1}
              label="Type"
              onChange={(e) => setForm({ ...form, type_id: e.target.value })}
            >
              {experienceTypes.map((t) => (
                <MenuItem key={t.id} value={t.id}>
                  {t.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Title"
            value={form.title || ''}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            fullWidth
          />
          <TextField
            label="Organization"
            value={form.organization || ''}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
            fullWidth
          />
          <TextField
            label="Location"
            value={form.location || ''}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            fullWidth
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Start Year"
              type="number"
              value={form.start_year || ''}
              onChange={(e) =>
                setForm({ ...form, start_year: parseInt(e.target.value) || '' })
              }
              fullWidth
            />
            <TextField
              label="End Year"
              type="number"
              value={form.end_year || ''}
              onChange={(e) =>
                setForm({ ...form, end_year: parseInt(e.target.value) || '' })
              }
              fullWidth
            />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.paid || false}
                onChange={(e) => setForm({ ...form, paid: e.target.checked })}
              />
            }
            label="Paid"
          />
          <TextField
            label="Short Description"
            value={form.short_description || ''}
            onChange={(e) =>
              setForm({ ...form, short_description: e.target.value })
            }
            fullWidth
            multiline
            rows={2}
          />
          <TextField
            label="Long Description"
            value={form.long_description || ''}
            onChange={(e) =>
              setForm({ ...form, long_description: e.target.value })
            }
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            label="Point Description (bullet points)"
            value={form.point_description || ''}
            onChange={(e) =>
              setForm({ ...form, point_description: e.target.value })
            }
            fullWidth
            multiline
            rows={3}
            helperText="Use newlines to separate points"
          />
          <TextField
            label="URL"
            value={form.url || ''}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            fullWidth
          />
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill.id}
                  label={skill.name}
                  size="small"
                  color={
                    (form.skill_ids || []).includes(skill.id)
                      ? 'primary'
                      : 'default'
                  }
                  onClick={() => handleSkillToggle(skill.id)}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
