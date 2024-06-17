'use client'
import { motion } from 'framer-motion'
import banner from '../assets/connectbanner.jpg'
import Image from "next/image"
import { FormEvent, useState , useEffect} from 'react'
import Confetti from 'react-confetti'
import { useRouter } from 'next/navigation'

export default function Connect() {
    const router = useRouter()
    const [isSubmitted, setSubmitted] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(5); // Initial countdown timer value
    const [showRedirectMessage, setShowRedirectMessage] = useState(false);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [site, setSite] = useState('')
    const [message, setMessage] = useState('')


    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (showRedirectMessage) {
          intervalId = setInterval(() => {
            setRedirectTimer((prevTimer) => prevTimer - 1);
          }, 1000); // Update timer every second
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [showRedirectMessage]);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/connect', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                        body: JSON.stringify({
                            firstname, lastname, email, phone, site, message,
                        }),
            });
            if (res.status === 200) {
                setSubmitted(true);
                setShowRedirectMessage(true);
                setTimeout(() => {
                  setShowRedirectMessage(false);
                  router.push('/');
                }, redirectTimer * 1000); // Redirect after the dynamic timer value in seconds
              } else {
                console.error('Failed to submit:', res.statusText);
              }
            } catch(err: any) {
              console.error('Err', err)
            }
        }
          
          return isSubmitted ? (
            <div className='flex flex-col gap-4'>
              <h1
                className="text-center font-ponjoung font-semibold text-3xl
              "
              >
                Thank you for your message!
              </h1>
              <Confetti />
              {showRedirectMessage && (
                <p className="text-center text-sm mt-4 text-gray-600">
                    Redirecting in {redirectTimer} seconds...
                </p>
                )}
            </div>
          ) : (
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
                            <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5 max-w-4xl w-full">
                                <div className="border-t-[1px] col-span-2 mb-7 border-black/30 flex flex-col justify-center items-center"></div>
                                    <div className='flex col-span-2 md:col-span-1 flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>First name <span className=' text-black/30 text-xs'>(required)</span></p>
                                        <input value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            type="text" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2' />
                                    </div>
                                    <div className='flex col-span-2 md:col-span-1 flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>Last name</p>
                                        <input
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            type="text" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2' />
                                    </div>
                                    <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>Email <span className=' text-black/30 text-xs'>(required)</span></p>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2' />
                                    </div>
                                    <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>Website</p>
                                        <div className='w-full flex items-center bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2 gap-2'>
                                            <p className='text-black/50 tracking-widest'>https://</p>
                                            <input
                                                value={site}
                                                onChange={(e) => setSite(e.target.value)}
                                                type="text" className=' bg-transparent focus:outline-none text-sm leading-loose text-black tracking-widest w-full' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>Phone <span className=' text-black/30 text-xs'>(required)</span></p>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="number" className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2' />
                                    </div>
                                    <div className='flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro'>
                                        <p className='text-black/50 tracking-wider'>Message</p>
                                        <textarea
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            name='message' rows={3} className='bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2' />
                                    </div>
                                    <div className='flex justify-center items-center col-span-2 font-haboro'>
                                        <button type='submit' className='py-3 px-14 text-sm hover:bg-black bg-black/80 transition-all duration-200 text-white'>SUBMIT</button>
                                    </div>
                                </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
