"use client";

import { PresentDetail } from "@/components/PresentDetail";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../layout";
import { NFT_CONTRACT } from "@/lib/web3.config";

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
    chargeRatio,
    setChargeRatio,
  } = useContext(AppContext);
  const [presentInfo, setPresentInfo] = useState();

  useEffect(() => {
    setPageUser(pathname.substring(6, 48));
  }, []);

  useEffect(() => {
    // setPresentNum(Number(pathname.substring(57, pathname.legnth)));
    setPresentInfo(presents[presentNum - 1]);
  }, [presents]);

  return (
    <>
      <PresentDetail
        pathname={pathname}
        account={account}
        pageUser={pageUser}
        user={user}
        presents={presents}
        presentNum={presentNum}
        setPresentNum={setPresentNum}
        presentInfo={presentInfo}
        chargeRatio={chargeRatio}
        setChargeRatio={setChargeRatio}
        tBalance={tBalance}
        setTBalance={setTBalance}
      />
    </>
  );
};
export default Present;
