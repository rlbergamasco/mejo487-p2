import {Box} from "@material-ui/core";
import PropTypes from "prop-types";

export const StickyBox = ({children, onTop, depth}) => {
  return (
    <Box
      className={onTop ? `sticker over-${depth}` : `sticker under-${depth}`}
      sx={{
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

StickyBox.propTypes = {
  onTop: PropTypes.bool,
  depth: PropTypes.number,
};

StickyBox.defaultProps = {
  onTop: false,
  depth: 1,
};
