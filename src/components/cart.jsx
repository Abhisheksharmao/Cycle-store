import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../store/slices/userslice';
import { clearAllItems } from '../actions/action';
import { Button } from 'react-bootstrap';
import '../css/cart.css'

export default function Cart() {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })


    const removing = () => {
        console.log("removed");
        dispatch(removeToCart())
    }
    const removeall = () => {
        console.log("all removed")
        dispatch(clearAllItems())
    }
    return (
        <>
            <Button className='m-5' onClick={() => removeall()}>Remove all</Button>
            <div >
                {data.map((val, index) => {
                    return (
                        <div key={index} className='d-flex container' >
                            <div>
                                <img src={val[0].image} alt="" width="300px"  />

                            </div>
                            <div className='comt' >
                                <div >
                                    <h1 style={{fontSize:"22px"}}>{val[0].name}</h1>
                                    <h2 className='pricetag'>{val[0].price}</h2>
                                </div>
                                <div className='removebutton'>
                                    <Button onClick={() => removing()}>Remove</Button>
                                    <Button>Buy Now</Button>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    )
}
