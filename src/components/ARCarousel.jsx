import {Box, Typography} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import {LearnMore} from "components";

export const ARCarousel = () => {
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
        src="images/ar-frame.png"
        alt="ar frame"
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
                Augmented Reality
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
                Augmented reality (AR) allows you to see the real world around
                you with digital elements overlayed on top.
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
                Augmented reality can be used to see furniture in your house
                before you buy it, overlay navigation information as you
                drive...
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
                ...blend past and present by projecting views of historial
                Pompeii over the ruins, and more.
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
                You can experience AR through your smartphone using apps like
                Snapchat and Pokemon Go or through a headset.
              </Typography>
              <LearnMore />
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

// https://www.fi.edu/what-is-augmented-reality
