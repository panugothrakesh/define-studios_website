'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Banner from '../../assets/architecturebanner.jpeg'
import Link from "next/link"
import arc1 from "../../assets/arc1.jpeg"
import arc2 from "../../assets/arc2.jpg"
import arc3 from "../../assets/arc3.jpeg"
import arc4 from "../../assets/arc4.jpeg"
import arc5 from "../../assets/arc5.jpg"

export default function Architecture() {
    return (
        <>
            <div className="bg-white text-[#222222] flex flex-col justify-center items-center mx-auto w-screen md:pt-0 pt-[84px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01] }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: .9 }
                    }}
                >
                    <Image
                        src={Banner}
                        height={3200} width={1800} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"
                        className="w-screen md:h-full h-[160vw] object-cover"
                        alt="photo"
                    />
                </motion.div>
                <div className="flex flex-col gap-24">
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-between w-screen md:px-24 pt-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0  pr-6 ld:pr-0">
                        <div className="flex md:flex-col gap-2 flex-col items-center  md:items-start">
                            <div className="text-lg 2xl:text-2xl flex items-center md:items-start flex-col  gap-2 font-ponjoung">
                            <h3 className=" text-md md:text-sm 2xl:text-xl font-ebgaramond hidden md:flex">01</h3>
                                <div className="flex gap-2 md:hidden">
                                    <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">01</h3>
                                </div>
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">THE HOUSE BY THE SEA</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={arc1} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={arc2} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                    <div className="right flex flex-col md:justify-center w-full items-center pb-5 md:pb-0  pl-6 ld:pl-0 md:items-start">
                        <div className="flex md:flex-col gap-2 flex-col items-center  md:items-start">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">02</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">THE BOMBAY SPECIAL APARTMENT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-evenly w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0  pr-6 ld:pr-0">
                        <div className="flex md:flex-col gap-2 flex-col items-center  md:items-start">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">03</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">THE PENTHOUSE PROJECT</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={arc3} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                    <div className="right flex justify-start w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={arc4} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                    <div className="right flex flex-col md:justify-center w-full items-center pb-5 md:pb-0  pl-6 ld:pl-0 md:items-start">
                        <div className="flex md:flex-col gap-2 flex-col items-center  md:items-start">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">04</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">THE MALABAR APARTMENT</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: .8 }
                }}
                animate={{ opacity: 1 }}
                >
                <div className="lefttt flex flex-col md:flex-row justify-evenly w-screen md:px-24">
                    <div className="left flex flex-col w-full md:justify-center md:items-end items-center pb-5 md:pb-0  pr-6 ld:pr-0">
                        <div className="flex md:flex-col gap-2 flex-col items-center  md:items-start">
                            <h3 className=" text-base md:text-sm 2xl:text-xl font-ebgaramond">05</h3>
                            <div className="text-lg 2xl:text-2xl flex flex-col gap-2 font-ponjoung">
                                <p><Link href={""} className="transition-all duration-100 hover:underline hover:underline-offset-2">THE COLONIAL BUNGALOW</Link> </p>
                            </div>
                        </div>
                    </div>
                    <div className="right flex justify-end w-full">
                        <Image className="justify-end items-end md:h-[56vw] h-[160vw] right-0 md:w-[38vw] w-full object-cover" src={arc5} alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"/>
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </>
    )
}