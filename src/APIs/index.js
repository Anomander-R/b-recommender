import axios from 'axios';
const API_KEY ='k_6ifxkppm';


export const fetchResults = (param) =>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=search+${param}`
	
	axios.get(url).then((res)=>{
    console.table(res.data);
      return(res.data.items[0]);
    }).catch((err)=>{
      console.log(err);
    })
  }
