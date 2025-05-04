import styles from '../styles.module.scss'
import Image from "next/image"

export default () => {
    return (
        <footer className="relative min-h-screen w-full flex justify-center">
            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-[#F0F0F0] z-0" />

            <div className="relative z-10">
                <div className="flex justify-center">
                    <div className="flex justify-around bg-[#000000] w-[1240px] h-[180px] mt-[80px] rounded-[20px]">
                        <h2 className={`${styles.integral} text-[45px] text-[#FFFFFF] text-center font-bold text-5xl w-[551px] h-[94px] mt-[43px] ml-[64px]`}>
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                        <div className="mt-[36px]">
                            <div className="flex items-center bg-white w-[349px] h-[48px] rounded-[64px] px-[16px]">
                                <Image alt="email icon" src="/image/email.png" width={20} height={15} className="mr-[10px]" />
                                <input type="email" name="email" placeholder="Enter your email address"
                                    className={`${styles.satoshi} w-full h-full bg-transparent outline-none text-black`} />
                            </div>

                            <button className={`${styles.satoshi} font-medium w-[349px] h-[46px] rounded-[64px] text-base text-[#000000] mt-[14px] bg-[#FFFFFF] cursor-pointer`} >
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-[50px] ml-[64px] flex item-between">
                    <div className='mr-[114px]'>
                            <h1 className={`${styles.integral} font-bold text-[32px] cursor-pointer`}>SHOP.CO</h1>
                            <p className={`${styles.satoshi} w-[248px] h-[66px] mt-[25px]`}>
                            We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                            <div className='flex justify-start mt-[35px] gap-[12px] mr-[114px]'>
                                <Image alt="x" src="/image/x.png" width={28} height={28} />
                                <Image alt="fb" src="/image/fb.png" width={28} height={28} />
                                <Image alt="instagram" src="/image/instagram.png" width={28} height={28} />
                                <Image alt="github" src="/image/github.png" width={28} height={28} />
                            </div>
                        </div>

                            <div className='mr-[114px]'>
                                <h3 className={`${styles.satoshi} font-medium `}>Company</h3>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[26px] font-normal`}>About</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Features</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Works</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Career</p>
                            </div>

                            <div className='mr-[114px]'>
                            <h3 className={`${styles.satoshi} font-medium `}>Help</h3>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[26px] font-normal font-normal`}>Customer Support</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Delivery Details</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Terms & Conditions</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Privacy Policy</p>
                            </div>

                            <div className='mr-[114px]'>
                            <h3 className={`${styles.satoshi} font-medium `}>FAQ</h3>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[26px] font-normal`}> Account </p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Manage Deliveries</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Orders</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px] font-normal`}>Payments</p>
                            </div>

                            <div className='mr-[114px]'>
                            <h3 className={`${styles.satoshi} font-medium `}>Resources</h3>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[26px]`}> Free eBooks </p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px]`}>Development Tutorial</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px]`}>How to - Blog</p>
                                <p className={`${styles.satoshi} text-[#00000099] font-normal mt-[19px]`}>Youtube Playlist</p>
                            </div>

                    </div>

            <div className="border border-[#0000001A] w-[1240px] mt-[50px] ml-[50px] mr-[100px]"></div>

            <div className="flex justify-between mt-[20px]">
                <h4 className={`${styles.satoshi} text-[#00000099] font-normal mt-[5px] ml-[100px]`}>Shop.co © 2000-2023, All Rights Reserved</h4>
                <div className="flex gap-[12px] mr-[100px]">
                    <Image alt="visa" src="/image/visa.png" width={46} height={30} />
                    <Image alt="mastercard" src="/image/master.png" width={46} height={30} />
                    <Image alt="paypal" src="/image/paypal.png" width={46} height={30} />
                    <Image alt="apple" src="/image/apple.png" width={46} height={30} />
                    <Image alt="gplay" src="/image/gplay.png" width={46} height={30} />
                </div>
            </div>
        </div>

        </footer>
    )
}
