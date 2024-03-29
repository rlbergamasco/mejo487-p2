import {Box, Typography, Grid} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import {LearnMore} from "components";

export const VRCarousel = () => {
  return (
    <Box
      className="page"
      sx={{
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        className="over-1 absolute vr-frame vr-1"
        src="images/vr-frame-1.47.png"
        alt="vr frame"
      />
      <img
        className="over-1 absolute vr-frame vr-2"
        src="images/vr-frame-1.77.png"
        alt="vr frame"
      />
      <img
        className="over-1 absolute vr-frame vr-3"
        src="images/vr-frame-2.16.png"
        alt="vr frame"
      />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Carousel
          className="carousel"
          autoPlay={false}
          animation="fade"
          indicators={true}
          timeout={300}
          navButtonsAlwaysVisible={true}
          navButtonsAlwaysInvisible={false}
          cycleNavigation={false}
          indicatorContainerProps={{
            style: {
              marginTop: "-50px",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              zIndex: 1000,
            },
          }}
          navButtonsProps={{
            style: {
              zIndex: 1000,
            },
          }}
        >
          <Box
            sx={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{maxWidth: "80%"}}>
              <Typography className="gray-box" variant="h1" align="center">
                Virtual Reality
              </Typography>
            </Box>
            <img
              className="under-1 absolute"
              src="images/forrest.jpg"
              alt="forrest"
            />
          </Box>
          <Box
            sx={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{maxWidth: "80%"}}>
              <Typography className="gray-box" variant="h2" align="center">
                Virtual reality (VR) completely immerses you in an experience
                and shuts out the physical world around you.
              </Typography>
            </Box>
            <img
              className="under-1 absolute"
              src="images/lake.jpg"
              alt="lake"
            />
          </Box>
          <Box
            sx={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{maxWidth: "80%"}}>
              <Typography className="gray-box" variant="h2" align="center">
                VR can transport you into a real world or imagined environment.
              </Typography>
            </Box>
            <img
              className="under-1 absolute"
              src="images/space.jpg"
              alt="space"
            />
          </Box>
          <Box
            sx={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{maxWidth: "80%"}}>
              <Typography className="gray-box" variant="h2" align="center">
                VR devices include all-in-one headsets like HTC Vive and Oculus
                Rift...
              </Typography>
            </Box>
            <img
              className="under-1 absolute"
              src="images/classroom.jpg"
              alt="classroom"
            />
          </Box>
          <Box
            sx={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{maxWidth: "80%"}}>
              <Typography className="gray-box" variant="h2" align="center">
                ...and devices that use your phone screen like Google Cardboard
                and Gear VR.
              </Typography>
              <LearnMore />
            </Box>
            <img
              className="under-1 absolute"
              src="images/boat.jpg"
              alt="boat"
            />
          </Box>
        </Carousel>
        <Box
          className="under-2 absolute dark-screen"
          sx={{height: "100vh", width: "100vw"}}
        />
      </Box>
    </Box>
  );
};

// photos by John Fowler (https://unsplash.com/@wildhoney), Sidekix Media (https://unsplash.com/@sidekix), ... on Unsplash (https://unsplash.com)
// Anatoliy Gromov (https://unsplash.com/@agromov), Ivan Aleksic (https://unsplash.com/@ivalex)
// https://www.theverge.com/a/best-vr-headset-oculus-rift-samsung-gear-htc-vive-virtual-reality
