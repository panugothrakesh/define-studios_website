'use client';
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer';
import Expanded from './components/expanded_nav';
import Image from 'next/image';
// import photo1 from '../app/assets/photo1.jpeg';
import Left from './assets/main_left.jpg'
import Right from './assets/main_right.jpg'

export default function Home() {
  return (
    <div className="bg-white overflow-hidden text-[#222222] flex flex-col justify-center items-center w-screen md:pt-0 pt-[84px]">
      <motion.div
        className="flex flex-row overflow-hidden h-full"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: .9 }
        }}
      >
        <div className="w-1/2 md:h-full flex justify-center items-center">
        <Image
          src={Left}
          width={1400}
          height={2500}
          className="object-cove h-[80vw]"
          alt="photo"
          />
        </div>
        <div className="w-1/2 md:h-full flex justify-center items-center">
          <Image
            src={Right}
          width={1400}
          height={2500}
          className="object-cover h-[80vw]"
            alt="photo"
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: .5, type: "spring", stiffness: 100 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: .9 }
        }}
        animate={{ opacity: 1 }}
      >
        <p className="text-center font-haboro md:py-24 py-14 tracking-widest leading-loose">
          <Balancer>
            At DEFINE, creations go beyond mere utility; we elevate everyday experiences to extraordinary levels. We create a lifestyle of luxury and beauty that is blended with functionality and technology.
          </Balancer>
        </p>
      </motion.div>
      <Expanded />
    </div>
  );
}
