/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {SearchBar, BookGrid, noCover} from '.'

const Main = () => {

  const [items, setItems] = useState('');
  const [books, setBooks] = useState('');

  // eslint-disable-next-line no-unused-vars
  const filterItems = (x) =>{
    const arr=[];
    // eslint-disable-next-line no-unused-vars
    const length = x.length;
    let title, description, image, publisher, averageRating,  pageCount, ratingsCount;
    for(let i=0; i<length; i++){
      title = x[i].volumeInfo.title;
      description = x[i].volumeInfo.description || 'No description';
      image = x[i].volumeInfo.imageLinks.thumbnail || {noCover};
      publisher = x[i].volumeInfo.publisher || 'Unknown publisher';
      averageRating = x[i].volumeInfo.averageRating || 3;
      pageCount = x[i].volumeInfo.pageCount || 100;
      ratingsCount = x[i].volumeInfo.ratingsCount || 50;
      arr.push({title, description, image, publisher, averageRating, pageCount, ratingsCount})
    }
    return arr;
  }

  useEffect(() => {
    if (items!=='' && items!==undefined){
      let books = filterItems(items);
      setBooks(books);
    }
  }, [items])

  return (
    <div>
        <SearchBar setItems={setItems}/>
        <BookGrid books={books}/>
    </div>
  )
}

export default Main