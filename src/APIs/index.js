import axios from 'axios';

export const fetchResults = (param) =>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${param}`
	
	axios.get(url).then((res)=>{
      return(res.data.items[0]);
    }).catch((err)=>{
      console.log(err);
    })
  }
