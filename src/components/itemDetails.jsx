
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import '../css/itemdetail.css'
import { Button } from 'react-bootstrap';
import { addToCart } from '../store/slices/userslice';



export default function Itemdetails() {


  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/data?id=" + id)
      .then((res) => res.json())
      .then(res => {
        setData(res);
      })
  }, [id])


  const addingtocart = () => {
    dispatch(addToCart(data))
  }
  return (
    <>
      <div className='d-flex'>
        {data && data.map((ob, index) => {
          return (
            <div className='card-container' key={index}>
              <div className="img" id='im-1'><img src={ob.image} alt="" /></div>

              <div className="boom-gfor m-2">
                <h2>{ob.name}</h2>
                <h3 id='h3'>Price: {ob.price}</h3></div>
              <div className="btaf">
                <Button className='m-2' onClick={() => addingtocart()}><h2>Add to Cart</h2></Button>
                <Button ><h2>Buy Now</h2></Button>
              </div>

              <br />
            </div>
          )
        })}

        <div className='m-20 p-5'>
          <h1>Specification</h1>
          <ul>
            <li>Frame : Hi tensile steel</li>
            <li>Fork : Unplugged S 27.5 rigid fork with IS disc mount</li>
            <li>Front Derailleur : NA</li>
            <li>Rear Derailleur : yes</li>
            <li>Tires : Ralson , nylon , rigid bead, 27.5 * 1.95</li>
          </ul>
        </div>
      </div>

      <div className="description m-3">
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore ipsa possimus error eius saepe libero. Voluptate distinctio officiis magnam nemo id voluptatibus corporis, eius accusamus enim nisi nesciunt at ipsa, fugiat pariatur. Optio praesentium excepturi, quaerat veritatis recusandae quas eligendi, assumenda nam quasi a tempora necessitatibus obcaecati earum quia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolores soluta blanditiis eos, a animi minima consequatur, ducimus recusandae quam, cum repudiandae iste nostrum commodi ratione repellendus sunt! Provident quia itaque at, quidem nisi maiores nesciunt totam? Culpa ad perferendis, hic maiores doloremque adipisci eaque nulla optio modi doloribus quae.</p>
      </div>

    </>
  )
}
