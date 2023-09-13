import SearchLocation from "@/components/searchLocation"
import CurrentWeather from "@/components/weathers/currentweather"
import ForeCastWeather from "@/components/weathers/forecastweather"


export default async function WeatherHome() {



    return (
        <div className="lg:container mx-auto lg:px-52">
            <div className="mt-6">
                <SearchLocation />
            </div>
            <div className="grid grid-col-1 gap-6 text-white">
                <div className="">
                    <CurrentWeather />
                    <ForeCastWeather />
                    
                </div>
            </div>
        </div>

    )
}