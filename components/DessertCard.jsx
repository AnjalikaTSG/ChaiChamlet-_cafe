import { motion } from "framer-motion";
import Image from "next/image";

const DessertCard = ({ id, imgUrl, title, price, active, handleClick }) => {
  return (
    <motion.div
      className={`${
        active === id ? "flex-[10]" : "flex-[2]"
      } relative flex items-center justify-center min-w-[180px] h-[300px] cursor-pointer transition-[flex] ease-in-out duration-700 overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <Image src={imgUrl} alt={title} fill className="rounded-xl object-cover" />
      {active !== id ? (
        <div className="absolute bottom-0 w-full h-16 text-white text-xl font-medium bg-gradient-to-t from-black via-transparent to-transparent">
          <p className="truncate">{title}</p>
        </div>
      ) : (
        <div className="absolute p-4 w-full h-32 bottom-0 left-0 rounded-b-xl bg-[rgba(0,0,0,0.6)] text-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-lg font-medium">{price}</p>
        </div>
      )}
    </motion.div>
  );
};

export default DessertCard;
