import axios from 'axios';
import React, { useState } from 'react'
import NewsData from './NewsData';

const News = () => {

  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  // console.log("Data", data);
  const handleData = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${searchData}&token=8971f9bf303114382680fb7d910141c9`
      )
      .then((res) => {
        setData(res.data.articles);
      });
  };

  return (
  <div>
<div
      style={{
        border: "1px solid gray",
        width: "30%",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "30px",
        height:"50px"
      }}
    >
      

      <input label="Search..."
        variant="standard"
        onChange={(e) => setSearchData(e.target.value)} />

<button label
style={{ width: "100px", 
height: "30px",marginTop: "10px",
 marginLeft: "10px", borderRadius:"10px",border:"none" }}
onClick={handleData}>
Search
</button>
    </div>
    <div><NewsData data= {data}/></div>

  </div>
)
}

export default News