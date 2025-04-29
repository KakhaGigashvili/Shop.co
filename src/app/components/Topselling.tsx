import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import styles from '../fonts.module.scss'
import Image from "next/image"
import Star from "./star"

export default () => {
    return(
        <>
        <h2 className={`${styles.integral} text-center font-bold text-5xl mt-[72px]`}>top selling</h2>
        <div className="flex justify-center items-center pt-[55px] gap-[20px]">
        <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/frame 32.png" />}
        >
        <Meta title="VERTICAL STRIPED SHIRT"/>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$212 
            <span className="text-[#00000099] line-through ml-2">$232</span>
            <span className="text-[#FF3333] 
            bg-[#FF33331A] text-xs ml-3 pl-[13.5px] pr-[13.5px] pt-[6] pb-[6] rounded-[62px]">20%</span>
            </p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/frame 33.png" />}
        >
        <Meta title="COURAGE GRAPHIC T-SHIRT"/>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$145</p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/frame 34.png" />}
        >
        <Meta title="LOOSE FIT BERMUDA SHORTS"/>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$80</p>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/frame 35.png" />}
        >
        <Meta title="FADED SKINNY JEANS"/>
        <div className="flex justify-start">
        <Star count={4.5} />
        <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$210</p>
            </Card>
            </div>
            <div className="flex justify-center mt-50">
                <button className="px-20 border-[#0000001A] py-4 mb-[64px] border rounded-[62px]">View All</button>
            </div>
        </>
    )
}