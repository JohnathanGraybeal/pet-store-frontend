import { Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import { CardItem } from "./CardItem";

interface CardProps {
  data;
  loading;
  error;
}
export const Card: React.FC<CardProps> = ({ data, loading, error }) => {
  let type;

  if (data?.breedCategory) {
    type = "animal";
  }
  if (loading) {
    return (
      <Skeleton isLoaded={false}>
        <CardItem data={data} type={type} loaded={loading} />
      </Skeleton>
    );
  } else {
    return <CardItem data={data} type={type} loaded={loading} />;
  }
};
