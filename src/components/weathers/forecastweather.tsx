'use client'

import { selectedLatitudeAtom, selectedLongitudeAtom, fetchedLatitudeAtom, fetchedLongitudeAtom } from "@/lib/atoms"
import { ForeCastWeatherInterface } from "@/lib/forecastWeatherInterface"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect } from "react"


export default function ForeCastWeather() {
    const [selectedLat,] = useAtom(selectedLatitudeAtom)
    const [selectedLon,] = useAtom(selectedLongitudeAtom)

    const [fetchedLatitude, setFetchedLatitude] = useAtom(fetchedLatitudeAtom)
    const [fetchedLongitude, setFetchedLongitude] = useAtom(fetchedLongitudeAtom)


    useEffect(() => {
        if ("geolocation" in navigator) {
            const options = {
                enableHighAccuracy: true,
                maximumAge: 0
            }
            navigator.geolocation.getCurrentPosition(function (position) {
                setFetchedLongitude(position.coords.longitude)
                setFetchedLatitude(position.coords.latitude)
            }, function (error) {

            }, options);
        }

    }, [setFetchedLatitude, setFetchedLongitude])


    /*
        Fetch the current weather of the selected location
        On first app load, fetch is done using the current user location.
        If a location is selected by the user, the fetch is done with that location.

    */

    const { data: currentWeather } = useQuery<ForeCastWeatherInterface>({
        queryKey: [`${process.env.NEXT_PUBLIC_5_DAY_3_HRLY_WEATHER_FORECAST_BASE}lat=${selectedLat !== "" ? selectedLat : fetchedLatitude}&lon=${selectedLon !== "" ? selectedLon : fetchedLongitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}`],
        enabled: fetchedLatitude !== 0
    })

    console.log('four date forecast', currentWeather)



    return(
        <div>

        </div>
    )
}