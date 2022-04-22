import React, {useState, useEffect} from "react";
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
  // boxShadow: 1,
  // "&:hover": {
  //   boxShadow: 20,
  // },
};

const RecommendedBook = ({
  book,
  size = "small",
  randomNumber,
  setRandomNumber,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (randomNumber > -1) {
      setOpen(true);
    }
  }, [randomNumber])
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setRandomNumber(-1);
    setOpen(false);
  };

  let {
    title,
    description,
    image,
    publisher,
    averageRating,
    pageCount,
    ratingsCount,
    selfLink,
  } = book;

  // let averageRatingNumber;

  // if (averageRating !== "no rating") {
  //   averageRatingNumber = averageRating;
  // } else {
  //   averageRatingNumber = 0;
  // }

  let sx_choice = sx_small;
  let maxWidth = 200;
  let height = 300;
  let marginSize = 4;
  let boxShadow2 = 20;
  let titleSize = "h5";

  if (size === "small") {
    maxWidth = 150;
    marginSize = 1;
    //boxShadow= 5;
    titleSize = "p2";
    height = 300;
  }

  return (
    <Box style={{display: 'flex' , alignContent: 'center'}}>

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
                <a href={selfLink} target="_blank">Read the book online</a>
              </Typography>
            ) : null}
          </CardContent>
          <CardActions
            style={{ justifyContent: "center", alignContent: "end" }}
          >
            <Button
              size="small"
              variant="outlined"
              fullWidth
              onClick={handleClickOpen}
            >
              Close
            </Button>
          </CardActions>
        </Card>
    </Box>
  );
};

export default RecommendedBook;
