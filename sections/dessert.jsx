import Section from "@/components/Section";
import { RunningText, TitlePage } from "@/components/TypingText";
import DessertCard from "@/components/DessertCard";
import { Desserts } from "@/constant";
import { useState } from "react";

const Dessert = () => {
  const [active, setActive] = useState(null);

  return (
    <Section id="dessert">
      <RunningText />
      <TitlePage title="Desserts & Beverages" />
      <div className="mt-[50px] min-h-[70vh] grid grid-cols-4 gap-[2px] mb-16">
        {Desserts.map((item) => (
          <DessertCard
            key={item.id}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </Section>
  );
};

export default Dessert;
