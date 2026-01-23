import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { Person, Article } from '@mui/icons-material';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import { StarField } from 'starfield-react';

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
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StarField
        fps={60}
        speed={1}
        count={10000}
        starSize={1}
        width={windowSize.width}
        height={windowSize.height}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      />
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
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
