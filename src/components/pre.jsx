"use client";
import Image from "next/image";

function Pre({ test }) {
    console.log(test);
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

export default Pre;
