import React, { useState } from 'react';

import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import MapComponent from '../utilitiy/mapComponent';


export default function SearchBar() {

    const [to, setTo] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [map, setMap] = useState('');

    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);

    const [destination, setDestination] = useState('');
    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log(latitude, longitude)
                    setMap(<MapComponent lat={latitude} lng={longitude} />)
                    // You might want to reverse geocode these coordinates to get an address
                    setCurrentLocation(`Lat: ${latitude}, Long: ${longitude}`);
                    // Alternatively, use a geocoding service to get a human-readable address
                    console.log(currentLocation)
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    // Handle errors, e.g., show a message to the user
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            // Handle the case when geolocation is not supported
        }
    };

    // Handler to update state based on input changes
    const handleInputChange = (e) => {
        if (e.target.name === 'destination') {
            console.log('d')
            setDestination(e.target.value);
        } else if (e.target.name === 'to') {
            setTo(e.target.value);
        }
    };
    const isSearchActive = destination.length > 0 || to.length > 0;

    return (
        <>
            <div className="flex-grow flex justify-center lg:mx-0 relative">
                <div className="relative flex flex-col gap-4" >
                    <div className='relative lg:w-80 xl:w-96 md:w-95 h-10'>
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination..."
                            value={destination}
                            onChange={handleInputChange}
                            className="w-full h-full pl-4 pr-10 text-sm text-zinc-700 font-Lato bg-white rounded-md shadow outline-none"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                        </div>
                    </div>

                    <div className={`relative lg:w-80 xl:w-96 md:w-95 h-10 ${isSearchActive ? 'block' : 'hidden'}`}>
                        <input
                            type="text"
                            name="to"
                            placeholder="To..."
                            value={to}
                            onChange={handleInputChange}
                            className={`w-full h-full pl-4 pr-10 text-sm text-zinc-700 font-Lato bg-white rounded-md shadow outline-none `}
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <MapPinIcon onClick={getCurrentLocation} aria-hidden="true" className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
            {map}
            </div>
        </>
    );
} 