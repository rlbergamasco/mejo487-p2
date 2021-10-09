import {Box, Typography} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import {LearnMore} from "components";

export const MRCarousel = () => {
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
        className="over-1 absolute frame"
        src="images/mr-frame.png"
        alt="mr frame"
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
                Mixed Reality
              </Typography>
            </Box>
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
                Mixed reality (MR) combines elements of AR and VR to allow
                real-world and digital objects to interact.
              </Typography>
            </Box>
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
                MR devices can fully encompass your field of vision like a VR
                headset and use cameras to show the world around you with
                digital elements mixed in...
              </Typography>
            </Box>
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
                ...or they can have a holographic, see-through display similar
                to an AR headset.
              </Typography>
            </Box>
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
                Just like AR and VR, MR can also be experienced through your
                phone!
              </Typography>
              <LearnMore />
            </Box>
          </Box>
        </Carousel>
        <img
          className="under-2 absolute"
          src="images/mr-items.png"
          alt="flower vase and globe"
        />
      </Box>
    </Box>
  );
};

// https://www.fi.edu/tech/what-is-mixed-reality
