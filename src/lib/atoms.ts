import { atom } from "jotai";

export const currentUserCoordinatesAtom = atom<string>("")

export const selectedLatitudeAtom = atom<string>("")
export const selectedLongitudeAtom = atom<string>("");



export const temperatureUnitAtom = atom<"celcius" | "kelvin" | "fahrenheit">("celcius");
export const windSpeedUnitAtom = atom<"meter/second" | "miles/hour">('meter/second')
export const pressureUnitAtom = atom<"mm/Hg" | "Pa">("mm/Hg")


