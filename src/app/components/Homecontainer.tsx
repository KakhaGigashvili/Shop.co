import Image from "next/image"
import styles from '../styles.module.scss'

export default () => {

    return(
        <>
    <div className="bg-[#F2F0F1] h-[663px] flex justify-between w-full px-[100px] mt-[24px]">
      <div>
      <h1 className={`${styles.integral} max-w-[577px] h-[173px] font-bold text-[64px] mt-[103px] font-integral leading-[64px]`}> 
        FIND CLOTHES THAT MATCHES YOUR STYLE </h1>
        <p className={`${styles.satoshi} text-base font-normal font-integral mt-[24px] leading-[22px] w-[545px] h-[33px]`}>
          Browse through our diverse range of meticulously crafted garments, 
          designed to bring out your individuality and cater to your 
          sense of style.</p>
          <button 
          className={`${styles.satoshi} 
          mt-8 bg-[#000000] text-white w-[210px] h-[52px] rounded-[62px] cursor-pointer`}>
            Shop Now
          </button>
          <div className="flex justify-center items-center gap-24 mt-[48px]">
              <div>
                <h2 className={`${styles.satoshi} font-bold text-[40px]`}>200+</h2>
                <p className={`${styles.satoshi} text-base font-normal text-[#00000099]`}>International Brands</p>
              </div>
              <div>
                <h2 className={`${styles.satoshi} font-bold text-[40px]`}>2,000+</h2>
                <p className={`${styles.satoshi} text-base font-normal text-[#00000099]`}>High-Quality Products</p>
              </div>
              <div>
                <h2 className={`${styles.satoshi} font-bold text-[40px]`}>30,000+</h2>
                <p className={`${styles.satoshi} text-base font-normal text-[#00000099]`}>Happy Customers</p>
              </div>
          </div>
      </div>
      <Image src={'/image/mphoto.jpg'} 
      alt={"homepage photo"} 
      width={400}
      height={200}
      className= "object-cover"
      />
    </div>
        <div className= "flex justify-evenly items-center bg-[#000000] w-full h-[122px]">
        
        <div>
        <Image src={'/image/versache.png'} 
        alt={"versache"} 
        width={167}
        height={33} 
        className="w-[167px] h-[33px]" />
        </div>

        <div>
        <Image src={'/image/zara.png'} 
        alt={"zara"} 
        width={167}
        height={33} 
        className="w-[167px] h-[33px]" />
        </div>

        <div>
        <Image src={'/image/gucci.png'} 
        alt={"gucci"} 
        width={167}
        height={33} 
        className="w-[167px] h-[33px]" />
        </div>

        <div>
        <Image
          src={'/image/prada.png'}
          alt={"Prada logo"}
          width={167}
          height={33}
          className="w-[167px] h-[33px]"
          />
          </div>

          <div>
        <Image
          src={'/image/calvin-klein.png'}
          alt={"Calvin Klein logo"}
          width={167}
          height={33}
          className="w-[167px] h-[33px]"
          />
          </div>

        </div>
    </>
        )
}