import SearchLocation from "@/components/searchLocation"
import CurrentWeather from "@/components/weathers/currentweather"
import ForeCastWeather from "@/components/weathers/forecastweather"


export default async function WeatherHome() {


    // fetch the user current geo coordinates.
    // cache and revalidate the values every 3 hours
    const res = await fetch(`07c94f53e5d6ef09e364c05bc362677e95b8bb904c2491ec2321cab0${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`, {
        next: { revalidate: 10800 }
    })

    const ipData = await res.json()



    return (
        <div className="lg:container mx-auto lg:px-52">
            <div className="mt-6">
                <SearchLocation />
            </div>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-6 text-white">
                <div className="">
                    <CurrentWeather ipData={ipData} />
                    <ForeCastWeather ipData={ipData} />
                    
                </div>

                <div>
                    5 day day forecast
                </div>
            </div>
        </div>

    )
}