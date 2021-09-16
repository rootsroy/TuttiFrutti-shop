import React from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';

const Cart = () => {
    return (
        <div className="cart">
            <div className="close">[close]</div>
            <h2>Shopping Cart</h2>
            <div>
                <cartItem></cartItem>
                <div className="flex-row space-between">
                    <strong></strong>
                    {
                        Auth.loggedIn() ?
                            <button>
                                Checkout
                            </button>
                            :
                            <span>(log in to check out)</span>
                    }
                </div>
            </div>
        </div>

    )
}
export default Cart;