import React, { useState,useEffect } from 'react';
import data from './data.json'

function Cake() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apidatas, setApidatas] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://apifromashu.herokuapp.com/api/allcakes")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setApidatas(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
 return(
    


    <div className="row col-sm-12 justify-content-center">

        {apidatas.map(item => (
           <div className="col-sm-2" key={item.cakeid}>
           <p className="text-center"><img src={item.image} style={{width:"100%",height:"150px"}}/>
           <br/>Name : {item.name}<br/>Price : {item.price} <br/> Discount: 10%</p>
           </div>
        ))}
          
    </div>
 );
 }
}


export default Cake;