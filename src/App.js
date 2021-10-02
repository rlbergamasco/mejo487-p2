import React from 'react';
import './app.css';
import { Typography } from '@mui/material';
import { TypedText, Page } from 'components';
import { Waypoint } from 'react-waypoint';

const App = () => {
  const realityTypes = ["Virtual", "Augmented", "Mixed"];

  // const [viewHeight, setViewHeight] = useState(0);
  // useEffect(() => {
  //   setViewHeight(document.getElementById('1').clientHeight);
  // });

  return (
    <div>
      <Typography className="rotate" variant="h2" align="center">Please rotate your device.</Typography>
      <div className="snap">
        <Page>
          <Typography variant="h1" align="center">What is <br></br>
            <TypedText content={realityTypes} /> <br></br>
            Reality?</Typography>
        </Page>
        <section>
          <Typography className="sticker">Sticky</Typography>
          <Page>
            <Typography variant="h2" align="center">Imagine you're in a living room.</Typography>
          </Page>
          <Page>
            <Typography variant="h2" align="center">You put on a virtual reality headset and now you're at the beach.</Typography>
          </Page>
        </section>
        <Typography className="sticker">Second Sticky</Typography>
        <Page>
          <Typography variant="h2" align="center">Virtual reality ...</Typography>
        </Page>
      </div>
    </div>
  );
}

export default App;
