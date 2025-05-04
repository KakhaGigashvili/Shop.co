'use client'

import Image from "next/image"
import styles from '../styles.module.scss'
import Star from "../components/star";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

type ProductDetails = {
    id: string;
    name: string;
    photo: string;
    rating: number;
    price: number;
    type: string;
  };

export default () => {

    const router = useRouter();
    const { id } = router.query

    const [product, setProduct] = useState<ProductDetails | null>(null);
    const[count, setCount] = useState<number>(1)

    const increaseCount = () =>{
        setCount(count + 1)
    }

    const decreaseCount = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        if (id) {
          const fetchProduct = async () => {
            try {
              const response = await axios.get(`https://6816385e32debfe95dbdccd5.mockapi.io/product/${id}`);
              setProduct(response.data);
            } catch (error) {
              console.error('Error fetching product details:', error);
            }
          };

          fetchProduct();
        }
      }, [id]);


  return (
    <>
    <div className="flex justify-center">
        <div className="border bg-[#0000001A] mt-[24px] w-[1240px]"></div>
        </div>
        <div className="flex">
        <div className='flex justify-center flex-col gap-[14px] ml-[330px] mt-[82px]'>
        <Image src='/image/clothes/image 2.png' width={152} height={167} alt={'shirt'} />
        <Image src='/image/clothes/image 3.png' width={152} height={167} alt={'shirt'} />
        <Image src='/image/clothes/image 4.png' width={152} height={167} alt={'shirt'} />
        </div>
        <div className="mt-[82px] ml-[14px]">
        <Image src='/image/clothes/image 1.png' width={444} height={530} alt={'shirt'} />
        </div>
        <div className="mt-[82px] ml-[40px]">
        <h2 className={`${styles.integral} font-bold text-[40px]`} >One Life Graphic T-shirt</h2>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$260
            <span className="text-[#00000099] line-through ml-2">$300</span>
            <span className="text-[#FF3333]
            bg-[#FF33331A] text-xs ml-3 pl-[13.5px] pr-[13.5px] pt-[6] pb-[6] rounded-[62px]">40%</span>
            </p>
            <p className={`${styles.satoshi} w-[590px] font-normal text-base mt-[25px]`} >
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and
                breathable fabric, it offers superior comfort and style.</p>

                <div className="border bg-[#0000001A] mt-[24px] w-[590px] divide-[#0000001a] "></div>

                <p className={`${styles.satoshi} w-[590px] font-normal text-base mt-[25px]`} >Select Colors</p>
                <div className="flex gap-[16px]">
                <div className="w-[37px] h-[37px] rounded-[50%] rounded bg-[#4F4631]"></div>
                <div className="w-[37px] h-[37px] rounded-[50%] rounded bg-[#314F4A]"></div>
                <div className="w-[37px] h-[37px] rounded-[50%] rounded bg-[#31344F]"></div>
                </div>

                <div className="border bg-[#0000001A] mt-[24px] w-[590px]"></div>

                <div className="gap-[12px]">
                    <p className="mt-[24px] mb-[16px]">Choose Size</p>
                    <button className="pt-[12px] pr-[24px] pb-[12px] rounded-[62px] pl-[12px] bg-[#F0F0F0]
                    hover:bg-[#000000] hover:#00000099 hover:text-white">Small</button>

                    <button className="pt-[12px] pr-[24px] pb-[12px] rounded-[62px] pl-[12px] bg-[#F0F0F0]
                    hover:bg-[#000000] ml-[12px] hover:#00000099 hover:text-white">Medium</button>

                    <button className="pt-[12px] pr-[24px] pb-[12px] rounded-[62px] pl-[12px] bg-[#F0F0F0]
                    hover:bg-[#000000] ml-[12px] hover:#00000099 hover:text-white">Large</button>

                    <button className="pt-[12px] pr-[24px] pb-[12px] rounded-[62px] pl-[12px] bg-[#F0F0F0]
                    hover:bg-[#000000] ml-[12px] hover:text-white">X-Large</button>
                </div>

                <div className="border bg-[#0000001A] w-[590px] mt-[24px]"></div>

                <div className="flex justify-evenly">
                    <div className="flex items-center justify-between bg-[#F0F0F0] px-4 mt-[24px] py-2 rounded-full w-[120px]">
                        <button className="text-2xl font-light cursor-pointer" onClick={decreaseCount}>−</button>
                        <span className="text-base font-medium">{count}</span>
                        <button className="text-2xl font-light cursor-pointer" onClick={increaseCount}>+</button>
                    </div>
                    <button className="bg-[#000000] w-[400px] mt-[24px] h-[52px] text-white rounded-[62px]">Add to Cart</button>
                </div>

        </div>


        </div>
    </>
  );
}
