import { Ourmenu } from "@/constant";
import Section from "@/components/Section";
import CoffeeCard from "@/components/CoffeeCard";
import { RunningText, TitlePage } from "@/components/TypingText";

import { useState } from "react";

const OurMenu = () => {
  const [active, setActive] = useState("coffee3");

  return (
    <Section id="menu">
      <RunningText />
      <TitlePage title="Our main menus" />

      {/* Responsive Flexbox for Coffee Cards */}
      <div className="mt-[50px] flex flex-wrap justify-center gap-4 sm:gap-2 min-h-[70vh]">
        {Ourmenu.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            {...coffee}
            active={active}
            handleClick={setActive}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]" // Responsive card widths
          />
        ))}
      </div>
    </Section>
  );
};

export default OurMenu;
