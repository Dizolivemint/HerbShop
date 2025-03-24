import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paper, Typography, Box, Chip, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formula } from '../types/formula';

interface FormulaDisplayProps {
  currentFormula: Formula | null;
  selectedHerbs: string[];
  onHerbRemove: (herb: string) => void;
}

const FormulaDisplay: React.FC<FormulaDisplayProps> = ({
  currentFormula,
  selectedHerbs,
  onHerbRemove,
}) => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Current Formula: {currentFormula?.name || 'Select a formula'}
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Selected Herbs:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <AnimatePresence>
            {selectedHerbs.map((herb) => (
              <motion.div
                key={herb}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Chip
                  label={herb}
                  onDelete={() => onHerbRemove(herb)}
                  deleteIcon={
                    <Tooltip title="Remove Herb">
                      <IconButton size="small">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  }
                  sx={{
                    m: 0.5,
                    '& .MuiChip-deleteIcon': {
                      color: 'error.main',
                      '&:hover': {
                        color: 'error.dark',
                      },
                    },
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Box>

      {currentFormula && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Required Ingredients:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {currentFormula.ingredients.map((ingredient) => (
              <Chip
                key={ingredient}
                label={ingredient}
                color={selectedHerbs.includes(ingredient) ? 'success' : 'default'}
                variant={selectedHerbs.includes(ingredient) ? 'filled' : 'outlined'}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default FormulaDisplay; 