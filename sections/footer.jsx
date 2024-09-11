import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import FooterTitle from "@/components/FooterTitle";
import Section from "@/components/Section";

const Footer = () => {
    const date = new Date();

    return (
        <Section id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                    <FooterTitle>Contact</FooterTitle>
                    <div className="flex items-center text-[#e8e8e8] opacity-90 mt-2">
                        <HiOutlineMail />
                        <p className="ml-2">chaichalet@gmail.com</p>
                    </div>
                    <div className="flex items-center text-[#e8e8e8] opacity-90 mt-2">
                        <HiOutlineLocationMarker />
                        <p className="ml-2">Chai Chalet, Main Street, Awissawella, Sri Lanka</p>
                    </div>
                    <div className="flex items-center text-[#e8e8e8] opacity-90 mt-2">
                        <HiOutlinePhone />
                        <p className="ml-2">+94 75 817 8490</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col mb-6 md:mb-0">
                        <FooterTitle>Social media</FooterTitle>
                        <a href="https://www.instagram.com" className="text-[#e8e8e8] opacity-90 mt-2">Instagram</a>
                        <a href="https://www.facebook.com" className="text-[#e8e8e8] opacity-90 mt-2">Facebook</a>
                        <a href="https://www.tiktok.com" className="text-[#e8e8e8] opacity-90 mt-2">Tiktok</a>
                        <a href="https://www.whatsapp.com" className="text-[#e8e8e8] opacity-90 mt-2">Whatsapp</a>
                    </div>
                    <div className="flex flex-col mb-6 md:mb-0">
                        <FooterTitle>Product</FooterTitle>
                        <a href="/menu" className="text-[#e8e8e8] opacity-90 mt-2">Coffee</a>
                        <a href="/desserts" className="text-[#e8e8e8] opacity-90 mt-2">Desserts</a>
                        <p className="text-[#e8e8e8] opacity-90 mt-2">Beverages</p>
                    </div>
                    <div className="flex flex-col">
                        <FooterTitle>Facility</FooterTitle>
                        <p className="text-[#e8e8e8] opacity-90 mt-2">Wifi</p>
                        <p className="text-[#e8e8e8] opacity-90 mt-2">Comfy place</p>
                        <p className="text-[#e8e8e8] opacity-90 mt-2">Musical instrument</p>
                        <p className="text-[#e8e8e8] opacity-90 mt-2">Custom room</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1.5px] bg-[#e8e8e8] opacity-90 mt-20" />
            <p className="text-[#e8e8e8] opacity-90 text-xs font-light tracking-wider text-center mt-2">&copy;{date.getFullYear()} Chai Chalet. All rights reserved</p>
        </Section>
    );
}

export default Footer;
