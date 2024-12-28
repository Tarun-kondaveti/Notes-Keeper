import React,{useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
const Input = ({Add}) => {
 const [newNote,setNewNote]=useState({
  title:"",
  content:"",
 });
function handleChange(e)
{
  const {name,value}=e.target;
  setNewNote((prev)=>{
    return{
      ...prev,
      [name]:value
    };
  });
}
  return (
    <div > 
      <form id="inputbox" >
        <input
        id="titleinput"
        type="text"
        name="title"
        placeholder="Enter Title "
        value={newNote.title}
        onChange={handleChange}
        />
        <textarea
        name="content"
        id="contentinput"
        placeholder="Enter Note... "
        value={newNote.content}
        rows="3"
        onChange={handleChange}
        />
        <button  id="addbutton" onClick={(event)=>{
          event.preventDefault();
          if(newNote.title===""||newNote.content===""){
            alert("Title and Content are required");
            return;
          }
         Add(newNote);
         setNewNote({
          title: "",
          content: "",
        });        
      }}><AddIcon /></button>
      </form>
    </div>
  )
}
export default Input;