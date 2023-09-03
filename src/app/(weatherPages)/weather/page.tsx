import SearchLocation from "@/components/searchLocation"
import CurrentWeather from "@/components/weathers/currentweather"

export default async function WeatherHome() {


    // fetch the location coordinates of the current user
    // revalidate only once a day


    const res = await fetch(`${process.env.NEXT_PUBLIC_CURRENT_USER_LOCATION_BASE}`, {
        next: { revalidate: 86400 }
    })

    const data = await res.json()


    return (
        <div className="lg:container mx-auto lg:px-52">
            <div className="mt-6">
                <SearchLocation />
            </div>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-6 text-white">
                <div className="">
                    <CurrentWeather data={data} />
                    <div>4 day forecast</div>
                    <div>others forcast</div>
                </div>

                <div>
                    5 day day forecast
                </div>
            </div>
        </div>

    )
}