import React, { useState } from 'react';

const MapComponent = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [mapUrl, setMapUrl] = useState('');
    const API_KEY = 'AIzaSyAwFNh_TQiUICVulmablBlsudim_M9Sh54'
    const handleSearch = () => {
        if (from && to) {
            // Generate Google Maps Embed URL with Directions
            const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${encodeURIComponent(
                from
            )}&destination=${encodeURIComponent(to)}&mode=driving`;

            setMapUrl(googleMapsEmbedUrl);
        }
    };

    return (
        <div>
            {/* Form for "from" and "to" inputs */}
            <div className="flex flex-col items-center mb-6">
                <div className="mb-4">
                    <label className="mr-2">From:</label>
                    <input
                        type="text"
                        className="border p-2 rounded"
                        placeholder="Enter starting point"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="mr-2">To:</label>
                    <input
                        type="text"
                        className="border p-2 rounded"
                        placeholder="Enter destination"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleSearch}
                >
                    Show Route
                </button>
            </div>

            {/* Display the map if mapUrl is available */}
            {mapUrl && (
                <div className="map-container">
                    <iframe
                        title="Google Maps Directions"
                        src={mapUrl}
                        width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        className="border"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
