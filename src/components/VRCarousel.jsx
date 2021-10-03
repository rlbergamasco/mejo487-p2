import { Box } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

export const VRCarousel = () => {
    return (
        <Carousel
            className="carousel"
            autoPlay={false}
            animation="fade"
            indicators={true}
            timeout={500}
            navButtonsAlwaysVisible={true}
            navButtonsAlwaysInvisible={false}
            cycleNavigation={false}
            indicatorContainerProps={{
                style: {
                    marginTop: '-50px',
                }
            }}
            indicatorIconButtonProps={{
                style: {
                    zIndex: 1000
                }
            }}
            navButtonsProps={{
                style: {
                    zIndex: 1000
                }
            }} 
            >
            <Box sx={{ height: '100vh', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box className="under-1 absolute dark-screen" sx={{ height: '100vh', width: '100vw'}} />
            </Box>
            <Box sx={{ height: '100vh', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="under-1 absolute" src="images/forrest.jpg" alt="forrest" />
            </Box>
            <Box sx={{ height: '100vh', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img className="under-1 absolute" src="images/livingroom.jpg" alt="living room" />
            </Box>
        </Carousel>
    );
}