import {Box, Typography} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

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
        className="over-1 absolute ar-frame"
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
              <Typography className="gray-box" variant="h2" align="center">
                Next, you try an augmented reality headset.
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
                more words
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
                add more here
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
              <Typography className="white" variant="h2" align="center">
                Augmented Reality
              </Typography>
              <Typography className="white">Augmented Reality</Typography>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};
