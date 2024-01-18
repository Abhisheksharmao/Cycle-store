import React,{useState} from 'react'
import './top.css'
import data from './data.json'
import './sui.css';
import { Link } from 'react-router-dom';
export default function Top() {
    const [result, setResult] = useState("");
    return (
        <><div className="top">


            <div className="top-1">
                <h1>Take the drive to next level</h1>
                <p>Our new next gen Razor bicycle with 6speed gears , front and back disk brakes , tubeless tyres.</p>
                <button id='btn1'>Take Test Drive Now</button>
                <br />
                <img src="../rock-1_0.png" alt="" id='im1' />
            </div>

            <div className="top-2">
                <p>🌟🌟🌟🌟🌟</p>
                <Link to="/cyc" id='btn2' >Shop Now</Link><br />
                <img src="../rock-1_0.png" alt="" />

                {/* bottom */}
                <div className="cont">
                    <div className="cnt-1">
                        <h2>Tyre</h2>
                        <p>Tubeless</p></div>
                    <div className="cnt-2">
                        <h2>Gear</h2>
                        <p>6Speed</p>
                    </div>
                    <div className="cnt-3">
                        <h2>Disk Breakes</h2>
                        <p>Front and Back</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="sui">
        <div className="seg">
          <input type="search" name="" id="segn" placeholder='search for bikes...' onChange={(event) => { setResult(event.target.value) }} />
        </div>
        <div className="container">
          {data.filter((val) => {
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
            .map((ob) => {
              return (
                <div className='card'>
                  <div className="img" id='im-1'><img src={ob.image} alt="" /></div>
                  <hr />
                  <div className="boom">
                    <h2>{ob.name}</h2>
                    <h3 id='h3'>Price: {ob.price}</h3></div>
                    <div className="btn">
                      <button className='pom1'><h2>Know More</h2></button>
                      <button className='pom'><h2>Buy Now</h2></button>
                    </div>
                  
                  <br />
                </div>
              )
            })
          }
        </div>
      </div>

        </>
    )
}
