import Link from "next/link"
import Image from "next/image"
import styles from '../styles.module.scss'

export default () => {
    return(
      <>
        <div className="flex justify-center">
        <header className="w-[1240px] h-[48px] flex items-center justify-between bg-[#FFFFFF] block mt-[24px] px-4">
            <h1 className={`${styles.integral} font-bold text-[32px] cursor-pointer`}><Link href={"/"}>SHOP.CO</Link></h1>
            <nav className={`${styles.dropdownWrapper} flex gap-6 `}>
                <Link href={"#"} className={`${styles.satoshi} flex items-center gap-1`}><Link href={'/category'}>Shop</Link>
                <Image src='/image/arrow-d.png' alt='arrow' width={11.5} height={6.5} className={styles.arrowIcon} /></Link>

                <div className={`${styles.dropdown}`}>
                    <Link href="#" className="block py-1 hover:text-blue-500">Privacy Policy</Link>
                    <Link href="#" className="block py-1 hover:text-blue-500">About Policy</Link>
                    <Link href="#" className="block py-1 hover:text-blue-500">Payment Gateway</Link>
                    <Link href="#" className="block py-1 hover:text-blue-500">Terms & Conditions</Link>
                </div>

                <Link className={`${styles.satoshi}`} href={"#"}>On Sale</Link>
                <Link className={`${styles.satoshi}`} href={"#"}>New Arrivals</Link>
                <Link className={`${styles.satoshi}`} href={"#"}>Brands</Link>
            </nav>
            <div className="relative w-[577px] h-[48px]">
          <input
            type="search"
            name="search"
            placeholder="Search for products..."
            className={`${styles.search} w-full h-full pl-12 pr-4 rounded-[62px] bg-[#F0F0F0] outline-none text-black text-sm`}
            />
          <Image
            src="/image/search.png"
            alt="Search Icon"
            width={20}
            height={20}
            className={`${styles.sicon} absolute left-4 top-1/2 transform -translate-y-1/2`}
            />
          </div>
            <div className="flex justify-center">
              <Link href={'/yourcart'}>
                <Image src="/image/cart.png"
                alt='cart'
                width={24}
                height={24}
                className="mr-[14px] cursor-pointer"
                />
                </Link>
                <Link href={'/login'}>
                <Image src="/image/user.png"
                alt='cart'
                width={24}
                height={24}
                className="cursor-pointer"
                />
                </Link>
            </div>
        </header>
        </div>
                <div className="flex justify-center">
                  <div className="border border-[#0000001A] mt-[24px] w-[1240px]"></div>
                </div>
                </>
    )
}
