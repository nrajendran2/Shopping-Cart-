import cart from './CartReducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers ({
    cart 
})

export default rootReducer



// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart container element

 //ES6 short hand for {cart: cart}

