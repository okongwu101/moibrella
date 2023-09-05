'use client'

import { useAtom } from "jotai"
import { pressureUnitAtom, temperatureUnitAtom, windSpeedUnitAtom } from "./atoms"


export const useTemperatureUnit = (temp: number | undefined) => {
    const [tempUnit,] = useAtom(temperatureUnitAtom)

    let finalTemp: number = 0
    let finalTempUnit: string = ""

    if (temp) {
        switch (tempUnit) {
            case "celcius":
                // finalTemp = (temp - 273.15).toFixed(1);
                finalTemp = (Math.round((temp - 273.15) * 10) ) /10;
                finalTempUnit = "C";
                break;
            case "fahrenheit":
                finalTemp =(Math.round(((temp - 273.15) * 9 / 5 + 32) * 10)) / 10;
                finalTempUnit = "F"
                break;
            default:
                finalTemp = (Math.round((temp) * 10)) / 10;
                finalTempUnit = "K"
        }
    }



    return { temp: finalTemp, unit: finalTempUnit}

}

export const useWindSpeedUnit = (speed: number | undefined) => {
    const [windSpeed,] = useAtom(windSpeedUnitAtom)

    let finalWindSpeed: number = 0
    let windSpeedUnit: string = ""

    if (speed) {
        switch (windSpeed) {
            case "meter/second":
                finalWindSpeed = (Math.round(speed * 10)) / 10;
                windSpeedUnit = "m/s";
                break;
            case "miles/hour":
                finalWindSpeed = (Math.round((speed * 2.23694) * 10)) / 10;
                windSpeedUnit = "mil/hr";
                break;

        }
    }

    return { speed: finalWindSpeed, unit: windSpeedUnit}
}

export const usePressureUnit = (pressure: number | undefined) => {
    const [atmPressure,] = useAtom(pressureUnitAtom)

    let finalPressure: number = 0
    let pressureUnit: string = ""

    if (pressure) {
        switch (atmPressure) {
            case "Pa":
                finalPressure = pressure * 100;
                pressureUnit = "Pa";
                break;
            case "mm/Hg":
                finalPressure = (Math.round((pressure * 0.750062) * 10)) / 10;
                pressureUnit = "mm/Hg";
        }
    }
    return {pressure: finalPressure, unit: pressureUnit}
}