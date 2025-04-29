import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import styles from '../fonts.module.scss'
import Image from "next/image"
import Star from "./star"

export default () => {
    return(
        <>
        <h2 className={`${styles.integral} text-center font-bold text-5xl mt-[72px]`}>New Arrivals</h2>
        <div className="flex justify-center items-center pt-[55px] gap-[20px]">
 
        <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/t-shirt.png" />}
        >
        <Meta title="T-SHIRT WITH TAPE DETAILS"/>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$120</p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/jeans.png" />}
        >
        <Meta title="SKINNY FIT JEANS"/>
        <div className="flex justify-start">
        <Star count={3.5} />
        <p className="ml-2">3.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$240 
            <span className="text-[#00000099] line-through ml-2">$260</span>
            <span className="text-[#FF3333] 
            bg-[#FF33331A] text-xs ml-3 pl-[13.5px] pr-[13.5px] pt-[6] pb-[6] rounded-[62px]">20%</span>
            </p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/shirt.png" />}
        >
        <Meta title="CHECKERED SHIR"/>
                <div className="flex justify-start">
                <Star count={4.5} />
                <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
                </div>
                <p className={`${styles.satoshi} font-bold text-2xl`}>$180</p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/sleeve.png" />}
        >
        <Meta title="SLEEVE STRIPED T-SHIRT" />
            <div className="flex justify-start">
            <Star count={4.5} />
            <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
            </div>
            <p className={`${styles.satoshi} font-bold text-2xl`}>$130 
            <span className="text-[#00000099] line-through ml-2">$160</span>
            <span className="text-[#FF3333] 
            bg-[#FF33331A] text-xs ml-3 pl-[13.5px] pr-[13.5px] pt-[6] pb-[6] rounded-[62px]">30%</span>
            </p>
        </Card>
            </div>
            <div className="flex justify-center mt-50">
                <button className="px-20 border-[#0000001A] py-4 mb-[64px] border rounded-[62px]">View All</button>
            </div>
        <div className= "border border-[#0000001A] w-full" ></div>
        </>
    )
}