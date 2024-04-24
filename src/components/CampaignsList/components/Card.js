import React from "react";
import Image from "next/image";
import Link from "next/link";
import { daysLeft } from "@/lib/utils";
import shortenText from "../utils/shortenText";
const Card = (props) => {
  const { data } = props;
  if (data._id) {
    const link = `${props.users ? "/user/" : "/"}campaigns/${data._id}`;
    return (
      <Link
        href={link}
        className="flex w-[400px] cursor-pointer flex-col gap-2 overflow-hidden rounded-md bg-primary text-lightbluetext duration-300 ease-in-out hover:bg-darkgrayhover"
      >
        <div className="h-[153px] overflow-hidden">
          <Image
            height={153}
            width={450}
            src={data.image}
            alt={data.title}
            priority
          />
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

          <h1 className="py-4 text-xl font-bold leading-tight text-white">
            {shortenText(data.title, 60)}
          </h1>

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
              <p>{data.goal} eth</p>
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
  }
};

export default Card;
