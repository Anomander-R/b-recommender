/* eslint-disable no-unused-vars */
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
  Stack
} from "@mui/material";

const sx_cover = {
  maxWidth: 200,
  marginTop: 4,
  marginLeft: 4,
  marginRight: 4,
  boxShadow: 1
};

const sx_large = {
  maxWidth: 200,
  marginTop: 4,
  marginLeft: 4,
  marginRight: 4,
  boxShadow: 1,
  "&:hover": {
    boxShadow: 20,
  }
};

const sx_small = {
  maxWidth: 200,
  marginTop: 4,
  marginLeft: 4,
  marginRight: 4,
  boxShadow: 1,
  "&:hover": {
    boxShadow: 20,
  }
};

const example = {
  title: 'Java Programming for Spatial Sciences',
  description: "The Java programming language has been one of the most exciting internet-friendly technologies to emerge in the last decade. Java Programming for Spatial Sciences introduces the subject to those who wish to use computers to handle information with a geographical element. The book introduces object-oriented modeling including key concepts suc",
  image: "http://books.google.com/books/content?id=cUIJtNaCww4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  publisher: "CRC Press",
  averageRating: 4,
  pageCount: 428,
  ratingsCount: 14
};



const oneMovie = [
  {
    id: "tt3098842",
    resultType: "Title",
    image:
      "https://imdb-api.com/images/original/MV5BMWNkN2YzZjQtZDlkMS00ODFkLWIyMjAtZmQ4ZWYzMWEwOTM4XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_Ratio0.7273_AL_.jpg",
    title: "Jamaica Inn",
    description: "(2014) (TV Mini Series)",
  },
];

const OneBook = ({book, size='small'}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  let {title, description, image, publisher, averageRating, pageCount, ratingsCount} = example;




  let sx_choice = sx_large;
  let maxWidth=200;
  let height=300;
  let marginSize= 4;
  let boxShadow2= 20;
  let titleSize= 'h5';

  if (size==='small'){
    maxWidth=250;
    marginSize= 1;
    //boxShadow= 5;
    titleSize= 'p2';
    height=250;
    sx_choice=sx_small;
  } else if (size==='large') {
    maxWidth=200;
    marginSize= 4;
    //boxShadow= 5;
    titleSize= 'h5';
    height=300;
    sx_choice=sx_large;
  } else if (size==='cover') {
    maxWidth=200;
    marginSize= 4;
    //boxShadow= 5;
    titleSize= 'h5';
    height=300;
    sx_choice=sx_cover;
  }



  return (
      <Box>
    <Card
      sx={sx_choice}
    >
      <CardMedia component="img" height={height} image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
      </CardContent>
      <CardActions style={{justifyContent: 'center'}}>

        <Button size="small" variant='contained' fullWidth onClick={handleClickOpen}>Details</Button>

      </CardActions>
    </Card>

<Dialog
    open={open}
    onClose={handleClose}
    
>
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
      <Rating name="half-rating" defaultValue={averageRating} precision={0.1} readOnly />
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
