import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../redux/slice/productSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Beranda() {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.data)
  const carts = useSelector((state) => state.cart.data)

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   // fetch('https://fakestoreapi.com/products')
  //   fetch('https://api.escuelajs.co/api/v1/products')
  //     .then(res => res.json())
  //     .then(json => setData(json))
  // }, [])

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  // console.log(products)

  return (
    <>
      <div>
        halaman beranda
      </div>
      {/* {data.slice(0, 5).map((cart) => { */}
      <ul className='flex flex-wrap gap-2'>
        {products.slice(0, 5).map((cart) => {
          return (
            <li key={cart.id} className='bg-gray-200'>
              <p>{cart.id}</p>
              <p>{cart.title}</p>
              <button onClick={() => dispatch(addToCart({ id: cart.id, title: cart.title }))}>add</button>
            </li>
          )
        })}
      </ul>

      <p>Cart</p>
      <ul className='flex flex-wrap gap-2'>
        {carts.map((cart) => {
          return (
            <li key={cart.id} className='bg-gray-200'>
              <p>{cart.title}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default Beranda;