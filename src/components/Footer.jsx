import React from "react";


function Footer()
{
    
const year=new Date().getFullYear();
console.log(year);
    return(
        <footer>
        <h1> copyright &copy; {year} </h1>
        </footer>
    )
}

export default Footer;