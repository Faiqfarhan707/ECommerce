import React from 'react';
import { Typography, Container, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Container)(({ theme }) => ({
  padding: '40px 20px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '40px',
  maxWidth: '800px',
}));

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <Typography variant="h3" gutterBottom color="" fontWeight="bold">
          Welcome to Faiq E-Commerce Store
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
          where you can buy good stuf in low price
        </Typography>
      </HeroContainer>
      
    </div>
  );
};

export default Home;
