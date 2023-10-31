import { useState } from 'react'

import img0 from '../images/unicorn-0.png'
import img1 from '../images/unicorn-1.png'
import img2 from '../images/unicorn-2.png'
import img3 from '../images/unicorn-3.png'

const images = [img0, img1, img2, img3]

function Unicorn() {

    const [inflation, setInflation] = useState(0)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setInflation((inflation) => inflation < 3 ? inflation + 1 : 0)
    }
    
    return (
        <img src={images[inflation]} onClick={handleClick} alt="picture of a fancy horse"/>
    )
}

export default Unicorn