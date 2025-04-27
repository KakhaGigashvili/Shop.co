'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import styles from '../fonts.module.scss'

export default () => {

    const [isVisible, setIsVisible] = useState(true);

    const visible = () => {
            setIsVisible(false)
    }

    return(
        <>
        { isVisible && (
            <div className={`${styles.satoshi} bg-black text-white justify-center text-center text-sm flex items-center w-full h-[38px]`}>
            Sign up and get 20% off to your first order. <Link href={"#"} className="underline ml-1"> Sign Up Now</Link>
            <Image 
            src="/Vector.png" 
            alt="close" 
            className="absolute right-4 cursor-pointer"
            width={13.13} 
            height={13.13}
            onClick={visible}
            />
        </div>
        )}
        </>
    )
}