import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import Input from "./components/Input";


function App() {
  const [note,setNote]=useState([]);

function Add(newNote)
{
  setNote((prev)=>{
    return [...prev,newNote];
  });
}
function del(index)
{
  setNote(prev=>{
    return prev.filter((noteItem,id)=>{
      return id!==index;
    })
  })
}

  return (
    <>
  <Header />
  <Input 
  Add={Add}
  />
  {note.map((item,index)=>{
  return (
    <Note
      key={index}
      id={index}
      title={item.title}
      content={item.content}
      del={del}
    />
  )
})}
  <Footer />
  </>
  );
}

export default App;
