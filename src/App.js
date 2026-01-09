import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { Person, Article } from '@mui/icons-material';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Admin from './components/Admin';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function MainPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={1}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          aria-label="main navigation tabs"
        >
          <Tab
            icon={<Person />}
            label="About Me"
            id="tab-0"
            aria-controls="tabpanel-0"
          />
          <Tab
            icon={<Article />}
            label="Blog"
            id="tab-1"
            aria-controls="tabpanel-1"
          />
        </Tabs>
      </AppBar>

      <TabPanel value={tabValue} index={0}>
        <AboutMe />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Blog />
      </TabPanel>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
