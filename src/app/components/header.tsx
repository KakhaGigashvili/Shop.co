import Link from "next/link"
import Image from "next/image"
import styles from '../fonts.module.scss'

export default () => {
    return(
        <div className="flex justify-center">
        <header className="w-[1240px] h-[48px] flex items-center justify-between bg-[#F0F0F0] block mt-[24px] px-4">
            <h1 className={`${styles.integral} font-bold text-[32px] cursor-pointer`}>SHOP.CO</h1>
            <nav className="flex gap-6">
                <Link href={"#"} className={`${styles.satoshi}flex items-center gap-1`}>Shop 
                <Image src='/image/arrow-d.png' alt='arrow' width={11.5} height={6.5}/></Link>                
                <Link className={`${styles.satoshi}`} href={"#"}>On Sale</Link>
                <Link className={`${styles.satoshi}`} href={"#"}>New Arrivals</Link>
                <Link className={`${styles.satoshi}`} href={"#"}>Brands</Link>
            </nav>
            <div className="relative w-[577px] h-[48px]">
          <input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="w-full h-full pl-12 pr-4 rounded-[62px] bg-[#F0F0F0] outline-none text-black text-sm"
          />
          <Image
            src="/search.png"
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute left-4 top-1/2 transform -translate-y-1/2"
          />
          </div>
            <div className="flex justify-center">
                <Image src="/cart.png" 
                alt='cart' 
                width={24}
                height={24}
                className="mr-[14px] cursor-pointer"
                />
                <Image src="/user.png" 
                alt='cart' 
                width={24}
                height={24}
                className="cursor-pointer"
                />
            </div>
        </header>
        </div>
    )
}