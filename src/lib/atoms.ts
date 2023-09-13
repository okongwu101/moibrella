import { atom } from "jotai";

export const currentUserCoordinatesAtom = atom<string>("")

export const selectedLatitudeAtom = atom<string>("")
export const selectedLongitudeAtom = atom<string>("");



// export const temperatureUnitAtom = atom<"celcius" | "kelvin" | "fahrenheit">("celcius");
export const temperatureUnitAtom = atom("celcius");
export const windSpeedUnitAtom = atom('meter/second')
export const pressureUnitAtom = atom("mm/Hg")


