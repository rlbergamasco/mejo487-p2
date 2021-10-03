import React from 'react';
import './app.css';
import { Typography, Box } from '@mui/material';
import { TypedText, Page, StickyBox } from 'components';
import { Waypoint } from 'react-waypoint';

const App = () => {
  const realityTypes = ["Virtual", "Augmented", "Mixed"];

  // const [viewHeight, setViewHeight] = useState(0);
  // useEffect(() => {
  //   setViewHeight(document.getElementById('1').clientHeight);
  // });

  return (
    <React.Fragment>
      {/* if device is portrait, display message */}
      <Typography className="rotate" variant="h2" align="center">Please rotate your device.</Typography>

      <div className="snap">
        <section>
          <Page>
            <Typography variant="h1" align="center">What is <br></br>
              <TypedText content={realityTypes} /> <br></br>
              Reality?</Typography>
          </Page>
          <StickyBox>
            <img src="images/livingroom.jpg" alt="living room" />
          </StickyBox>
          <section>
            <Page>
              <Typography className="gray-box" variant="h2" align="center" color="white">Imagine you're in a living room.</Typography>
            </Page>
            <StickyBox onTop>
              <img src="images/square.png" alt="square" />
            </StickyBox>
            <StickyBox>
              <img src="images/forrest.jpg" alt="forrest" />
            </StickyBox>
            <Page>
              <Typography className="gray-box" variant="h2" align="center" color="white">You put on a virtual reality headset and now you're in a forrest...</Typography>
            </Page>
            <StickyBox>
              <img src="images/livingroom.jpg" alt="forrest" />
            </StickyBox>
            <Page>
              <Typography className="gray-box" variant="h2" align="center" color="white">You put on a virtual reality headset and now you're in a living room...</Typography>
            </Page>
          </section>
          <Page>
            <Typography className="gray-box" variant="h2" align="center" color="white">You put on a virtual reality headset and now you're in a living room...</Typography>
          </Page>
        </section>
        <section>
          <Typography className="sticker" variant="h2">Second Sticky</Typography>
          <Page>
            <Typography variant="h2" align="center">Virtual reality ...</Typography>
          </Page>
        </section>
      </div>

    </React.Fragment>
  );
}

export default App;
