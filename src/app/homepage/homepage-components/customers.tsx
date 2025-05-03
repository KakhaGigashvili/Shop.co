'use client'

import styles from '../../styles.module.scss'
import Image from "next/image"
import { useState } from "react";
import Star from '../../components/star';

export default () => {

    const customers = [
        { name: "Danny H.", star: 4.5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ab amet et, cumque cupiditate nobis, hic quaerat beatae aliquam esse provident mollitia earum ratione natus eaque error necessitatibus? Magni, repellat." },
        { name: "Sarah M.", star: 5, text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”" },
        { name: "Alex K.", star: 5, text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”" },
        { name: "Sarah M.", star: 5, text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" },
        { name: "Mooen", star: 5, text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const visibleCount = 3;

    const handleNext = () => {
        if (startIndex + visibleCount < customers.length) {
        setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
        setStartIndex(startIndex - 1);
        }
    };

    const visibleCustomers = customers.slice(startIndex, startIndex + visibleCount);

    return(
        <>

        <div>
            <h2 className={`${styles.integral} ml-[330px] font-bold text-5xl mt-[80px]`} >OUR HAPPY CUSTOMERS</h2>

            <div className="flex justify-end gap-[15px] mb-[40px] mr-[330px]">

                <button onClick={handlePrev} className="hover:cursor-pointer">
                <Image src="/image/left.png" alt="left" width={15} height={18} />
                </button>

                <button onClick={handleNext} className="hover:cursor-pointer">
                <Image src="/image/right.png" alt="right" width={15} height={18} />
                </button>

        </div>

            <div className="flex gap-5 justify-center">
                    {visibleCustomers.map((item, i) => (
                        <div key={i} className="w-[400px] h-[240px] rounded-[20px] border-[1px] border-[#F0F0F0] box-border" >
                            <div className="flex justify-start ml-[32px] mt-[28px]">
                                <Star count={item.star} />
                            </div>
                                <h3 className={`${styles.integral} font-bold ml-[32px] mt-[15px]`}>{item.name}</h3>
                                <p className= {`${styles.satoshi} ml-[32px] mr-[32px] mt-[12px]`}>{item.text}</p>
                        </div>
                    ))}
                    </div>
        </div>
        </>
    )
}
