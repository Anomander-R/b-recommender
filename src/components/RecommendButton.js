import React from "react";
import { Button, spacing, styled } from ".";

const StyledButton = styled(Button)(spacing);

const RecommendButton = ({ setRandomNumber, disabled }) => {
  const generateNumber = () => {
    let temp = Math.floor(Math.random() * 10);
    return temp;
  };

  const handleClick = () => {
    setRandomNumber(generateNumber());
  };

  return (
    <StyledButton
      mt={1}
      size="small"
      variant="outlined"
      fullWidth
      disabled={disabled}
      onClick={handleClick}
    >
      Recommend
    </StyledButton>
  );
};

export default RecommendButton;
