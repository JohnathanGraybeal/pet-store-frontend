import useSWRInfinite from "swr/infinite";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://localhost:5001/api";

export const usePaginateItems = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const PAGE_LIMIT = 10;

  const { data, error, isValidating, size, setSize } = useSWRInfinite(
    (index) => `${url}?page=${index + 1}&limit=${PAGE_LIMIT}`,
    fetcher,
    { shouldRetryOnError: false }
  );
  const items = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);
  const isRefreshing = isValidating && data && data.length == size;

  return {
    items,
    error,
    isValidating,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
    isRefreshing,
  };
};
