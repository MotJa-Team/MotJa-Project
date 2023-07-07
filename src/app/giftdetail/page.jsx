"use client";

import Detail from "@/components/Detail";
import { useContext } from "react";
import { AppContext } from "../layout";

const GiftDetail = () => {
  const { account, setAccount, pathname } = useContext(AppContext);
  console.log(account);

  return (
    <>
      {/* <Detail></Detail> */}
      <div>Detail</div>
    </>
  );
};

export default GiftDetail;
