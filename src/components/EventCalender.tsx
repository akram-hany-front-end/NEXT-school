"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
// TEMPORARY COMPONENT FOR CALENDAR, WILL BE REPLACED WITH A FULL FEATURED CALENDAR LATER
const events = [
  {
    id: 1,
    title: "Event 1",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Event 2",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    title: "Event 3",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet.",
  },
];
const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="felx flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-akram-cyan even:border-t-akram-purple "
            key={event.id}
          >
            <div className="felx items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-400 text-xs">{event.time}</span>
              <p className="mt-2 text-gray-500 text-sm" >{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
