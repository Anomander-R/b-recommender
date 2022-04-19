import React, {useState, useEffect} from 'react'
import {SearchBar} from '.'

const Main = () => {

  const [items, setItems] = useState('');

  useEffect(() => {
    if (items!=='' && items!==undefined){
      console.log(items.length);
      console.log(items[0]);
      console.log(items[2]);
      console.log(items[0].volumeInfo.title);
      console.log(items[0].volumeInfo.description);
      console.log(items[0].volumeInfo.imageLinks.thumbnail);
      console.log(items[0].volumeInfo.publisher);
      console.log(items[0].volumeInfo.pageCount);
      console.log(items[0].volumeInfo.averageRating);
      console.log(items[0].volumeInfo.panelizationSummary.ratingsCount);
    }
  }, [items])

  return (
    <div>
        <SearchBar setItems={setItems}/>
    </div>
  )
}

export default Main