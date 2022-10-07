import React from "react";
import ReactDOM from "react-dom";
import './index.css'
const Books= [
{
    title:"Do It Today",
    author:"Darius Foroux",
    img:"https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg",

},
{
    title:"Atomic Habits",
    author:"James Clear",
    img:"https://m.media-amazon.com/images/I/51mc0eWj2OS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
},
{

    title:"Psychology of Money",
    author:"Morgan Housel",
    img:"https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
},

{

    title:"Power of your subconsious Mind",
    author:"Joseph Murphy",
    img:"https://m.media-amazon.com/images/I/41+CqNWoutS._SX258_BO1,204,203,200_.jpg",

},
{

  title:"Life's Amazing Secrets",
  author:"Gaur Gopal Das",
  img:"https://m.media-amazon.com/images/I/51PJyvcfPGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",

},
{

  title:"Power of your subconsious Mind",
  author:"Joseph Murphy",
  img:"https://m.media-amazon.com/images/I/41+CqNWoutS._SX258_BO1,204,203,200_.jpg",

}
]


function Booklist(){

    return(
      <>
      <Need></Need>
        <div className="course-grid">
      {Books.map((book)=>{
        return <Book book={book}></Book>
      })}
      </div>
      </>
        )
}
        
    
 const Need=()=>{
  return(
    <>
    <div class="signlog">
        <a href="login.html"> <button class="login-btn">Login</button></a>
        <a href="signup.html"><button class="signup-btn">Signup</button></a>
    </div>
    <h1 className="title">LEXICON BOOKS</h1>
    </>
  )
}
     
      /*
        <div className="course-grid">
        <Book
            
            title={firstbook.title}
            author={firstbook.author}
            img={firstbook.img}   
            
        />
        <Book  
        
        title={secondbook.title}
        author={secondbook.author}
        img={secondbook.img}     
        
        />
        <Book  
        
        title={thirdbook.title}
        author={thirdbook.author}
        img={thirdbook.img}     
        
        />
        <Book  
        
        title={fourthbook.title}
        author={fourthbook.author}
        img={fourthbook.img}     
        
        />
            </div>*/
            
 
function win(){
  alert("Please login to purchase books");
}
const Book=(props)=>{
  const {img,title,author} = props.book;
    return(

        <div className="course1">
        <img src={img} class="jslogo"></img>
        <h2 className="jstext" >{title}</h2>
        <h2 className="jstext2">{author}</h2>
        <div class="starrate">
        <h3>4.5</h3>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star "></span>
        </div>
        <h3 className="rupees">  &#8377;399</h3>  
    
    <input type ="submit" value="Buy now" class="addbtn" name="jsbuybtn" onClick={win}></input>
    </div>  
    

    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<Booklist></Booklist>)

