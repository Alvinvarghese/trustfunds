import React from "react";
import Image from "next/image";
import Link from "next/link";
import { daysLeft } from "@/lib/utils";
const Card = (props) => {
  const { data } = props;
  if (data._id)
    return (
      <Link
        href={`/campaigns/${data._id}`}
        className="flex w-[400px] cursor-pointer flex-col gap-2 overflow-hidden rounded-md bg-darkgray text-lightbluetext duration-300 ease-in-out hover:bg-darkgrayhover"
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
            {data.story.length > 0 &&
              data.story.map((para, index) => {
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
