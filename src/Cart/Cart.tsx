import CartItem from '../CartItem/CartItem'

//style
import {Wrapper} from './Cart.style'

//types
import {CartItemType} from '../App'

type Props = {
    cartItems: CartItemType[]
    addToCart: (clickdItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length == 0 ? <p>No items in cart</p> : null}
            {cartItems.map( item => {
                return  <CartItem 
                            key = {item.id}
                            item = {item}
                            addToCart = {addToCart}
                            removeFromCart = {removeFromCart}
                        />
            })}
        </Wrapper>
    )
}

export default Cart