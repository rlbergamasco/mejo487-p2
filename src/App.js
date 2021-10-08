import React from 'react';
import './app.css';
import { Button, Typography, Grid, Box } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';
import { TypedText, Page, StickyBox, VRCarousel, ARCarousel, MRCarousel, XRQuiz, LearnMore } from 'components';

const App = () => {
  const realityTypes = ["Augmented", "Virtual", "Mixed"];

  const scrollToTop = () => {
    const body = document.querySelector('.snap')
    body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

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
            <Grid>
              <Typography className="gray-box" variant="h1" align="center">What is <br></br>
                <TypedText content={realityTypes} /> <br></br>
                Reality?</Typography>
              <LearnMore />
            </Grid>
          </Page>
          <ARCarousel />
          <VRCarousel />
          <MRCarousel />
        </section>
        <Page >
          <Grid>
            <Typography variant="h1" align="center">Quiz</Typography>
            <XRQuiz />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={scrollToTop}>
                back to start
                <ArrowUpward />
              </Button>
            </Box>
          </Grid>

        </Page>
      </div>
    </React.Fragment >
  );
}

export default App;

// Scroll snap with sticky example 
// https://codepen.io/michellebarker/pen/XwQXGv