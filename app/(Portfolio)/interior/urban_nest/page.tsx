'use client'

import React from "react"
import Balancer from "react-wrap-balancer"
import Image from 'next/image';

export default function UrbanNest() {
    return (
        <>
            <div className="bg-white text-[#222222] flex flex-col justify-center items-center mx-auto w-screen md:pt-0 pt-[84px]">
                <div className="text-lg 2xl:text-2xl flex flex-col gap-4 font-ponjoung md:py-24 py-14 items-center justify-center">
                    <p className="text-center leading-8">
                        URBAN NEST &nbsp;&nbsp;|&nbsp;&nbsp; BANER, PUNE
                    </p>
                    <p className="text-center font-haboro text-sm leading-loose text-black/40 tracking-widest md:w-[65%] w-[90%]">
                        <Balancer>
                        This contemporary design concept merges the modern vibe of urban living with the warmth of a cozy home. The design aims to balance functionality with soft, inviting aesthetics, creating a space that feels both stylish and comfortable.
                        </Balancer>
                    </p>
                </div>


                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-screen md:px-12 ">
                    <Image
                        src="/banner.jpg"
                        width={2500}
                        height={1400}
                        className="w-screen md:h-[120vh] object-cover md:col-span-2"
                        alt="photo"
                        sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"
                    />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[70%]" src="/p1.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[10%]" src="/p2.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                    
                    <Image
                        src="/p3.jpg"
                        width={2500}
                        height={1400}
                        className="w-screen md:h-[120vh] object-cover md:col-span-2"
                        alt="photo"
                        sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"
                    />

                    <Image className="md:h-[120vh] h-[80vh] w-full object-cover object-[50%]" src="/p4.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[50%]" src="/p5.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                </div>
                {/* <div className="Images">
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
                            src="/banner.jpg"
                            width={2500}
                            height={1400}
                            className="w-screen md:h-full h-[80vw] object-cover"
                            alt="photo"
                            sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw"
                        />
                    </motion.div> */}



                {/* <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01] }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: .9 }
                        }}
                    >
                        <div className="righttt flex flex-col-reverse md:flex-row justify-evenly w-screen md:px-24">
                            <div className="right flex justify-start w-full">
                                <Image className="md:h-[56vw] h-[160vw] md:w-[38vw] w-full object-cover object-[70%]" src="/p1.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                            </div>
                            <div className="right flex justify-start w-full">
                                <Image className="md:h-[56vw] h-[160vw] md:w-[38vw] w-full object-cover object-[70%]" src="/p2.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                            </div>
                        </div>
                    </motion.div> */}



                {/* </div> */}
            </div>
        </>
    )
}