"use client";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 50,
    absent: 50,
  },
  {
    name: "Wed",
    present: 30,
    absent: 70,
  },
  {
    name: "Thu",
    present: 80,
    absent: 20,
  },
  {
    name: "Fri",
    present: 70,
    absent: 30,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <h1 className="text-lg font-semibold">Attendance</h1>
      <Image src="/moreDark.png" alt="icon" width={20} height={20} />
      <BarChart
        style={{
          aspectRatio: 1.618,
        }}
        width={500}
        height={300}
        responsive
        data={data}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
        <XAxis dataKey="name"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
        <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
        <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
        <Legend align="left" verticalAlign="top"  wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
        <Bar
          dataKey="present"
          fill="#FAE27C"
          radius={[10, 10, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="absent"
          fill="#C3EBFA"
          radius={[10, 10, 0, 0]}
                    legendType="circle"

        />
      </BarChart>
    </div>
  );
};

export default AttendanceChart;
