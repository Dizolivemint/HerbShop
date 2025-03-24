import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import HerbGrid from './components/HerbGrid';
import FormulaDisplay from './components/FormulaDisplay';
import { Formula } from './types/formula';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

const App: React.FC = () => {
  const [currentFormula, setCurrentFormula] = useState<Formula | null>(null);
  const [selectedHerbs, setSelectedHerbs] = useState<string[]>([]);
  const [formulaSet, setFormulaSet] = useState('9'); // Default to "Follow the Tao"

  const handleHerbSelect = (herb: string) => {
    setSelectedHerbs(prev => [...prev, herb]);
  };

  const handleHerbRemove = (herb: string) => {
    setSelectedHerbs(prev => prev.filter(h => h !== herb));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h1" gutterBottom align="center">
              Chinese Medicine Herbology Adventure
            </Typography>
          </motion.div>

          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Select Your Path</InputLabel>
              <Select
                value={formulaSet}
                label="Select Your Path"
                onChange={(e) => setFormulaSet(e.target.value)}
              >
                <MenuItem value="9">Follow the Tao</MenuItem>
                <MenuItem value="1">Path 1</MenuItem>
                <MenuItem value="2">Path 2</MenuItem>
                <MenuItem value="3">Path 3</MenuItem>
                <MenuItem value="4">Path 4</MenuItem>
                <MenuItem value="5">Path 5</MenuItem>
                <MenuItem value="6">Path 6</MenuItem>
                <MenuItem value="7">Path 7</MenuItem>
                <MenuItem value="8">Path 8</MenuItem>
              </Select>
            </FormControl>
          </Paper>

          <AnimatePresence mode="wait">
            <motion.div
              key={formulaSet}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <FormulaDisplay
                currentFormula={currentFormula}
                selectedHerbs={selectedHerbs}
                onHerbRemove={handleHerbRemove}
              />
            </motion.div>
          </AnimatePresence>

          <Box sx={{ mt: 4 }}>
            <HerbGrid
              onHerbSelect={handleHerbSelect}
              selectedHerbs={selectedHerbs}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App; 