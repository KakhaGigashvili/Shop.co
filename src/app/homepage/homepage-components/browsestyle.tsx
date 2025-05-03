import styles from '../../styles.module.scss'
import Image from "next/image"

export default () => {
 return(
    <>
    <div className='flex justify-center tiem-center'>
    <div className='w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px] mt-[80px] ml-[100px] mr-[100px]'>

        <h2 className={`${styles.integral} text-center font-bold text-5xl mt-[72px]`}>BROWSE BY DRESS STYLE</h2>
        <div className='mt-[64px] flex justify center'>
        <Image src='/image/clothes/casual.png' width={407} height={289}
        alt={'casual'} className='mr-[20px] ml-[64px]'/>
        <Image src='/image/clothes/formal.png' width={600} height={289}
        alt={'formal'} className='mr-[64px]'/>
        </div>

        <div className='mt-[20px] flex justify center'>
        <Image src='/image/clothes/party.png' width={600} height={289}
        alt={'casual'} className='mr-[20px] ml-[64px]'/>
        <Image src='/image/clothes/gym.png' width={407} height={289}
        alt={'formal'} className='mr-[64px]'/>
        </div>
    </div>
    </div>
    </>
 )
}
