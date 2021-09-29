import { React } from 'react';
import { Typography, Box } from '@mui/material';
import { TypedText } from 'components';
function App() {
  const realityTypes = ["Virtual", "Augmented", "Mixed"];
  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h1" align="center">What is <br></br>
        <TypedText content={realityTypes} /> <br></br>
        Reality?</Typography>
    </Box >
  );
}

export default App;
