import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from ".";

const sx_small = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 200,
  //height: 450,
  marginTop: 1,
  marginLeft: 1,
  marginRight: 1,
  marginBottom: 2,
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
          <Typography gutterBottom variant="body1" component="div">
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
      </Card>
    </Box>
  );
};

export default RecommendedBook;
