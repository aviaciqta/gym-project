import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={ { 
      borderTop: bodyPart === item ? '4px solid #FF2625' : '',
      background: '#fff', 
      borderBottomLeftRadius: '40px', 
      width: '200px', height: '200px', 
      cursor: 'pointer', gap: '30px'}}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 50, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '30px', height: '30px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
