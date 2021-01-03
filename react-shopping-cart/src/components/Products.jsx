import React, {useState} from 'react'
import { v4 as uuidv4 } from "uuid";


function Products({addToCart}) {
    const [products] = useState([
        {
          name: "Fahreneit 451",
          cost: "6.05",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/41qI9quGIdL._AC_SX184_.jpg",
        },
        {
          name: "1984",
          cost: "3.05",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL320_SR178,320_.jpg",
        },
        {
          name: "The Great Gatsby",
          cost: "2.05",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81af%2BMCATTL._AC_UL320_SR210,320_.jpg",
        },
        {
          name: "Uncle Tom's Cabin",
          cost: "3.05",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51JZmkbQzPL._AC_UL320_SR224,320_.jpg",
        },
        {
            name: "Animal Farm",
            cost: "6.05",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/71wdbkiRokL._AC_UL320_SR178,320_.jpg",
          },
          {
            name: "Of Mice And Men",
            cost: "1.05",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/71LPo9FucCL._AC_UL320_SR182,320_.jpg",
          },
          {
            name: "Catch-22",
            cost: "2.05",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/61Q1LrHdpqL._AC_UL320_SR214,320_.jpg",
          },
          {
            name: "The Scarlet Letter",
            cost: "7.05",
            image:
              "https://images-na.ssl-images-amazon.com/images/I/61zFKDXiwLL._AC_UL320_SR214,320_.jpg",
          },
          {
            name: "Black Beauty",
            cost: "6.05",
            image:
              "https://m.media-amazon.com/images/I/61aba4wF1yL._SL230_.jpg",
          },
          {
            name: "The Secret Lake",
            cost: "3.05",
            image:
              "https://m.media-amazon.com/images/I/61XvU3oAOJL._SL230_.jpg",
          },
          {
            name: "Nevins",
            cost: "2.05",
            image:
              "https://m.media-amazon.com/images/I/31lthE5pV4L._SL230_.jpg",
          },
          {
            name: "Rebekah",
            cost: "3.05",
            image:
              "https://m.media-amazon.com/images/I/51wHmYMS03L._SL230_.jpg",
          },
          {
              name: "Warriors",
              cost: "6.05",
              image:
                "https://m.media-amazon.com/images/I/81coFShJGbL._SL230_.jpg",
            },
            {
              name: "The Dragons",
              cost: "1.05",
              image:
                "https://m.media-amazon.com/images/I/71wHOqAzBkL._SL230_.jpg",
            },
            {
              name: "Wild Game",
              cost: "2.05",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/413kTDJpUKL._AC_SX184_.jpg",
            },
            {
              name: "Atomic Habits",
              cost: "7.05",
              image:
                "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg",
            },
      ]);

      const [search,setSearch]= useState("");

      const searchBook = (e)=>{
          setSearch(e.target.value);       
          
      }

      let filteredBooks = products.filter(
        (item) =>{
            return item.name.toLowerCase().indexOf(search) !== -1
        }
     )
      
    return (
        <>
        <h1>Books</h1>
        <form  className="search-bar">
            <input type="text" onChange={(e)=>searchBook(e)} placeholder="Search by book name..."/>
        </form>
        <div className="products">
          {filteredBooks.map((product) => (
            <div className="product" key={uuidv4()}>
                <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>${product.cost}</h4>
              
              <button onClick={() => addToCart(product)} className="btn-add-cart">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </>
    )
}

export default Products
