import React from "react";
import {
    Button,
    spacing,
    styled,
    Typography,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Rating,
    Stack,
  } from ".";

  const StyledButton = styled(Button)(spacing);

const RecommendButton = () => {
  return (
    <StyledButton
      mt={1}
      size="small"
      variant="outlined"
      fullWidth
    //   onClick={handleClickOpen}
    >
      Recommend
    </StyledButton>
  );
};

export default RecommendButton;



