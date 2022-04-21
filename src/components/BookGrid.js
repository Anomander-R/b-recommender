import React, {useEffect, useState} from 'react'
import { OneBook, Box} from '../components'

const BookGrid = ({books}) => {

    const [seed, setSeed] = useState([]);

    const createBookComponent = (x) =>{
        const arr=[];
        // eslint-disable-next-line no-unused-vars
        const length = x.length;
        let title, description, image, publisher, averageRating,  pageCount, ratingsCount;
        for(let i=0; i<length; i++){
          
          arr.push(<Box sx={{ display: 'flex', justifyContent: 'center', }} key={`uniqueBox${i}`}><OneBook book={x[i]} size={'small'} key={`unique${i}`}/></Box>)
        }
        return arr;
      }

    useEffect(() => {
        if (books!==[] && books!==undefined){
          let temp = createBookComponent(books);
          setSeed(temp);
        }
      }, [books])




  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: {
        xs: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
      } }}>
      {seed}
    </Box>
  )
}

export default BookGrid