"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UsersPropertiesPage = ({ properties }) => {
  const [assets, setassets] = useState(properties);
  return (properties.map((property) => (
    
    <div key={property._id} className="mb-10">
      <Link href={`/properties/${property._id}`}>
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          alt="Property image"
          width={1000}
          height={400}
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">Location:{property.location.city}</p>
      </div>
      <div className="mt-2">
        <Link
          href={`/properties/${property._id}`}
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </Link>
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  )));
};

export default UsersPropertiesPage;
