'use client';
import { motion } from 'framer-motion'
import Image from "next/image"
import leftphoto from "../assets/leftphoto.png"
import rightphoto from "../assets/rightphoto.png"

export default function Aboutus() {
    return (
        <div className="bg-white text-[#222222] flex flex-col justify-center items-start px-4 max-w-5xl mx-auto md:pt-0 pt-16">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: .9 }
            }}
            >
            <div className="md:pt-16 md:pb-32 py-12 flex flex-col gap-6">
                <h2 className="text-black font-ponjoung font-semibold text-2xl md:text-lg 2xl:text-2xl">Philosophy </h2>
                <p className="font-haboro text-sm leading-loose text-black/40 tracking-widest">
                DEFINE Studio, a boutique architecture and interior design firm based in Hyderabad, is founded on the principle of people-centric design. With over eight years of experience, founders Srilakshmi and Mayuri champion an aesthetic that harmoniously blends functionality with timeless elegance. Their approach to design is both innovative and experimental, ensuring each project is distinct and reflective of its unique purpose and context.
                <br />
                <br />
                The studio&apos;s methodology involves a rigorous process of brainstorming tailored to each project, allowing for a customized and thoughtful design journey. This meticulous process ensures that every space they create is vibrant, flamboyant, and offers a unique experience. The studio&apos;s dynamic portfolio includes over 25 ongoing projects in Hyderabad, Pune, Goa, and Lonavala, marking DEFINE Studio as a rapidly growing young practice in the design field.
                    </p>
            </div>
            </motion.div>
            <div className="border-t-[1px] w-full border-black/30" />
            <div className="md:py-32 py-12 flex flex-col gap-8 justify-between w-full">
            <h2 className="text-black font-ponjoung font-semibold text-2xl md:text-lg 2xl:text-2xl">About </h2>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: .8, ease: [0, 0.71, 0.2, 1.01]}}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: .9 }
            }}
            >
                <div className="flex gap-8 flex-col md:flex-row justify-between w-full">
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <Image className="justify-end items-end md:h-[45vw] h-full right-0 object-cover" src={leftphoto} alt="photo" height={2400} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                        <h3 className="mt-4 text-base md:text-base 2xl:text-xl font-ponjoung">Mayuri Shinde-Dixit</h3>
                        <p className="font-haboro leading-loose text-black/40 text-sm tracking-widest">Mayuri Shinde-Dixit is a multi-disciplinary designer with extensive experience of 10 years in Architecture and Interior Design. She holds an undergraduate degree in design from Sir JJ School of Architecture in Mumbai and a Master&apos;s degree in Interior Design from Florence Design Academy in Italy. Her education has equipped her with a deep understanding of design, further refined by her experiences studying, traveling, and working across Europe. This international exposure has honed her sharp eye for detail, making Europe an ideal backdrop for her professional evolution in the design field.</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <Image className="justify-end items-end md:h-[45vw] h-full right-0 object-cover" src={rightphoto} alt="photo" height={2400} width={1400} sizes="(max-width: 640px) 50vw,(max-width: 1200px) 75vw, 100vw" />
                        <h3 className="mt-4 text-base md:text-base 2xl:text-xl font-ponjoung">Srilakshmi Kukutlawar</h3>
                        <p className="font-haboro leading-loose text-black/40 text-sm tracking-widest">Srilakshmi Kukutlawar is a dynamic designer with a strong foundation in design, studied at Sir JJ School of Architecture in Mumbai. Her background as an artist adds an extra dimension to her work, allowing her to infuse creativity and artistic flair into every project she undertakes. As an entrepreneurial leader, she brings a unique perspective to her role, overseeing a talented team of designers and contractors. Specializing in high-end residential architecture and interior design projects, she focuses on delivering luxury and quality craftsmanship to her clients. Her blend of artistic vision and leadership skills creates bespoke spaces that exceed expectations.</p>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
    )
}