
import React from "react";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
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

const sx_small = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 200,
  height: 450,
  marginTop: 4,
  marginLeft: 4,
  marginRight: 4,
  boxShadow: 1,
  "&:hover": {
    boxShadow: 20,
  },
};

const OneBook = ({ book, size = "small" }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
  } = book;

  let averageRatingNumber;

  if (averageRating !== "no rating") {
    averageRatingNumber = averageRating;
  } else {
    averageRatingNumber = 0;
  }

  let sx_choice = sx_small;
  let height = 300;

  return (
    <Box>
      <Card sx={sx_choice}>
        <CardMedia component="img" height={height} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center", alignContent: "end" }}>
          <Button
            size="small"
            variant="contained"
            fullWidth
            onClick={handleClickOpen}
          >
            Details
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {`More Details about ${title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>Description:</b> {description}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Publisher:</b> {publisher}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Rating:</b> {averageRating}
          </DialogContentText>
          <Stack spacing={1}>
            <Rating
              name="half-rating"
              defaultValue={averageRatingNumber}
              precision={0.1}
              readOnly
            />
          </Stack>
          <DialogContentText id="alert-dialog-description">
            <b>Pages:</b> {pageCount}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>Rank:</b> {ratingsCount}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OneBook;