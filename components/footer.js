import Image from "next/image";
import logos from "../images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1F1D14]">
        <div className="max-w-[1280px] mx-auto ">
          <div className="flex">
            <Image src={logos} alt="Logo" />
            <h1 className="text-[#fff] opacity-[0.9] font-semibold text-[24px]">
              Sport <br />
              Market
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
