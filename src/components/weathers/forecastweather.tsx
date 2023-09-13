'use client'

import { selectedLatitudeAtom, selectedLongitudeAtom } from "@/lib/atoms"
import { ForeCastWeatherInterface } from "@/lib/interfaces/forecastWeatherInterface"
import { IPDataInterface } from "@/lib/interfaces/ipDataInterface"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"
import TodayForeCast from "./todayforecast"
import TomorrowForeCast from "./tomorrowforecast"


export default function ForeCastWeather( ) {
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

    const { data: currentWeather } = useQuery<ForeCastWeatherInterface>({
        queryKey: [`${process.env.NEXT_PUBLIC_5_DAY_3_HRLY_WEATHER_FORECAST_BASE}lat=${selectedLat !== "" ? selectedLat : fetchedLatitude}&lon=${selectedLon !== "" ? selectedLon : fetchedLongitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`],
        enabled: fetchedLatitude !== undefined
    })

  



    return(
        <div>

            <TodayForeCast />
            <TomorrowForeCast />

        </div>
    )
}