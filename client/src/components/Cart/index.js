import React, { useEffect } from 'react';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';


const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            })
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        };

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds }
        });
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}>

                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaWQ9IkdyYWRpZW50IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMjU2IiB5MT0iNDgwIiB4Mj0iMjU2IiB5Mj0iMzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxMmMwZTciLz48c3RvcCBvZmZzZXQ9IjAuNSIgc3RvcC1jb2xvcj0iI2MyNzFlYiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y0NGY1YSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik00NzkuOTc3LDI2My4zODZBOCw4LDAsMCwwLDQ3MiwyNTZIMzU3LjIxbC01LjIyLTEwNC40QTgsOCwwLDAsMCwzNDQsMTQ0SDI4OFYxMDRhNzEuOTc1LDcxLjk3NSwwLDAsMC05Ni02Ny44NzJBNzEuOTc1LDcxLjk3NSwwLDAsMCw5NiwxMDR2NDBINDBhOCw4LDAsMCwwLTcuOTksNy42bC0xNiwzMjBBOCw4LDAsMCwwLDI0LDQ4MEg0ODhhOCw4LDAsMCwwLDcuOTc3LTguNjE0Wk00NTYsNDM4LjQyMiw0NzMuMDUyLDQ2NGgtMzQuMVptMjEuNjc2LDMuNjY5LTEzLjkxNC0yMC44N0w0NDguODQsMjcyaDE1Ljc1MlpNNDMyLjc2LDI3MmwxNSwxNDkuOTQ2TDQzMC4yLDQ0OC4yOCw0MTYuNjM5LDI3MlptLTkxLjU3LTE2SDMyNi4xMzNsLTUuNjQ4LTk2aDE1LjlabS0zNi43MzMtOTYsNS42NDgsOTZoLTE2LjlsLTQuOC05NlpNMjE2LDQ4YTU2LjA2NCw1Ni4wNjQsMCwwLDEsNTYsNTZ2NDBIMjQwVjEwNGE3MS44ODYsNzEuODg2LDAsMCwwLTI2LjcyNy01NS45MzFDMjE0LjE3Nyw0OC4wMjYsMjE1LjA4NSw0OCwyMTYsNDhabS0yNCw1LjQxNEE1Ni4wNjksNTYuMDY5LDAsMCwxLDIyNCwxMDR2NDBIMTYwVjEwNEE1Ni4wNjksNTYuMDY5LDAsMCwxLDE5Miw1My40MTRaTTExMiwxMDRhNTYuMDY0LDU2LjA2NCwwLDAsMSw1Ni01NmMuOTE1LDAsMS44MjMuMDI2LDIuNzI3LjA2OUE3MS44ODMsNzEuODgzLDAsMCwwLDE0NCwxMDR2NDBIMTEyWm05Ni41OTIsMzYwSDMyLjQxbDE1LjItMzA0SDk2djUxLjcxOUw3NS41NjIsMjI1LjM0NEE4LDgsMCwwLDAsNzIsMjMydjY0YTgsOCwwLDAsMCw4LDhoNDhhOCw4LDAsMCwwLDgtOFYyMzJhOCw4LDAsMCwwLTMuNTYyLTYuNjU2TDExMiwyMTEuNzE5VjE2MEgyMjR2MjRhOCw4LDAsMCwwLDE2LDBWMTYwaDMyLjM5bDQuOCw5NkgyMzJhOCw4LDAsMCwwLTcuOTc3LDcuMzg2Wk0xMDQsMjI1LjYxNWwxNiwxMC42NjZWMjg4SDg4VjIzNi4yODFaTTIzOS40MDgsMjcySDQwMC41OTJsMTQuNzY5LDE5MkgyMjQuNjM5Wk0zNjgsMzEydjY0YTQwLjA0NSw0MC4wNDUsMCwwLDEtNDAsNDBIMzEyYTQwLjA0NSw0MC4wNDUsMCwwLDEtNDAtNDBWMzEyYTgsOCwwLDAsMSwxNiwwdjY0YTI0LjAyNywyNC4wMjcsMCwwLDAsMjQsMjRoMTZhMjQuMDI3LDI0LjAyNywwLDAsMCwyNC0yNFYzMTJhOCw4LDAsMCwxLDE2LDBaIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCkiLz48L3N2Zz4K" />

            </div>
        );
    }

    return (
        <div className="cart">
            <div className="close" onClick={toggleCart}>[close]</div>
            <h5>Shopping Bag</h5>
            {state.cart.length ? (
                <div>
                    {state.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex-row space-between">
                        <strong>Total: ${calculateTotal()}</strong>
                        {
                            Auth.loggedIn() ?
                                <button onClick={submitCheckout}>
                                    Checkout
                                </button>
                                :
                                <span>(log in to check out)</span>
                        }
                    </div>
                </div>
            ) : (
                <p>
                    Your cart is empty
                </p>
            )}
        </div>

    )
}
export default Cart;