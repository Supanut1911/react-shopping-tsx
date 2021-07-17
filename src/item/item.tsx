import Button from '@material-ui/core/Button'

//Types
import { CartItemType } from '../App'

//styles
import {Warpper} from './item.style'

type Props = {
    item: CartItemType
    handleAddToCart: (clickItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Warpper>
        <img src= {item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Warpper>
)

export default Item