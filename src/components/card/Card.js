import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="m-8 flex w-[450px] flex-col gap-2 rounded-md bg-darkgray text-lightbluetext">
      <div>
        <Image height={153} width={450} src="/card_image.png" />
      </div>
      <div className="p-3 ">
        <div className="flex flex-row ">
          <div>
            <Image height={24} width={24} src="/sprout.png" />
          </div>

          <div>
            <h3>Environmental Causes</h3>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white pt-4">Clean Alappuzha Beach</h1>

        <h2 className="font-bold">Spectrum Softech</h2>

        <div>
          <p className="text-xs">
            Alappuzha Beach is one of the most popular tourist destinations in
            KeralIndia However beach is becoming increasingly polluted with
            plastic waste
          </p>
        </div>

        <div className="flex flex-row justify-between pt-4">
          <div className="flex flex-col">
            <p className="text-white">0.005</p>
            <p>out of 0.25</p>
          </div>

          <div className="flex flex-col">
            <p className="text-white">34</p>
            <p>days left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
