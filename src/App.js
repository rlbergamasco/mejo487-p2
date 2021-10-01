import { React } from 'react';
import './app.css';
import { Typography, Box } from '@mui/material';
import { TypedText } from 'components';
import { Waypoint } from 'react-waypoint';
import { StickyContainer, Sticky } from 'react-sticky';

const App = () => {
  const realityTypes = ["VIRTUAL", "AUGMENTED", "MIXED"];
  const contents = [
    <Typography variant="h1" align="center">What is <br></br>
      <TypedText content={realityTypes} /> <br></br>
      Reality?</Typography>,
    <Typography variant="h2" align="center">Imagine you're in a living room.</Typography>,
    <Typography variant="h2" align="center">You put on a virtual reality headset and now you're at the beach.</Typography>,
    <Typography variant="h2" align="center">Virtual reality ...</Typography>,


  ];
  return (
    <div className="snap">
      <div className="wrapper">
        {contents.map((content, i) => (
          <Box key={i} className="page" sx={{ height: '100vh', maxWidth: '1000px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {content}
          </Box >
        ))}
      </div>
    </div>
  );
}

export default App;
