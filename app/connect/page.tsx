'use client'
import {motion} from 'framer-motion'
import banner from '../assets/connectbanner.jpg'
import Image from "next/image"

export default function Connect(){
    return(
        <>
        <div className="flex flex-col items-center justify-center w-screen md:px-24 px-12 gap-14">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: .9 }
        }}
        >
            <div className="top w-screen flex flex-col items-center justify-center mt-24 gap-10">
                <span className=" font-ponjoung">STAY UPDATED</span>
                <div className="border-t-[1px] max-w-4xl w-full border-black/30 flex flex-col justify-center items-center"></div>
                <ul className="flex">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                <div className="md:mx-6 mx-3 h-[30vw] flex justify-center items-center border-2 overflow-hidden">
                    <Image
                        src={banner}
                        width={2500}
                        height={1400}
                        className="w-screen object-cover"
                        alt="photo"
                        sizes="(max-width: 640px) 25vw,(max-width: 1200px) 66.66vw, 100vw"
                    />
                </div>
            </div>
            </motion.div>
            <div className="w-full form flex justify-center items-center">
            <motion.div className='w-full'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: .9 }
            }}
            >
                <div className="top w-full flex flex-col items-center justify-center gap-10">
                    <span className=" font-ponjoung">GET IN TOUCH</span>
                    <div className="grid grid-cols-2 gap-5 max-w-4xl w-full">
                    <div className="border-t-[1px] col-span-2 mb-7 border-black/30 flex flex-col justify-center items-center"></div>
                        <div className='flex flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>First name <span className=' text-black/30 text-xs'>(required)</span></p>
                            <input type="text" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2'/>
                        </div>
                        <div className='flex flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>Last name</p>
                            <input type="text" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2'/>
                        </div>
                        <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>Email <span className=' text-black/30 text-xs'>(required)</span></p>
                            <input type="email" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2'/>
                        </div>
                        <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>Website</p>
                            <div className='w-full flex items-center bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2 gap-2'>
                            <p className='text-black/50 tracking-widest'>https://</p>
                            <input type="text" className=' bg-transparent focus:outline-none text-sm leading-loose text-black tracking-widest w-full'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>Phone <span className=' text-black/30 text-xs'>(required)</span></p>
                            <input type="text" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2'/>
                        </div>
                        <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                            <p className='text-black/50 tracking-wider'>Message</p>
                            <textarea name='message' rows={3} className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2'/>
                        </div>
                        <div className='flex justify-center items-center col-span-2 font-haboro'>
                            <button className='py-3 px-14 text-sm hover:bg-black bg-black/80 transition-all duration-200 text-white'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
        </>
    )
}