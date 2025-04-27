import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import styles from '../fonts.module.scss'
import Image from "next/image"

export default () => {
    return(
        <>
        <h2 className={`${styles.integral} text-center font-bold text-5xl mt-[72px]`}>New Arrivals</h2>
        <div className="flex justify-center items-center">

        <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/t-shirt.png" />}
        >
        <Meta title="T-SHIRT WITH TAPE DETAILS"/>
        <div className="flex justify-start">
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 5.png'} alt={'star'} width={8} height={16}/>
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
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
        <Image src={'/image/star 5.png'} alt={'star'} width={8} height={16} />
        <p className="ml-2">3.5/<span className="text-[#00000099]">5</span></p>
        </div>
        <p className={`${styles.satoshi} font-bold text-2xl`}>$240 
            <span className="text-[#00000099] line-through ml-2">$260</span>
            </p>
            <span className="text-[#FF3333] 
            bg-[#FF33331A] text-xs ml-3">20%</span>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/shirt.png" />}
        >
        <Meta title="CHECKERED SHIR"/>
                <div className="flex justify-start">
                <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
                <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
                <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
                <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
                <Image src={'/image/star 5.png'} alt={'star'} width={8} height={16}/>
                <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
                </div>
            </Card>

            <Card
        style={{width: 300, height: 300}}
        cover={<Image alt="t-shirt" width={296} height={298} src="/image/clothes/sleeve.png" />}
        >
        <Meta title="SLEEVE STRIPED T-SHIRT" />
            <div className="flex justify-start">
            <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
            <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
            <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
            <Image src={'/image/star 1.png'} alt={'star'} width={18} height={18}/>
            <Image src={'/image/star 5.png'} alt={'star'} width={8} height={16}/>
            <p className="ml-2">4.5/<span className="text-[#00000099]">5</span></p>
            </div>
        </Card>
            </div>

        </>
    )
}