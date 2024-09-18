// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// Define the map container style
const mapContainerStyle = {
    height: "100vh",
    width: "100%",
};

// Define the center of the map


// Define the API key from the environment variables
const apiKey = 'AIzaSyAwFNh_TQiUICVulmablBlsudim_M9Sh54';

const MapComponent = ({ lat, lng }) => {
    const center = {
        lat: lat,
        lng: lng,
    };
    return (
        <LoadScript
            googleMapsApiKey={apiKey}
        >
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={8}
            >
                {/* Add any additional components like markers here */}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
