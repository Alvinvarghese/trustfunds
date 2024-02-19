import React from "react";
import Image from "next/image";
import Link from "next/link";
import { daysLeft } from "@/lib/utils";
const Card = () => {
  const data = {
    _id: "65c893a37d20eae3e616d140",
    name: "Alvin Varghese",
    title: "Amazon River",
    story: [
      "The Amazon River is not only the largest river in the world by discharge volume but also plays a vital role in maintaining the ecological balance of our planet. Its significance extends far beyond its massive size and awe-inspiring beauty. Preserving the Amazon River is imperative for several reasons.",
      "Firstly, the Amazon Rainforest, through which the river flows, is often referred to as the \"lungs of the Earth\" because it produces a significant portion of the world's oxygen. The lush vegetation absorbs carbon dioxide, mitigating climate change and helping to regulate the Earth's temperature. By safeguarding the Amazon River, we are protecting this crucial carbon sink and preserving the biodiversity it supports.",
    ],
    goal: 0.75,
    endDate: "2024-02-28",
    image:
      "https://firebasestorage.googleapis.com/v0/b/trustfundsweb.appspot.com/o/images%2Ftrustfunds_SjxaBQ_Screenshot_from_2024-02-10_22-25-04.png?alt=media&token=49998f45-d735-46a1-b8ff-cd9f8a7bfed5",
    creator: "65c0c40d7cedf8a9c5e0300c",
    causeType: "Other",
    __v: 0,
  };
  if (data._id)
    return (
      <Link
        href={`/campaigns/${data._id}`}
        className="hover:bg-darkgrayhover flex w-[400px] cursor-pointer flex-col gap-2 overflow-hidden rounded-md bg-darkgray text-lightbluetext duration-300 ease-in-out"
      >
        <div className="h-[153px] overflow-hidden">
          <Image height={153} width={450} src={data.image} alt={data.title} />
        </div>
        <div className="p-3 ">
          <div className="flex flex-row ">
            <div>
              <Image height={24} width={24} src="/sprout.png" alt="cause" />
            </div>

            <div>
              <h3>{data.causeType}</h3>
            </div>
          </div>

          <h1 className="pt-4 text-2xl font-bold text-white">{data.title}</h1>

          <h2 className="font-bold">{data.name}</h2>

          <div>
            {data.story.map((para, index) => {
              <p className="text-xs" key={index}>
                {para}
              </p>;
            })}
          </div>

          <div className="flex flex-row justify-between pt-4">
            <div className="flex flex-col">
              <p className="text-white">Goal</p>
              <p>{data.goal}</p>
            </div>

            <div className="flex flex-col">
              <p className="text-right text-white">
                {daysLeft([data.endDate])}
              </p>
              <p>days left</p>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Card;
