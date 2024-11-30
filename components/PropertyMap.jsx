"use client";

import { useState, useEffect } from "react";
import { setDefaults, fromAddress } from "react-geocode";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import Spinner from "./Spinner";

const PropertyMapPage = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [geoCodeError, setGeoCodeError] = useState(false);

  // Set geocode API defaults
  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODE_API_KEY,
    language: "en",
    region: "kenya",
  });

  useEffect(() => {
    if (!property || !property.location) return; // Ensure property is defined
    const fetchCoordinates = async () => {
      setLoading(true); // Set loading state when fetching begins
      setGeoCodeError(false); // Reset errors on re-fetch
      try {
        const response = await fromAddress(
          `${property.location.city} ${property.location.street}`
        );
        if (response.results.length === 0) {
          setGeoCodeError(true);
          return;
        }
        const { lat, lng } = response.results[0].geometry.location;
        setLat(lat);
        setLng(lng);
      } catch (error) {
        console.error(`An error occurred while fetching coordinates: ${error}`);
        setGeoCodeError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [property]); // Re-run effect if property changes

  if (loading) {
    return <Spinner /> ,<h1>Loading map</h1>
  }

  if (geoCodeError) {
    return <h3 className="text-red-500">Location data not found</h3>;
  }

  if (!lat || !lng) {
    return <h3 className="text-gray-500">Fetching map data...</h3>;
  }

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat,
    lng,
  };

  return (
    <div>
      <h1 className="text-lg font-semibold mb-4">Property Map</h1>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {/* Add a marker for the property location */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default PropertyMapPage;
