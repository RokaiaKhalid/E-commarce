import {createContext, useState} from 'react';
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <= all_product.length; index++) {
        cart[index] = 0;    
    }
    return cart;
}
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
            localStorage.setItem('cartItems', JSON.stringify(newCart));
            return newCart;
        });
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: 0 };
            localStorage.setItem('cartItems', JSON.stringify(newCart))
            return newCart;
        })
            
        
    }
    const increase = (itemId) => addToCart(itemId);
    const decrease = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) };
            localStorage.setItem('cartItems', JSON.stringify(newCart));
            return newCart;
        });
    };
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }

        }
        return totalAmount;

    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems+= cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, increase, decrease, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;