import { Box } from '@mui/material';
import PropTypes from 'prop-types';


export const StickyBox = ({children, onTop}) => {
    return (
        <Box className={onTop ? "sticker over" : "sticker under"} sx={{ height: '100vh', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </Box>
    );
}

StickyBox.propTypes = {
    onTop: PropTypes.bool,
};

StickyBox.defaultProps = {
    onTop: false,
};