import {Typography, Box} from "@material-ui/core";
import {ArrowDownward} from "@material-ui/icons";

export const LearnMore = () => {
  return (
    <Box
      sx={{display: "flex", justifyContent: "center", alignItems: "flex-end"}}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          p: 1,
          m: 2,
          borderRadius: "10px",
        }}
      >
        <Typography variant="button">Scroll to learn more </Typography>
        <ArrowDownward />
      </Box>
    </Box>
  );
};
