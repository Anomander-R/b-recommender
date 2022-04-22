import React, { useState, useEffect } from "react";
import { SearchBar, BookGrid, noCover } from ".";

const Main = () => {
  const [items, setItems] = useState("");
  const [books, setBooks] = useState("");

  const filterItems = (x) => {
    const arr = [];

    const length = x.length;
    let title,
      description,
      image,
      publisher,
      averageRating,
      pageCount,
      ratingsCount,
      selfLink;
    for (let i = 0; i < length; i++) {
      title = x[i].volumeInfo.title;
      description = x[i].volumeInfo.description || "No description";
      image =
        x[i].volumeInfo.imageLinks?.thumbnail === undefined
          ? noCover
          : x[i].volumeInfo.imageLinks.thumbnail;
      publisher = x[i].volumeInfo.publisher || "Unknown publisher";
      averageRating = x[i].volumeInfo.averageRating || "no rating";
      pageCount = x[i].volumeInfo.pageCount || "who knows";
      ratingsCount = x[i].volumeInfo.ratingsCount || "no rank";

      selfLink = x[i].selfLink || "no link";
      arr.push({
        title,
        description,
        image,
        publisher,
        averageRating,
        pageCount,
        ratingsCount,
        selfLink,
      });
    }
    return arr;
  };

  useEffect(() => {
    if (items !== "" && items !== undefined) {
      let books = filterItems(items);
      setBooks(books);
    }
  }, [items]);

  return (
    <div>
      <SearchBar setItems={setItems} />
      <BookGrid books={books} />
    </div>
  );
};

export default Main;
