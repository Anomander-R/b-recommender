import React, { useState, Fragment, useEffect } from "react";
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
// import SlideshowIcon from '@mui/icons-material/Slideshow';

import {
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  SearchIcon,
  BookmarkAddedIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from ".";
//import {fetchResults} from '.'
// import { SearchApi } from '.'
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar({ setItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);
  const [alertModal, setAlertModal] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm || /^\s*$/.test(searchTerm)) {
      setAlertModal(true);
      return;
    } else {
        let input = fetchResults(searchTerm);

        if (input?.totalItems===0){
          setError(true);
        }
    }
  };

  const handleClose=()=>{
    setAlertModal(false);
  }



  const fetchResults = (param) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${param}`;
    axios
      .get(url)
      .then((res) => {
        //console.table(res.data);
        setResult([...res.data.items]);
        setItems([...res.data.items]);
        return;
      })
      .catch((err) => {
        return(err);
      });
  };

  useEffect(() => {
    setSearchTerm("");
  }, [result]);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <BookmarkAddedIcon fontSize="large" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              align="left"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Book Recommender
            </Typography>
            <Typography
              variant="p2"
              align="right"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Which book should you read?
            </Typography>
            <form onSubmit={handleSubmit}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  type="text"
                  placeholder="Search books…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchTerm}
                  onChange={handleChange}
                />
              </Search>
            </form>
          </Toolbar>
        </AppBar>
      </Box>


      <Dialog open={alertModal} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          Important
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <b>You have to type something!</b> 
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>










    </Fragment>
  );
}
