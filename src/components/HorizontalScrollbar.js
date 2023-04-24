import React from 'react';
//import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box} from '@mui/material';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const option = {
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      item: 1,
    },
    400: {
      item: 2,
    },
    600: {
      item: 3,
    },
    1000: {
      item: 4,
    },
  },
};



const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box mt={4} sx={{position: 'static'}}>
  <OwlCarousel className="owl-theme" {...option}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 50px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </OwlCarousel>
  </Box>
);

export default HorizontalScrollbar;
