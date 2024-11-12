"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const REFERRER_KEY = "referrer";

export const ReferrerTracker = () => {
  const params = useSearchParams();

  const currentReferrer =
    params.get("ref") ??
    params.get("REF") ??
    params.get("UTM_SOURCE") ??
    params.get("utm_source");

  const referrers: Record<string, number> = JSON.parse(
    typeof localStorage !== "undefined"
      ? (localStorage.getItem(REFERRER_KEY) ?? "{}")
      : "{}",
  );

  useEffect(() => {
    if (
      typeof localStorage !== "undefined" &&
      currentReferrer &&
      !Array.isArray(currentReferrer)
    ) {
      localStorage.setItem(
        REFERRER_KEY,
        JSON.stringify({
          ...referrers,
          [currentReferrer]: new Date().getTime(),
        }),
      );
    }
  }, [currentReferrer, referrers]);

  return null;
};
