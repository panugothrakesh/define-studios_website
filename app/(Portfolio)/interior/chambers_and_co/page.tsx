'use client'

import React from "react"
import Balancer from "react-wrap-balancer"
import Image from 'next/image';

export default function Chambers_and_Co() {
    return (
        <>
            <div className="bg-white text-[#222222] flex flex-col justify-center items-center mx-auto w-screen md:pt-0 pt-[84px]">
                <div className="text-lg 2xl:text-2xl flex flex-col gap-4 font-ponjoung md:py-24 py-14 items-center justify-center">
                    <p className="text-center leading-8">
                        CHAMBERS AND CO. &nbsp;&nbsp;|&nbsp;&nbsp; KOKAPET, HYDERABAD
                    </p>
                    <p className="text-center font-haboro text-sm leading-loose text-black/40 tracking-widest md:w-[65%] w-[90%]">
                        <Balancer>
                            Chambers & Co. embodies a modern luxury design that merges timeless elegance with cutting-edge sophistication, creating an inspiring atmosphere for a high-end law firm. The style centers around clean, strong lines and a muted palette of rich tones like deep charcoal, warm walnut, and matte gold accents. Luxurious materials—such as marble, polished wood, and leather—are used throughout to evoke a sense of permanence and authority. Sleek, tailored furniture is paired with custom cabinetry and built-ins, offering functionality while maintaining an uncluttered look. Statement lighting fixtures, from brass chandeliers to linear pendant lights, add sophistication and focus in key areas. Art pieces and sculptures with understated elegance complement the space, adding personality without overwhelming it. The overall effect is a refined, contemporary space that communicates professionalism, confidence, and subtle luxury.
                        </Balancer>
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-screen md:px-12 ">
                    <Image
                        src="/chambersandco/KO1.jpg"
                        width={2500}
                        height={1400}
                        className="w-screen md:h-[120vh] object-cover md:col-span-2"
                        alt="photo"
                        sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw"
                    />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[70%]" src="/chambersandco/KO2.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[65%]" src="/chambersandco/KO3.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                    
                    <Image
                        src="/chambersandco/KO4.jpg"
                        width={2500}
                        height={1400}
                        className="w-screen md:h-[120vh] object-cover md:col-span-2"
                        alt="photo"
                        sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw"
                    />

                    <Image className="md:h-[120vh] h-[80vh] w-full object-cover object-[50%]" src="/chambersandco/KO5.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[100%]" src="/chambersandco/KO6.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                    
                    <Image className="md:h-[120vh] h-[80vh] w-full object-cover object-[50%]" src="/chambersandco/KO7.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                    <Image className=" md:h-[120vh] h-[80vh] w-full object-cover object-[50%]" src="/chambersandco/KO8.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
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
                            sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw"
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
                                <Image className="md:h-[56vw] h-[160vw] md:w-[38vw] w-full object-cover object-[70%]" src="/p1.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                            </div>
                            <div className="right flex justify-start w-full">
                                <Image className="md:h-[56vw] h-[160vw] md:w-[38vw] w-full object-cover object-[70%]" src="/p2.jpg" alt="photo" height={2600} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                            </div>
                        </div>
                    </motion.div> */}



                {/* </div> */}
            </div>
        </>
    )
}