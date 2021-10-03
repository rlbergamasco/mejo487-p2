import React from 'react';
import './app.css';
import { Typography, Box } from '@material-ui/core';
import { TypedText, Page, StickyBox, VRCarousel, ARCarousel, MRCarousel } from 'components';
import { Waypoint } from 'react-waypoint';

const App = () => {
  const realityTypes = ["Augmented", "Virtual", "Mixed"];
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

          <StickyBox depth={3}>
            <img src="images/livingroom.jpg" alt="living room" />
          </StickyBox>
          <Page>
            <Typography className="gray-box" variant="h1" align="center">What is <br></br>
              <TypedText content={realityTypes} /> <br></br>
              Reality?</Typography>
          </Page>
          <ARCarousel />
          <VRCarousel />
          <MRCarousel />
        </section>
        <section>
          <Typography className="sticker" variant="h2">Second Sticky</Typography>
          <Page>
            <Typography variant="h2" align="center">Quiz</Typography>
          </Page>
        </section>
      </div>

    </React.Fragment >
  );
}

export default App;
