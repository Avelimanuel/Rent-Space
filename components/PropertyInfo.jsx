"use client";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

import PropertyMapPage from "./PropertyMap";
const PropertyInfo = ({ property }) => {
  return (
    <>
      <section>
        <main>
          <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div className="text-gray-500 mb-4">{property.type}</div>
            <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <FaMapMarker className="text-red-500 mt-1" />
              <p className="text-orange-700">
                {property.location.city} {property.location.state}
              </p>
            </div>

            <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
              Rates & Options
            </h3>
            <div className="flex flex-col md:flex-row justify-around">
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                <div className=" font-bold text-blue-500">
                  {property.rates.nightly ? (
                    `ksh.${property.rates.nightly}`
                  ) : (
                    <FaTimes className="text-red-700" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                <div className=" font-bold text-blue-500">
                  {" "}
                  {property.rates.weekly ? (
                    `ksh.${property.rates.weekly}`
                  ) : (
                    <FaTimes className="text-red-700" />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                <div className=" font-bold text-blue-500">
                  {" "}
                  {property.rates.monthly ? (
                    `${property.rates.monthly}`
                  ) : (
                    <FaTimes className="text-red-700" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold mb-6">{property.description}</h3>
            <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
              <p>
                <FaBed />
                <span className="hidden sm:inline">{property.beds} beds</span>
              </p>
              <p>
                <FaBath />
                <span className="hidden sm:inline">{property.baths} baths</span>
              </p>
              <p>
                <FaRulerCombined />
                {property.square_feet}{" "}
                <span className="hidden sm:inline">sqft</span>
              </p>
            </div>
            <p className="text-gray-500 mb-4">{property.description}</p>
            <p className="text-gray-500 mb-4">
              We have a beautiful apartment located near the commons. It is a 2
              bedroom apartment with a full kitchen and bathroom. It is
              available for weekly or monthly rentals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-bold mb-6">Amenities</h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
              {property.amenities.map((amenity, index) => (
                <li key={index}>
                  <FaCheck className="inline-block text-green-600 mr-2" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <div id="map">
              <PropertyMapPage property={property}/>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default PropertyInfo;
