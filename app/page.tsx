import SearchBar from "@/components/SearchBar"
import Image from "next/image"
import Link from "next/link"

const fetchData = async () => {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  const data = await res.json()
  return await data
}

export default async function Home() {

  const data = await fetchData()

  return (
    <main>
      <div className="flex flex-col gap-6 justify-center items-center mt-[70px] mb-[70px]">
        {data.map((coin: any, idx: number) => (
          <Link key={idx} href={`/coin/${coin.id}`}>
            <div className="w-[360px] md:w-[800px] h-18 bg-[#0F0F0F] opacity-8 p-2 md:p-5 flex items-center justify-between rounded-sm mx-[300px]">
              {/* left side */}
              <div className="flex items-center gap-5">
                <Image src={coin.image} alt="coin image" width={40} height={40} style={{
                  maxWidth: "100%",
                  height: "100%",
                }}
                  placeholder="blur"
                  blurDataURL="/spinner.svg" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-white font-black">{coin.symbol.toUpperCase()}<span className="text-[16px] text-[#767d92]"><sub>/USDT</sub></span></h1>
                  <p className="text-[#767d92]">Vol. {coin.total_volume} M</p>
                </div>
              </div>

              {/* Right side */}
              <div>
                <h1>$ {coin.current_price}</h1>
                <p className="text-[#767d92]">{coin.market_cap}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
