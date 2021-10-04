import {Box, Typography} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

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
        className="over-1 absolute"
        src="images/vr-frame.png"
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
                changes surroundings...
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
                ...or in another scenic place.
              </Typography>
            </Box>
            <img
              className="under-1 absolute"
              src="images/livingroom.jpg"
              alt="living room"
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
              <Typography className="white" variant="h2" align="center">
                Virtual Reality
              </Typography>
              <Typography className="white">Virtual Reality</Typography>
            </Box>
            <Box
              className="under-1 absolute dark-screen"
              sx={{height: "100vh", width: "100vw"}}
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
