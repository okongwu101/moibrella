'use client'

import { temperatureUnitAtom } from "@/lib/atoms"
import { useAtom } from "jotai"


export const TempUnitDisplay = () => {
    const [tempUnit,] = useAtom(temperatureUnitAtom)
    return(
        <div>

        </div>
    )
}