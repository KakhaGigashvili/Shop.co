'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import styles from '../styles.module.scss'

export default () => {

    const [isVisible, setIsVisible] = useState(true);

    const visible = () => {
            setIsVisible(false)
    }

    return(
        <>
        { isVisible && (
            <div className={`${styles.satoshi} ${styles.signup} bg-black text-white justify-center text-center text-sm flex items-center h-[38px]`}>
            Sign up and get 20% off to your first order. <Link href={"/signup"} className="underline ml-1"> Sign Up Now</Link>
            <Image
            src="/image/Vector.png"
            alt="close"
            className={`${styles.vector} absolute right-4 cursor-pointer`}
            width={13.13}
            height={13.13}
            onClick={visible}
            />
        </div>
        )}
        </>
    )
}
