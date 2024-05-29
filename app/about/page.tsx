import Image from "next/image"
import leftphoto from "../assets/leftphoto.jpeg"
import rightphoto from "../assets/rightphoto.jpeg"

export default function Aboutus() {
    return (
        <div className="bg-white text-[#222222] flex flex-col justify-center items-start px-4 max-w-7xl mx-auto">
            <div className="md:py-24 py-12 flex flex-col gap-6">
                <h2 className="text-black font-ponjoung font-semibold text-2xl md:text-lg 2xl:text-2xl">Philosophy </h2>
                <p className="font-haboro leading-loose text-black/40 tracking-widest">A plausible inspiration for the Legend of the Phoenix, the exquisite flamingo emanates functionality by standing on one leg, making it a symbol of beauty and balance. Late November marks the return of the unique bird to Bombay each year. It is impacted by various cultures and experiences from around the world, but retains its original style. Taking a cue from this remarkable bird, the brand Flamingo interacts with the world surrounding it and explores innovative ideas to create a lifestyle that fits you. A seed of thought lends an idea that helps a space or product come alive. It seeps into your subconscious and transforms your experience within it. The outcome helps us portray the inward significance of things, rather than restrict its effect to outward appearances.</p>
            </div>
            <div className="border-t-[1px] w-full border-black/30" />
            <div className="md:py-36 py-12 flex flex-col gap-8 justify-between w-full">
            <h2 className="text-black font-ponjoung font-semibold text-2xl md:text-lg 2xl:text-2xl">About </h2>
                <div className="flex gap-8 flex-col md:flex-row justify-between w-full">
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <Image className="justify-end items-end md:h-[60vw] h-full right-0 object-cover" src={leftphoto} alt="photo" height={2400} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                        <h3 className="mt-4 text-base md:text-sm 2xl:text-xl font-ponjoung">ESHA PANDYA-CHOKSI</h3>
                        <p className="font-haboro leading-loose text-black/40 tracking-widest">Before taking a plunge into the creative side, Esha Pandya-Choksi graduated with a BSc in Finance from The McIntire School of Commerce, University of Virginia, USA&apos;s top ranking public university. Her budding love for architecture, propelled her to take an architectural history elective in the university&apos;s architecture school, and serve as an architectural tour guide for the university campus, a UNESCO world heritage site. Post her studies, she worked in the Financial Services Advisory Practice at Ernst & Young in New York, before returning to her family&apos;s business, Kaishar Interiors, one of India&apos;s premier interior fit-out contracting companies. Here she rekindled her passion for spatial design, and enrolled into India&apos;s top ranking Rachana Sansad School of Interior Design, where she graduated at the head of her class. In 2011, she founded Flamingo Interiors with Aashni Pandya. Esha is also a visiting professor at Rachana Sansad School of Interior Design.</p>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <Image className="justify-end items-end md:h-[60vw] h-full right-0 object-cover" src={rightphoto} alt="photo" height={2400} width={1400} sizes="(max-width: 640px) 100vw,(max-width: 1200px) 75vw, 50vw" />
                        <h3 className="mt-4 text-base md:text-sm 2xl:text-xl font-ponjoung">AASHNI PANDYA-KUMAR</h3>
                        <p className="font-haboro leading-loose text-black/40 tracking-widest">Aashni Pandya graduated at the head of her class from Academic Interior Design at Florence Design Academy, ranked 1st amongst the best Interior Design schools in the world. During her undergraduate studies in Finance and Business Management at H.R. College of Commerce and Economics, she started her first job at Harvard Business School. Her interest in the creative field was developed while she worked at the school as a Research Associate on a paper titled &ldquo;Introduction of Fashion Journalism in India&ldquo;. Post a short course in design marketing at Istituto Marangoni, London, she returned to pursue a freelance job at Vogue. After working at the magazine as a freelance photo editor in the Art Department, she moved to a French fashion luxury magazine, L&apos;Officiel, to become a fashion writer. Her natural affiliation towards creativity drove her to interior design. In 2011, she founded Studio Flamingo with Esha Pandya Choksi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}