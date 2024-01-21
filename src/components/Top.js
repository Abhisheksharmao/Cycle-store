import React, { useEffect, useState } from 'react'
import '../css/top.css'

import { Link } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/userslice'
import { Button } from 'react-bootstrap';
export default function Top() {
  const [result, setResult] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const addtocart = (payload) => {
    dispatch(addToCart(payload))
    console.log(payload)
  }

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((res) => res.json())
      .then(res => {
        setData(res);
      })
  }, [])
  return (
    <><div className="top">

        <img className='imagetop' src="./Screenshot 2024-01-21 210437.png" alt="" />



    </div>
      <div className="sui">
        <div className="seg ">
          <input type="search" name="" id="segn" placeholder='search for bikes...' onChange={(event) => { setResult(event.target.value) }} />
        </div>
        <div className="container d-flex flex-wrap m-5 justify-content-center w-100" >
          {data && data.filter((val) => {
            if (setResult === "") {
              return val;
            }
            else if (
              val.name.toLowerCase().includes(result.toLowerCase())) {
              return val;
            }
            else {
              return null;
            }
          })
            .map((ob, index) => {
              return (
                <Link to={`/itemDetails/${ob.id}`} style={{ textDecoration: "none" }}>
                  <div className='m-2 p-2 container ' key={index} style={{ width: "300px",height:"330px", border: "2px solid silver" }}>
                    <div id='im-1'><img src={ob.image} alt="" width="280px" /></div>

                    <div >
                      <h2 style={{ color: "black", textDecoration: "none" }}>{ob.name}</h2>
                      <h3 id='h3'>Price: {ob.price}</h3></div>
                    <div >
                      <Button className='secondary w-100 '>Know more</Button>
                      {/* <button className='pom1'><h2>Know More</h2></button>
                      <button className='pom'><h2 onClick={() => addtocart(ob.price, ob.name)}>Add to Cart</h2></button> */}
                    </div>
                    <br />
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>

    </>
  )
}
