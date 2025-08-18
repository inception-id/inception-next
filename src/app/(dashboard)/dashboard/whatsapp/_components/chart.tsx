"use client";
import { WhatsappMessagesCount } from "@/lib/api/whatsapp/client";
import { getMonthShortName } from "@/lib/utils";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

type ChartProps = {
  chartData: WhatsappMessagesCount[];
};

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string> & {
  payload?: { payload: WhatsappMessagesCount; value: number }[];
}) => {
  const isVisible = active && payload && payload.length;
  if (isVisible) {
    return (
      <div className="bg-white rounded p-2 text-sm dark:text-background">
        <div className="font-semibold">
          {getMonthShortName(payload[0].payload.month)}{" "}
          {payload[0].payload.year}
        </div>
        <div className="flex items-center gap-1">
          <span className="bg-chart-2 w-2 h-2 rounded" />
          <span>{payload[0].value} messages</span>
        </div>
      </div>
    );
  }
  return <></>;
};

export const Chart = ({ chartData }: ChartProps) => {
  return (
    <div className="w-full h-48 border p-2 rounded lg:h-[50rem]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            height={15}
            className="text-xs"
            tickLine={false}
            tickFormatter={getMonthShortName}
          />
          <YAxis
            dataKey="total_records"
            width={20}
            className="text-xs"
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="total_records"
            fill="hsl(var(--chart-2))"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
