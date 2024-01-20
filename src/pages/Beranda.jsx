import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../redux/slice/productSlice';
import { addToCart } from '../redux/slice/cartSlice';

function Beranda() {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.data)

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <>
      <div className='flex flex-wrap mx-10'>
        {products.slice(0, 10).map((product) => {
          return (
            <div className='basis-1/6 p-2'>
              {/* card */}
              <div className='h-full border rounded-md shadow-sm'>
                <img src={product.image} alt="gambar" className='w-full h-48 p-2 object-contain rounded-t-md' />
                <div className=' h-[5.25rem] p-2'>
                  <h4 className='text-md line-clamp-2'>{product.title}</h4>
                  <p className='font-bold text-lg'>${product.price}</p>
                </div>
                <div className='my-3 text-center'>
                  <button onClick={() => dispatch(addToCart({ id: product.id, title: product.title }))} className='py-1.5 px-7 text-white bg-green-600 rounded-md'>Pesan</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}

export default Beranda;