import dynamic from "next/dynamic";
import React from "react";
import { Skeleton } from "@chakra-ui/react";

interface CardItemProps {
  data;
  type: string;
  loaded: boolean;
}
//these will only be imported when they are used to improve performance since these are both heavy files
const AnimalCardItem = dynamic(() => import("./AnimalCardItem"));
const MerchandiseCardItem = dynamic(() => import("./MerchandiseCardItem"));

export const CardItem: React.FC<CardItemProps> = ({ data, type, loaded }) => {
  if (type === "animal") {
    return <AnimalCardItem data={data} />;
  }
  return <MerchandiseCardItem data={data} />;
};
