import React from 'react'
import './cyc.css'

export default function Cyc() {
   
    return (
        <>
            <div className="cont0">
                <div className='Cont1'>
                    <h2>Montra Rock 29T Blue with Black and Blue</h2>
                    <img src="./rock-1_0.png" alt="" width="500px" />
                    <br />
                    <button>Add to Cart</button> <button>Buy Now</button>
                </div>
                <div className="cont2">
                    <h2>Price : 150$</h2>
                    <ul>
                        <li>Frame : Hi tensile steel</li>
                        <li>Fork : Unplugged S 27.5 rigid fork with IS disc mount</li>
                        <li>Front Derailleur : NA</li>
                        <li>Rear Derailleur : yes</li>
                        <li>Tires : Ralson , nylon , rigid bead, 27.5 * 1.95</li>
                    </ul>
                </div>
            </div>
            <div className="color">
                <ul>
                    <li>red</li>
                    <li>orange</li>
                    <li>Green</li>
                </ul>
            </div>
            <div className="btn">
                <button id='flip'>Description</button>=
                <button>Specification</button>
                <button>Review</button>
            </div>
            <p id='panel'>If your calling is in off-road cycling, we have just the right partner for you in our range of Montra mountain bikes. We completely understand the thrill you seek in riding the unpaved roads or the exciting mountain trails. We at Montra have designed the perfect machine that will let you follow your urge. Our mountain bikes are engineered and tested to deliver in every situation and designed in style. The range we make uses the best technologies and cycling innovations in the world, and each bike model has been manufactured to have a unique personality. All you have to do is pick ride of your choice and let your passion drive you to reach newer heights.</p>

            <div className="suggestion">
                <div className="cn1"><img src="" alt="" /></div>   
                <div className="cn2"><img src="" alt="" /></div>   
                <div className="cn3"><img src="" alt="" /></div>   
            </div>

        </>
    )
}
