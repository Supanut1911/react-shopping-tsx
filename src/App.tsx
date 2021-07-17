import {useState } from 'react'
import { useQuery } from 'react-query';

//component
import Item from './item/item'
import  Drawer  from '@material-ui/core/Drawer';
import { LinearProgress } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

//styles
import {Warpper} from './item/item.style'

//types
export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json()

const App = () => {
  const { data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
     getProducts
  )
  console.log(data);

  const getTotalItems = () => null

  const handleAddToCart = (clickedItem: CartItemType) => null
  
  const handleRemoveToCart = () => null

  if(isLoading) return <LinearProgress />
  if(error) return <div>Some thing went wrong</div>
  
  return (
    <>
     <Grid container spacing={3}>
          {
            data?.map(item => (
              <Grid item key={item.id} xs={12} sm={3}>
                <Item item={item} handleAddToCart={handleAddToCart}/>
              </Grid>
            ))
          }
        </Grid>
    </>
 
  );
}

export default App;
