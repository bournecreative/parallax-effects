'use client'
import { useRef } from 'react' 
import { StaticImageData } from "next/image"
import { motion, useScroll, useTransform } from 'framer-motion'
import './parallaxContent.scss'

interface ParallaxContainerProps {
    img: StaticImageData
    heading?: string
    subheading?: string
    children?: JSX.Element
}

interface ParallaxImageProps {
    img: StaticImageData
}

interface ParallaxCopyProps {
    heading?: string
    subheading?: string
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({img, heading, subheading, children}) => {
    return (
        <div>
            <div className="parallax-container">
                <ParallaxImage img={ img }/>
                <ParallaxCopy heading={heading} subheading={subheading} />
            </div>
            { children }
        </div>
    )
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({img}) => {
    const targetRef = useRef(null)
    console.log(img)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.65])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <motion.div
            ref={targetRef}
            className="parallax-image"
            style={{ backgroundImage: `url(${img.src})`, scale}}
            >
            <motion.div
                style={{opacity}}
                className='parallax-image-overlay' />
        </motion.div>
    )
}

const ParallaxCopy: React.FC<ParallaxCopyProps> = ({heading, subheading}) => {

    const targetRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0,1], [250, -250])
    
    return (
        <motion.div
            style={{ y }}
            ref={targetRef}
            className='parallax-copy'>
            <p className='parallax-heading'>{heading}</p>
            <p className='parallax-subheading'>{subheading}</p>
        </motion.div>
    )
}