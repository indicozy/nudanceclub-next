import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

import { useWindowSize } from "react-use";

import { Header } from "./header";

import { Sidebar } from "./sidebar";

export const Layout = ({ children, c }: { children: ReactNode; c: string }) => {
  const router = useRouter();
  const [isRouterLoading, isRouterLoadingSet] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        isRouterLoadingSet(true);
      }
    };
    const handleComplete = () => isRouterLoadingSet(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);
  const { width } = useWindowSize();
  return (
    <>
      <div className="noise"></div>
      <main className={`${c}`}>{children}</main>
    </>
  );
};
