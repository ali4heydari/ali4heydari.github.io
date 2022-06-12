import { useQuery } from "react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { defaultQueryFn } from "../lib/defaultQueryFn";

const useMasterQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey> = defaultQueryFn,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TData, TError> => {
  const globalOption = {
    // global options for all queries
    ...options,
  };

  return useQuery(queryKey, queryFn, globalOption);
};

export default useMasterQuery;
