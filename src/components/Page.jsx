import { Box } from '@mui/material';
import PropTypes from 'prop-types';


export const Page = ({children, justify, align}) => {
    return (
        <Box className="page" sx={{ height: '100vh', maxWidth: '75%', margin: 'auto', display: 'flex', alignItems: align, justifyContent: justify }}>
            {children}
        </Box >
    );
}

Page.propTypes = {
    justify: PropTypes.string,
    align: PropTypes.string,
};

Page.defaultProps = {
    justify: "center",
    align: "center",
};