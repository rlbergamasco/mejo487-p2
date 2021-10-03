import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';


export const StickyPage = ({children, onTop, depth}) => {
    return (
        <Box className="sticker page" sx={{ height: '100vh', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img className={onTop ? `over-${depth} absolute` : `under-${depth} absolute`} src="images/vr-frame.png" alt="vr frame" />
            <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {children}
            </Box>
        </Box>
    );
}

StickyPage.propTypes = {
    onTop: PropTypes.bool,
    depth: PropTypes.number,
};

StickyPage.defaultProps = {
    onTop: false,
    depth: 1,
};