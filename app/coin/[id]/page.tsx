import Image from 'next/image';
import React from 'react';


const page = async ({ params }: any) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
    const data = await res.json()
    return (

        <div className='flex flex-col items-center gap-3 justify-center mt-[100px]'>
            <Image src={data.image.large} alt="coin image" width={100} height={100} style={{
                maxWidth: "100%",
                height: "100%",
            }}
                placeholder="blur"
                blurDataURL="/spinner.svg" />
            <h1 className='text-[25px] font-black'>{data.name}</h1>
            <p>Market Cap Rank: {data.market_cap_rank}</p>
            <p>Current Price: $ {data.market_data.current_price.usd}</p>
        </div >
    )
}

export default page