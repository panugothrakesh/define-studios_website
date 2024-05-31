import Balancer from "react-wrap-balancer";
import Expanded from "./components/expanded_nav";
import Image from "next/image";
import photo1 from "../app/assets/photo1.jpeg"

export default function Home() {
  return (
  <>
    <div className="bg-white text-[#222222] flex flex-col justify-center items-center mx-auto w-full md:pt-0 pt-[84px]">
      <div>
          <Image src={photo1} width={2500} height={1400} className="w-screen md:h-full h-[52vh] object-cover" alt="photo" sizes="(max-width: 640px) 25vw,(max-width: 1200px) 66.66vw, 100vw" />
        </div>
          <p className="text-center font-haboro md:py-24 py-14 tracking-widest leading-loose">
            <Balancer>
                At DEFINE, creations go beyond mere utility; we elevate everyday experiences to extraordinary levels. We create a lifestyle of luxury and beauty that is blended with functionality and technology.
            </Balancer>
          </p>
        <Expanded/>
    </div>
  </>  
  );
}