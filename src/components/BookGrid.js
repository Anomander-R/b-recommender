import React, { useEffect, useState } from "react";
import { OneBook, Box, RecommendButton, RecommendModal } from "../components";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookGrid = ({ books }) => {
  const [seed, setSeed] = useState([]);
  const [randomNumber, setRandomNumber] = useState(-1);
  const [disabled, setDisabled] = useState(true);
  const [theBook, setTheBook] = useState("");

  const createBookComponent = (x) => {
    const arr = [];
    // eslint-disable-next-line no-unused-vars
    const length = x.length;

    for (let i = 0; i < length; i++) {
      arr.push(
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          key={`uniqueBox${i}`}
        >
          <OneBook book={x[i]} size={"small"} key={`unique${i}`} />
        </Box>
      );
    }
    return arr;
  };

  useEffect(() => {
    if (books !== [] && books !== undefined && books !== "") {
      let temp = createBookComponent(books);
      setSeed(temp);
      console.log(books);
    }
  }, [books]);

  useEffect(() => {
    if (books.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [seed]);

  console.log(theBook,randomNumber)

  const recBook = () => {
    if (randomNumber >= 0 && books.length > 0) {
      return books[randomNumber];
    } else if (books.length > 0) {
      return books[0];
    }
  };

  useEffect(() => {
    if (books.length > 0) {
      setTheBook(recBook);
    }
  }, [books]);

  const newRandomBook = ()=>{
    setTheBook(seed[randomNumber]);
  }

  useEffect(() => {
    if (randomNumber!==-1) {
      newRandomBook();
    }
  }, [randomNumber]);


  return (
    <Box>
      <RecommendButton setRandomNumber={setRandomNumber} disabled={disabled} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(5, 1fr)",
          },
        }}
      >
        {seed}
      </Box>


        <RecommendModal
          book={theBook}
          randomNumber={randomNumber}
          setRandomNumber={setRandomNumber}
        />

    </Box>
  );
};

export default BookGrid;
