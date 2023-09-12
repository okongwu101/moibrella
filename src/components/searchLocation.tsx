'use client'

import { TextInput, Button, Card, Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { CombinedLocationInterface, CountryDetailInterface, FetchedLocationInterface } from '@/lib/interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { selectedLatitudeAtom, selectedLongitudeAtom } from '@/lib/atoms';
import { useAtom } from 'jotai';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';





export default function SearchLocation() {

    const { handleSubmit } = useForm()

    const router = useRouter()

    const [locationValue, setLocationValue] = useState<string>("")

    const [fetchedLocations, setFetchedLocations] = useState<FetchedLocationInterface[]>()

    const [combinedLocations, setCombinedLocations] = useState<CombinedLocationInterface[]>([])



    const [selectLatitude, setSelectedLatitude] = useAtom(selectedLatitudeAtom)
    const [selectedLongitude, setSelectedLongitude] = useAtom(selectedLongitudeAtom)



    // function to search for location
    const onSubmit = async () => {

        /*
            location are fetched using user input
        */
        const response = await axios.get<FetchedLocationInterface[]>(`${process.env.NEXT_PUBLIC_LOCATION_SEARCH_BASE}${locationValue}&limit=10&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`);

        const data = response.data

        setFetchedLocations(data)

    }


    useEffect(() => {
        let combinedDataArray: CombinedLocationInterface[] = [];
        (async () => {
            if (fetchedLocations) {
                fetchedLocations.map(async (loc) => {

                    /*
                           map over the response.
                           for each response fetch country's details based on the country field.
                           combined both responses.
                           the final data will contains fields from both the first and second fetches.
                       */


                    const dataResponse = await axios.get<CountryDetailInterface[]>(`${process.env.NEXT_PUBLIC_COUNTRY_DETAIL_BASE}${loc.country}`)

                    const countryData = dataResponse.data


                    /*
                        map over the countryData to create a new object with all relevant fields from both fetches.
                    */
                    countryData.map(async (count) => {
                        combinedDataArray.push({
                            lat: loc.lat,
                            lon: loc.lon,
                            state: loc.state ?? "",
                            countryCode: loc.country,
                            locationName: loc.name,
                            countryName: count.name.common,
                            flagAlt: count.flags.alt,
                            flagSVG: count.flags.svg,
                            flagPng: count.flags.png,
                            id: (loc.lat + loc.lon).toString()
                        })


                    })
                })
            }
        })()

        setCombinedLocations(combinedDataArray)

        // get out outtaaa here

        // refresh the server component to display the current combined locations data
        setTimeout(() => {
            router.refresh()
        }, 1000)

    }, [fetchedLocations, router])



    return (
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-10 ' >
                <div className='grid grid-cols-4 gap-2'>
                    <div className='col-span-3'>
                        <TextInput
                            // icon={<IconAt />}
                            placeholder="search location"
                            value={locationValue}
                            onChange={(event) => setLocationValue(event.currentTarget.value)}
                            size='xs'
                            className=''
                            variant='filled'
                            classNames={{
                                input: "bg-zinc-600 text-white font-mono font-medium text-base tracking-widest",
                                // description: "text-white",
                                // label: "text-white"
                            }}
                        />
                    </div>
                    <div className='col-span-1'>
                        <Button
                            type='submit'
                            radius="xs"
                            size='xs'
                            className='border border-neutral-600 bg-zinc-600'
                        >
                            <IconSearch />
                        </Button>
                    </div>


                </div>

            </form>

            {
                combinedLocations.length > 0 &&
                <>

                    <Card
                        shadow='md'
                        padding="md"
                        radius="xs"
                        // withBorder
                        className='bg-zinc-600 ml-10 mr-12 lg:mr-60 mt-2'
                    >


                        {
                            combinedLocations?.map(loc => {
                                return (

                                    <div key={loc.id} className=' text-white font-mono text-xs py-1 rounded-lg border border-rose-100 my-2 px-3 hover:bg-green-200 hover:text-zinc-800 cursor-pointer'>
                                        <div className='grid grid-cols-3 gap-2 items-center'
                                            onClick={() => {
                                                setSelectedLatitude(loc.lat.toString())
                                                setSelectedLongitude(loc.lon.toString())
                                                setCombinedLocations([])

                                            }}
                                        >
                                            <div
                                                className=''
                                            >
                                                {loc.locationName}
                                            </div>
                                            <div
                                            >
                                                {loc.state}
                                            </div>

                                            <Avatar
                                                src={loc.flagPng}
                                                size="sm"
                                            />

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </Card>
                </>


            }

        </div>
    )
}


