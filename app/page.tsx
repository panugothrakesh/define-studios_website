import Balancer from "react-wrap-balancer";
import Expanded from "./components/expanded_nav";
import Image from "next/image";
import photo1 from "../app/assets/photo1.jpeg"

export default function Home() {
  return (
  <>
    <div className="bg-white text-[#222222] flex flex-col justify-center items-center mx-auto w-full">
      <div>
          <Image src={photo1} width={100} height={100} className="w-screen h-full" alt=" "/>
        </div>
          <p className="text-center font-haboro text-sm py-24 leading-loose tracking-wide">
            <Balancer>
              Flamingo creates a lifestyle of beauty and balance with spaces and products that reflect a blend of <br /> functionality, aesthetics and innovative technology.
            </Balancer>
          </p>
        <Expanded/>
    </div>
  </>  
  );
}