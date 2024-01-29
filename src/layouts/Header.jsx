import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { minusQuantity, plusQuantity } from '../redux/slice/cartSlice';

function Header() {

  const carts = useSelector((state) => state.cart.data)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  return (
    <>
      <header className="sticky top-0 mb-3 bg-white">
        <nav className="px-10 py-3 shadow-sm">
          <ul className="flex justify-center gap-10 mb-3">
            <li>Beranda</li>
            <li>Produk</li>
            <li>About</li>
          </ul>
          <div className="flex justify-between items-center">
            <h1 className="basis-1/5 mx-5">
              Logo Website
            </h1>
            <div className="basis-3/5">
              <div className="flex items-center gap-5">
                <div className="w-full relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Cari Produk" className="w-full p-2.5 ps-11 text-sm border border-gray-400 rounded-lg outline-none focus:border-blue-400" />
                </div>
              </div>
            </div>
            <div className="basis-1/5 flex items-center gap-5 mx-5">
              <div>
                {/* button cart */}
                <button className="py-2 px-3 rounded-md hover:bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </button>
              </div>
              <div className="flex gap-3">
                <button className="py-1 px-4 text-gray-600 border rounded-lg">Masuk</button>
                <button className="py-1 px-4 text-gray-600 border border-gray-100 rounded-lg bg-gray-100">Daftar</button>
              </div>
            </div>
          </div>
        </nav>
        {/* cart modal */}
        <div className={`relative`}>
          <div className="absolute right-5 -top-1 w-[26rem] h-96 bg-white border shadow-sm rounded-md">
            <ul className='p-2'>
              {carts.length !== 0 ? (
                carts.map((cart, index) => {
                  return (
                    <li key={index} className='mb-2 p-2 border rounded-md'>
                      <div className='flex justify-evenly items-center'>
                        <div className='basis-1/5'>
                          <img src={cart.image} alt={cart.title} className='h-20' />
                        </div>
                        <div className='basis-2/5'>
                          <p className='mb-1 line-clamp-1'>{cart.title}</p>
                          <div className='flex items-center gap-3 w-fit border'>
                            <button onClick={() => dispatch(minusQuantity({ id: cart.id }))} className='py-1 px-1 hover:bg-gray-200'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                              </svg>
                            </button>
                            <p className=''>{cart.qty}</p>
                            <button onClick={() => dispatch(plusQuantity({ id: cart.id }))} className='py-1 px-1 hover:bg-gray-200'>
                              {/* <button className='py-1 px-1 hover:bg-gray-200'> */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                            </button>
                            {/* <p>{cart.qty}</p> */}
                          </div>
                        </div>
                        <div className='basis-1/5'>
                          <p className='font-bold text-lg'>${cart.qty * cart.price}</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              ) : (<>kososng</>)}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;