import React from 'react';
import { motion } from 'framer-motion';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import { Herb } from '../types/formula';

interface HerbGridProps {
  onHerbSelect: (herb: string) => void;
  selectedHerbs: string[];
}

const HerbGrid: React.FC<HerbGridProps> = ({ onHerbSelect, selectedHerbs }) => {
  // This would come from your data source
  const herbs: Herb[] = [
    {
      id: 'bohe',
      name: 'Bo He',
      image: '/images/bohe-s.png',
      properties: {
        taste: 'Pungent, Cool',
        temperature: 'Cool',
        meridians: ['Lung', 'Liver'],
        actions: ['Disperses Wind-Heat', 'Clears the head and eyes']
      }
    },
    // Add more herbs here...
  ];

  return (
    <Grid container spacing={3}>
      {herbs.map((herb) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={herb.id}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={herb.image}
                alt={herb.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {herb.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {herb.properties.taste}
                </Typography>
              </CardContent>
              <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 4 }}>
                <Tooltip title="View Properties">
                  <IconButton size="small" color="primary">
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add to Formula">
                  <IconButton 
                    size="small" 
                    color="primary"
                    onClick={() => onHerbSelect(herb.name)}
                    disabled={selectedHerbs.includes(herb.name)}
                  >
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              </div>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default HerbGrid; 