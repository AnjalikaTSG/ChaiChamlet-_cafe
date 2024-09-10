import Image from "next/image";
import { RunningText, TitlePage } from "@/components/TypingText";
import Section from "@/components/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="h-screen grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Image
            src="/image/coffee-shop.jpg"
            alt="coffee-shop"
            width={350}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#333131] z-0" />
        <div className="z-50 py-8 px-10 relative flex justify-start items-center">
          <h1 className="absolute top-10 left-10 text-6xl font-bold text-white opacity-10">
            Chai Chalet
          </h1>
          <div>
            <RunningText color="#7d7d7d" align="left" />
            <TitlePage title="About Us" color="#e8e8e8" align="left" />
            <div className="mt-8 text-[#e8e8e8] text-lg font-regular text-justify">
              <p className="opacity-90">
                At Chai Chalet, nestled in the vibrant heart of Sri Lanka, we’re dedicated to providing a unique coffee experience that delights the senses. Our café combines the rich aroma of expertly brewed coffee with a warm, inviting atmosphere, creating the perfect escape from the hustle and bustle of daily life. From our artisanal coffee blends to our delectable desserts, every element is crafted with care to ensure a memorable visit. Whether you're seeking a relaxing retreat or a lively spot to meet friends, Chai Chalet is your destination for exceptional coffee and great company.
              </p>
              <div className="mt-6 pt-4 border-t border-[#7d7d7d] text-[#e8e8e8] text-lg font-medium">
                <p className="mb-2">
                  <span className="font-bold">Open Hours:</span> 9am-6pm Mon, Wed-Sun
                </p>
                <p>
                  <span className="font-bold">Closed:</span> Tue
                </p>
              </div>
              <div className="mt-8 relative">
                <div className="relative overflow-hidden w-full h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12244.168049764235!2d79.96185679222705!3d6.927657908220863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25f3f4e8b7d67%3A0x9f6f1a4b3c42f4f1!2sThe%20Coffee%20Bean%20%26%20Tea%20Leaf!5e0!3m2!1sen!2slk!4v1671466366134!5m2!1sen!2slk"
                    width="600"
                    height="450"
                    style={{
                      border: 0,
                      transition: 'transform 0.3s ease',
                      transform: 'scale(1)',
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    title="The Coffee Bean & Tea Leaf Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
