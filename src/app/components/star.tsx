import Image from "next/image"

type Props ={
    count: number
}

export default (props:Props) => {
 
    const fullStars = Math.floor(props.count);     
    const hasHalfStar = props.count % 1 >= 0.5; 
  
    const fullStarsArray = Array.from({ length: fullStars });
    return(
        
          <div className="flex justify-start items-center gap-1">
            {fullStarsArray.map((_, i) => (
              <Image key={`full-${i}`} src="/image/star 1.png" alt="star" width={18} height={18} />
            ))}
      
            {hasHalfStar && (
              <Image src={'/image/star 5.png'} alt={'star'} width={8} height={16} />
            )}
          </div>
    )
}