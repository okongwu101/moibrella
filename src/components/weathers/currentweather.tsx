'use client'

import { selectedLatitudeAtom, selectedLongitudeAtom } from "@/lib/atoms"
import { usePressureUnit, useTemperatureUnit, useWindSpeedUnit } from "@/lib/hooks"
import { CurrentWeatherInterface } from "@/lib/interfaces"
import { Avatar } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { IPDataInterface } from "@/lib/ipDataInterface"


export default function CurrentWeather( { ipData } : { ipData: IPDataInterface}) {


    const [selectedLat,] = useAtom(selectedLatitudeAtom)
    const [selectedLon,] = useAtom(selectedLongitudeAtom)

    // fetched longitude and latitude of current user location
    const fetchedLatitude = ipData.latitude
    const fetchedLongitude = ipData.longitude

    /*
        Fetch the current weather of the selected location
        On first app load, fetch is done using the current user location.
        If a location is selected by the user, the fetch is done with that location.

    */

    const { data: currentWeather } = useQuery<CurrentWeatherInterface>({
        queryKey: [`${process.env.NEXT_PUBLIC_CURRENT_WEATHER_BASE}lat=${selectedLat !== "" ? selectedLat : fetchedLatitude}&lon=${selectedLon !== "" ? selectedLon : fetchedLongitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`],
        enabled: fetchedLatitude !== 0
    })


    const mainTemperature = useTemperatureUnit(currentWeather?.main.temp)
    const feelsLikeTemperature = useTemperatureUnit(currentWeather?.main.feels_like)
    const windSpeed = useWindSpeedUnit(currentWeather?.wind.speed)
    const atmPressure = usePressureUnit(currentWeather?.main.grnd_level)

    return (
        <div>
            {
                currentWeather &&
                <div className="flex flex-row justify-between items-center mx-6  rounded-lg px-4 mt-6 py-4">
                    <div>
                        <div className="text-3xl font-semibold mb-4 underline underline-offset-8">
                            {currentWeather?.name}
                        </div>
                        <div className="flex flex-row items-baseline gap-2">
                            <div className="text-sm lg:text-base font-semibold">{currentWeather?.weather[0].main}</div>
                            <div className="font-mono text-xs font-semibold">{`( ${currentWeather?.weather[0].description} )`}</div>
                        </div>
                    </div>

                    <div>
                        <Avatar
                            src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`}
                            size={100}
                            radius="lg"
                        />

                    </div>
                </div>

            }



            {
                currentWeather &&
                <div className=" rounded-lg py-4 px-4 mx-10 flex flex-col gap-y-4 bg-zinc-600">
                    <div className="flex flex-row justify-between ">
                        <div className="flex flex-col gap-y-2">
                            <div className="text-xs lg:text-base">Temp</div>
                            <div className="font-mono text-xs font-semibold">{mainTemperature.temp} {mainTemperature.unit}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-xs lg:text-base">Humidity</div>
                            <div className="font-mono text-xs font-semibold">{currentWeather.main.humidity} %</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-xs lg:text-base">Cloudiness</div>
                            <div className="font-mono text-xs font-semibold">{currentWeather.clouds.all} %</div>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between ">
                        <div className="flex flex-col gap-2">
                            <div className="text-xs lg:text-base">Feel-like</div>
                            <div className="font-mono text-xs font-semibold">{feelsLikeTemperature.temp} {feelsLikeTemperature.unit}</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-xs lg:text-base">Atm. pressure</div>
                            <div className="font-mono text-xs font-semibold">{atmPressure.pressure} {atmPressure.unit}</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-xs lg:text-base">Visibility</div>
                            <div className="font-mono text-xs font-semibold">{currentWeather.visibility} m</div>
                        </div>

                    </div>
                </div>

            }


        </div>
    )
}