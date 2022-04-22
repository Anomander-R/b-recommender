import React, { useState, useEffect } from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from ".";

const sx_small = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 200,
  height: 450,
  marginTop: 4,
  marginLeft: 4,
  marginRight: 4,
};

const RecommendedBook = ({
  book,
  size = "small",
  randomNumber,
  setRandomNumber,
}) => {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (randomNumber > -1) {
      handleClickOpen();
    }
  }, [randomNumber]);

  const handleClose = () => {
    setRandomNumber(-1);
    setOpen(false);
  };

  let { title, image, publisher, pageCount, selfLink } = book;

  let sx_choice = sx_small;
  let height = 500;

  if (size === "small") {
    height = 300;
  }

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Card sx={sx_choice}>
        <CardMedia
          component="img"
          height={height}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>{publisher}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Page Count: {pageCount}
          </Typography>
          {selfLink !== "no link" ? (
            <Typography variant="body2" color="text.secondary">
              <a href={selfLink} target="_blank" rel="noreferrer">
                Read the book online
              </a>
            </Typography>
          ) : null}
        </CardContent>
        <CardActions style={{ justifyContent: "center", alignContent: "end" }}>
          <Button
            size="small"
            variant="outlined"
            fullWidth
            onClick={handleClose}
          >
            Close
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RecommendedBook;
