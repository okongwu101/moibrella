'use client'

import SettingButton from "@/components/settingButton";
import { pressureUnitAtom, temperatureUnitAtom, windSpeedUnitAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";






const temperatureData = [
    { label: "Celcius", value: "celcius" },
    { label: "Fahrenheit", value: "fahrenheit" },
    { label: "Kelvin", value: "kelvin" }
]

const windSpeedData = [
    { label: "meter/second", value: "meter/second" },
    { label: "miles/second", value: "miles/second" }
]

const atmPressureData = [
    { label: "mm/Hg", value: "mm/Hg" },
    { label: "Pa", value: "Pa" }
]


export default function Settings() {
    const [tempValue, setTempValue] = useAtom(temperatureUnitAtom)
    const [windSpeed, setWindSpeed] = useAtom(windSpeedUnitAtom)
    const [atmPressure, setAtmPressure] = useAtom(pressureUnitAtom)

    const router = useRouter()


    return (
        <div className="lg:container mx-auto lg:px-52 mt-8">

            <div className="text-white font-sans text-base mx-2 px-4">
                Units
            </div>

            <div className="rounded-md px-4 py-6 mx-2">
                <div>
                    <div className="text-white font-sans text-sm mb-2">Temperature</div>
                    <div className="">
                        <SettingButton
                            data={temperatureData}
                            value={tempValue}
                            onChange={setTempValue}
                        />


                    </div>
                </div>
            </div>


            <div className="rounded-md px-4 py-6 mx-2">
                <div>
                    <div className="text-white font-sans text-sm mb-2">Wind speed</div>
                    <div className="">
                        <SettingButton
                            data={windSpeedData}
                            value={windSpeed}
                            onChange={setWindSpeed}
                        />


                    </div>
                </div>
            </div>


            <div className="rounded-md px-4 py-6 mx-2">
                <div>
                    <div className="text-white font-sans text-sm mb-2">Atmospheric pressure</div>
                    <div className="">
                        <SettingButton
                            data={atmPressureData}
                            value={atmPressure}
                            onChange={setAtmPressure}
                        />


                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <button type="button" className="bg-red-400 px-2 py-2" onClick={() => router.back()}>
                    Go back
                </button>
            </div>

        </div>
    )
}