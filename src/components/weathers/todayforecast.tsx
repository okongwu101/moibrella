'use client'

import { selectedLatitudeAtom, selectedLongitudeAtom } from "@/lib/atoms"
import { ForeCastWeatherInterface } from "@/lib/interfaces/forecastWeatherInterface"
import { IPDataInterface } from "@/lib/interfaces/ipDataInterface"
import { Avatar } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { useAtom } from "jotai"

export default function TodayForeCast() {
    const [selectedLat,] = useAtom(selectedLatitudeAtom)
    const [selectedLon,] = useAtom(selectedLongitudeAtom)


    // fetched longitude and latitude of current user location
    const { data: coordinates } = useQuery<IPDataInterface>({
        queryKey: [`https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IPDATA_API_KEY}`],
    })

    const fetchedLatitude = coordinates?.latitude
    const fetchedLongitude = coordinates?.longitude


    /*
        Fetch the current weather of the selected location
        On first app load, fetch is done using the current user location.
        If a location is selected by the user, the fetch is done with that location.

    */

    const { data: foreCastWeather } = useQuery<ForeCastWeatherInterface>({
        queryKey: [`${process.env.NEXT_PUBLIC_5_DAY_3_HRLY_WEATHER_FORECAST_BASE}lat=${selectedLat !== "" ? selectedLat : fetchedLatitude}&lon=${selectedLon !== "" ? selectedLon : fetchedLongitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`],
        enabled: fetchedLatitude !== undefined
    })

    /*
        filter all entries for today.
        i.e. get all entries whose date falls within today
    */

    const todayWeatherForeCast = foreCastWeather?.list.filter((f) => {
        return dayjs(f.dt_txt).format('MMM D') === dayjs(new Date()).format('MMM D')
    })

    

    return (
        <div className="my-6">

            <div className="mx-12 text-lg font-semibold mb-4 underline underline-offset-8">
                Forecast
            </div>
            <div className=" rounded-lg py-4 px-4 mx-10  bg-zinc-600 my-4">

                <div className="text-base font-semibold mb-6">
                    Today
                </div>
                <div className="grid grid-cols-8 gap-x-4 gap-y-6 ">

                    {
                        todayWeatherForeCast?.map((t) => (
                            <div key={t.dt} className="col-span-4 lg:col-span-2 border rounded-lg">

                                <div className="flex flex-col items-center justify-center">
                                    <div className="font-mono text-xs font-semibold">
                                        {
                                            dayjs(t.dt_txt).format('h:mm A')
                                        }
                                    </div>

                                    <Avatar
                                        src={`https://openweathermap.org/img/wn/${t?.weather[0].icon}@2x.png`}
                                        size={70}
                                        radius="lg"
                                    />
                                    <div className="font-mono text-xs">{t.weather[0].description}</div>
                                </div>

                                

                            </div>
                        ))
                    }

                </div>

            </div>
            
        </div>
        
    )
}