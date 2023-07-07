//src/components/pre.jsx
import React from "react";
import Image from "next/image";
// import Pre from "./pre";
import og from "open-graph";
async function Preimage() {
    const getOg = () =>
        new Promise((resolve, reject) => {
            const url =
                "https://smartstore.naver.com/kitch_vely/products/6362894748?n_media=27758&n_query=%EC%A7%B1%EA%B5%AC%EC%8A%AC%EB%A6%AC%ED%8D%BC&n_rank=1&n_ad_group=grp-a001-02-000000025399245&n_ad=nad-a001-02-000000173551428&n_campaign_type=2&n_mall_id=ncp_1o9bnv_01&n_mall_pid=6362894748&n_ad_group_type=2&NaPm=ct%3Dlji55n7c%7Cci%3D0zu00033onTy7t4j91l2%7Ctr%3Dpla%7Chk%3Da12c5c6ae882df7cc85b90531384779cf5a97289";
            og(url, function (err, meta) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(meta);
            });
        });

    // const test = await getOg();
    useEffect(() => {
        getOg();
    }, []);
    return (
        <div>
            <p>{test.title}</p>
            <p>{test.site_name}</p>
            <p>{test.description}</p>
            <p>{test.type}</p>

            <Image
                src={test.image.url}
                alt="dfd"
                width={200}
                height={200}
            ></Image>
        </div>
    );
}

export default Preimage;
