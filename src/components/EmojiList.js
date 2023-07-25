import React, { useState, useEffect } from "react";

const EmojiList = () => {
  const [emojis, setEmojis] = useState([]);
  const[totalPages,setTotalPages]=useState(1);


  useEffect(() => {
    fetch("https://emojihub.yurace.pro/api/all?page=0&&size=10")
      .then((response) => response.json())
      .then((data) => setEmojis(data))
      .then((totalPages)=> setTotalPages(totalPages));
  }, []);
  return (
    <div className="card-layout">
    {emojis.map((emoji,i) => (
        <div key={emoji.i} className="card">
        <span > NAME :{emoji.name} </span>
          <span className="Category"> Category:{emoji.category}</span>
          <span>GROUP:{emoji.group}</span>
          <span> HTML CODE: {emoji.htmlCode}</span>
        
        </div>
      ))}
    </div>
  );
};

export default EmojiList;




