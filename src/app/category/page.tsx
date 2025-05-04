'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../styles.module.scss';
import { Pagination, PaginationProps, Slider } from "antd";
import Star from "../components/star";
import Image from "next/image";
import Link from "next/link";

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
  const [selectType, setSelectType] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6816385e32debfe95dbdccd5.mockapi.io/product?type=${selectType}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (selectType) {
      fetchData();
    } else {
      fetchData();
    }
  }, [selectType]);

  const itemsPerPage = 9;

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <button className="flex flex-start">
        Previous</button>;
    }
    if (type === 'next') {
      return <button className="flex flex-end">Next</button>;
    }
    return originalElement;
  };

  return (
      <>
    <div className="flex justify-center gap-[20px]">
      <div className="w-[295px]">
        <div className='mr-[250px] rounded-[20px] border-[#0000001a] border w-[295px] mt-[70px]'>
          <h2 className={`${styles.satoshi} text-xl font-bold ml-[24px] mt-[20px]`}>Filtres</h2>
          <div className="border border-[#0000001a] mt-[24px] mb-[24px] w-[247px] ml-[24px]"></div>
          <ul className="ml-[24px]">
            {['T-shirt', 'Shorts', 'Shirt', 'Hoodie', 'Jeans'].map((type) => (
              <li
                key={type}
                onClick={() => setSelectType(type)}
                className={`${styles.satoshi} text-xl text-base font-normal cursor-pointer mt-[20px]
                ${selectType === type ? 'text-black font-bold' : ''
                }`}
              >
                {type}
              </li>
            ))}
          </ul>
          <div className="border border-[#0000001a] mt-[24px] mb-[24px] w-[247px] ml-[24px]"></div>
          <h2 className={`${styles.satoshi} text-xl font-bold ml-[24px] mt-[20px] mb-[20px]`}>Price</h2>
          <Slider range max={1000} defaultValue={[200, 500]} />
          <div className="border border-[#0000001a] mt-[24px] mb-[24px] w-[247px] ml-[24px]"></div>
          <h2 className={`${styles.satoshi} text-xl font-bold ml-[24px] mt-[20px] mb-[20px]`}>Colors</h2>
          <div className="ml-[24px]">
            <div className="flex gap-[16px]">
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#00C12B] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#F50606] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#F5DD06] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#F57906] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#06CAF5] border border-[#00000033]"></div>
            </div>
            <div className="flex gap-[16px] mt-[16px]">
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#063AF5] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#7D06F5] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#F506A4] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#FFFFFF] border border-[#00000033]"></div>
              <div className="w-[37px] h-[37px] rounded-[50%] bg-[#000000] border border-[#00000033]"></div>
            </div>
          </div>
          <div className="border border-[#0000001a] mt-[24px] mb-[24px] w-[247px] ml-[24px]"></div>
          <h2 className={`${styles.satoshi} text-xl font-bold ml-[24px] mt-[24px] mb-[20px]`}>Size</h2>
          <div className="ml-[24px]">
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>XX-Small</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white ml-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>X-Small</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>Small</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] ml-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>Medium</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>Large</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] ml-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>X-Large</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>XX-Large</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] ml-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>3X-Large</button>
            <button className={`${styles.satoshi} hover:bg-black bg-[#F0F0F0] hover:text-white mt-[8px] pl-[20px] pr-[20px] pt-[10px] pb-[10px] border border-[#F0F0F0] rounded-[62px] cursor-pointer`}>4X-Large</button>
          </div>
          <div className="border border-[#0000001a] mt-[24px] mb-[24px] w-[247px] ml-[24px]"></div>
          <h2 className={`${styles.satoshi} text-xl font-bold ml-[24px] mt-[20px]`}>Dress Style</h2>
          <ul className="ml-[24px]">
            <li className={`${styles.satoshi} cursor-pointer text-base font-normal text-[#00000099] mt-[22px]`}>Casual</li>
            <li className={`${styles.satoshi} cursor-pointer text-base font-normal text-[#00000099] mt-[20px]`}>Formal</li>
            <li className={`${styles.satoshi} cursor-pointer text-base font-normal text-[#00000099] mt-[20px]`}>Party</li>
            <li className={`${styles.satoshi} cursor-pointer text-base font-normal text-[#00000099] mt-[20px]`}>Gym</li>
          </ul>
          <button className={`${styles.satoshi} bg-black text-white mt-[24px] ml-[8px] pl-[87px] pr-[87px] pt-[14px] pb-[14px] border border-[#F0F0F0] rounded-[62px] cursor-pointer mb-[29px]`}>Apply Filter</button>
        </div>
      </div>

      <div className="mt-[40px] w-[925px]">
    <h2 className={`${styles.satoshi} text-2xl font-bold mb-[20px]`}>Casual</h2>
    <div className="grid grid-cols-3 gap-[20px]">
      {paginatedProducts.map((product) => (
      <div
      key={product.id}
      className="rounded-[16px] p-4 shadow hover:shadow-lg transition-all duration-200">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-[298px] object-cover rounded-[12px]"
        />
        <p className="mt-3 font-semibold text-lg cursor-pointer">{product.name}</p>
      </Link>
      <div className="flex items-center gap-2 mt-2">
        <Star count={product.rating} />
        <span className="text-sm">{product.rating}</span>
      </div>
      <p className="text-lg font-bold mt-2">${product.price}</p>
      </div>
      ))}
    </div>
  </div>
    </div>


  <div className="mt-[20px]">
  <Pagination
    align={"center"}
    current={currentPage}
    pageSize={itemsPerPage}
    total={products.length}
    itemRender={itemRender}
    onChange={(page) => setCurrentPage(page)}
    />

  </div>
      </>
  );
};
