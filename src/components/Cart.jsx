import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/actions";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(delCart(product));
    };

    const handleAdd = (product) => {
        dispatch(addCart(product));
    };

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} height="200px" width="180px" alt="" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold">$ {cartItem.price}</p>
                            <div className="d-flex">
                                <button onClick={() => handleRemove(cartItem)} className="btn btn-dark mx-2">
                                    -
                                </button>
                                <p>{cartItem.qty}</p>
                                <button onClick={() => handleAdd(cartItem)} className="btn btn-dark mx-2">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </>
    );
};

export default Cart;
