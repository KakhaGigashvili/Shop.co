'use client'

import { useEffect, useState } from 'react';
import styles from '../styles.module.scss'
import axios from 'axios';
import Image from "next/image"

type Product = {
    id: string;
    name: string;
    photo: string;
    rating: number;
    price: number;
    type: string;
  };

export default () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [productCounts, setProductCounts] = useState<Record<string, number>>({});
    const [subtotal, setSubtotal] = useState<number>(0)

    const increaseCount = (id: string) => {
    setProductCounts((prev) => ({
        ...prev,
        [id]: (prev[id] || 1) + 1,
    }));
    };

    const decreaseCount = (id: string) => {
    setProductCounts((prev) => ({
        ...prev,
        [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
    };

    useEffect(() => {
        axios
          .get('https://6816385e32debfe95dbdccd5.mockapi.io/product')
          .then((res) => {
            setProducts(res.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, [])

      useEffect(() => {
        const newSubtotal = products.slice(0, 3).reduce((acc, product) => {
          const count = productCounts[product.id] || 1;
          return Math.floor(acc + product.price * count);
        }, 0);
        setSubtotal(newSubtotal);
      }, [productCounts, products]);

      const removeProduct = (id: string) => {
        setProducts((prev) => prev.filter(product => product.id !== id));
        setProductCounts((prev) => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
      };

      const discount:number = Math.round(subtotal * 0.2)

    return(
        <>
            <h2 className={`${styles.integral} ml-[330px] mt-[70px] mb-[24px] font-bold text-[40px]`} >Your Cart</h2>
        <div className='flex justify-center'>

            <div className='flex justify-center h-[508px]'>
                <div className='w-[667px] h-[124px] gap-[16px] flex flex-col'>

                {products.slice(0, 3).map((product) => (

                <div
                    key={product.id}
                    className="relative flex rounded-[16px] shadow hover:shadow-lg transition-all duration-200 bg-white"
                >
                    <div className="absolute top-3 right-3 z-10 cursor-pointer">
                    <Image src="/image/trash.png" width={18} height={19} alt="trash" onClick={() => removeProduct(product.id)} />
                    </div>


                    <img
                    src={product.photo}
                    alt={product.name}
                    className="w-[124px] h-[124px] object-cover rounded-[12px] ml-[16px]"
                    />

                    <div className="ml-[16px] w-[227px]">
                    <p className="mt-3 font-semibold text-lg">{product.name}</p>
                    <p>Size: Large</p>
                    <p>Color: White</p>
                    <p className="text-lg font-bold mt-2">${product.price}</p>
                    </div>

            <div className="mt-[50px] flex justify-end ml-[auto] mr-[16px]">
            <div className="flex items-center justify-between bg-[#F0F0F0] px-4 mt-[24px] py-2 rounded-[62px] h-[44px] w-[120px]">
                <button className="text-2xl font-light cursor-pointer" onClick={() => decreaseCount(product.id)}>−</button>
                <span className="text-base font-medium">{productCounts[product.id] || 1}</span>
                <button className="text-2xl font-light cursor-pointer" onClick={() => increaseCount(product.id)}>+</button>
            </div>
            </div>
        </div>
        ))}

            </div>
            </div>

            <div className='w-[505px] rounded-[16px] border-[#0000001A] border h-[458px] ml-[20px]'>
                <h4 className={`${styles.satoshi} weight-bold mt-[20px] text-2xl ml-[24px]`}>Order Summery</h4>
                <p className={`${styles.satoshi} flex justify-between font-normal mt-[20px] text-xl text-[#00000099] ml-[24px]`}>Subtotal <p className='mr-[24px] text-[#000000]'>${subtotal}</p> </p>
                <p className={`${styles.satoshi} flex justify-between font-normal mt-[20px] text-xl text-[#00000099] ml-[24px]`}>Discount (-20%)
                <p className='mr-[24px] text-[#FF3333]' >-${subtotal - discount}</p> </p>
                <p className={`${styles.satoshi} flex justify-between font-normal mt-[20px] text-xl text-[#00000099] ml-[24px]`}>Delivery Free
                <p className='mr-[24px] text-[#000000]' >$15</p> </p>

                <div className='w-[457px] border border-[#0000001A] ml-[24px] mt-[20px]'></div>

                <p className={`${styles.satoshi} flex justify-between font-normal mt-[20px] text-xl text-[#000000] ml-[24px] mb-[24px]`}>Total <p className='mr-[24px]' >
                    {Math.round(subtotal * 0.2) + 15}</p></p>

                <div className="flex items-center">
                    <div className="relative ml-[24px]">
                        <Image
                        alt="email icon"
                        src="/image/mark.png"
                        width={24}
                        height={24}
                        className="absolute left-[16px] top-1/2 transform -translate-y-1/2"
                        />
                        <input
                        type="text"
                        placeholder="Add Promo Code"
                        className={`${styles.satoshi} w-[326px] pl-[50px] pr-[16px] outline-none h-[48px] border border-[#F0F0F0] rounded-[62px]`}
                        />
                    </div>

                    <button className="ml-[24px] pt-[13px] pb-[13px] pl-[38px] pr-[38px] bg-black text-white rounded-[62px]">
                        Apply
                    </button>
                    </div>
                    <button
                    className='ml-[24px] w-[457px] h-[62px] rounded-[62px] bg-black text-white mt-[24px] cursor-pointer'>
                        Go to Checkout</button>
                    </div>
                </div>
                    </>
    )
}
