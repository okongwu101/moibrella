'use client'

import { selectedLatitudeAtom, selectedLongitudeAtom } from "@/lib/atoms"
import { useAtom } from "jotai"


export default function CurrentWeather({ data } : { data : {}[]}) {
    console.log('this is data from current fetch', data)

    const [selectedLat, ] = useAtom(selectedLatitudeAtom)
    const [selectedLon, ] = useAtom(selectedLongitudeAtom)



    // fetch the current weather of the selected location
    /*
        On first app load, fetch is done using the current user location.
        If a location is selected by the user, the fetch is done with that location.
    */
   
    return(
        <div>
            i see the rain

        </div>
    )
}