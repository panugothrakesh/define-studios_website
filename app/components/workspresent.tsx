"use client"

import Image from "next/image";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function Presentation(){
    const images = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
        "/image4.jpg",
        "/image5.jpg",
        "/image6.jpg",
    ]
    let [ref, {width}] = useMeasure();

    const xTranslation = useMotionValue(0);
    const xTranslation2 = useMotionValue(0);

    useEffect(()=>{
        let controls;
        let finalPosition = -width / 2 - 8;

        controls = animate(xTranslation, [0, finalPosition],{ease: 'linear', duration: 25, repeat: Infinity, repeatType: 'loop', repeatDelay: 0} )

        return controls.stop
    },[xTranslation, width])
    
    useEffect(()=>{
        let controls;
        let finalPosition = -width / 2 - 8;

        controls = animate(xTranslation2, [finalPosition, 0],{ease: 'linear', duration: 25, repeat: Infinity, repeatType: 'loop', repeatDelay: 0} )

        return controls.stop
    },[xTranslation2, width])


    return (
        <>
            <div className="mx-auto overflow-hidden py-8 flex flex-col gap-4">
                <motion.div className="flex gap-4" ref={ref} style={{x: xTranslation}}>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[0]} alt={images[0]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[1]} alt={images[1]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[2]} alt={images[2]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[4]} alt={images[4]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    {/* 2 */}
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[0]} alt={images[0]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[1]} alt={images[1]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[2]} alt={images[2]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[4]} alt={images[4]} fill style={{objectFit: 'cover'}}/>
                    </div>
                </motion.div>
                <motion.div className="flex gap-4" ref={ref} style={{x: xTranslation2}}>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[3]} alt={images[3]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[4]} alt={images[4]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[5]} alt={images[5]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[1]} alt={images[1]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    {/* 2 */}
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[3]} alt={images[3]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[4]} alt={images[4]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[690px] bg-slate-400 rounded-xl">
                        <Image src={images[5]} alt={images[5]} fill style={{objectFit: 'cover'}}/>
                    </div>
                    <div className="relative overflow-hidden h-[290px] min-w-[390px] bg-slate-400 rounded-xl">
                        <Image src={images[1]} alt={images[1]} fill style={{objectFit: 'cover'}}/>
                    </div>
                </motion.div>
                </div>  
        </>
    )
}