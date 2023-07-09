"use client";

import { PresentDetail } from "@/components/PresentDetail";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../layout";

const Present = () => {
  const {
    account,
    setAccount,
    tBalance,
    setTBalance,
    pathname,
    user,
    setUser,
    presents,
    setPresents,
    presentNum,
    setPresentNum,
    pageUser,
    setPageUser,
  } = useContext(AppContext);

  useEffect(() => {
    setPageUser(pathname.substring(6, 48));
  }, []);

  return (
    <>
      <PresentDetail
        pathname={pathname}
        account={account}
        pageUser={pageUser}
      />
    </>
  );
};
export default Present;
