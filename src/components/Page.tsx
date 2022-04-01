import {
  Button,
  Skeleton,
  SkeletonText,
  useAccordionItemState,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";
import { usePaginateItems } from "../Util/usePaginiateItems";

interface PageProps {
  fetchPath: string;
}

const Page: React.FC<PageProps> = ({ fetchPath }) => {
  const {
    items,
    error,
    isValidating,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = usePaginateItems(fetchPath);

  return (
    <Wrap height={"100vh"} paddingTop={10}>
      {items.map((item) => (
        <WrapItem
          key={item.id}
          paddingLeft={10}
          paddingTop={5}
          paddingBottom={5}
        >
          <Card
            key={item.id}
            data={item}
            error={error}
            loading={isValidating}
          />
        </WrapItem>
      ))}
      <Button
        disabled={isLoadingMore || isReachingEnd || error}
        isLoading={isValidating}
        loadingText={
          isLoadingMore
            ? "Loading..."
            : isReachingEnd
            ? "No more animals"
            : "Load more"
        }
        width={"100%"}
        onClick={() => setSize(size + 1)}
      >
        Load More
      </Button>
    </Wrap>
  );
};
export { Page };
