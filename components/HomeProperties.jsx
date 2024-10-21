import Property from "@/models/Property";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import connectToDb from "@/config/databaseconnect";

const HomeProperties = async () => {
  await connectToDb();
  const hotProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
            Hot properties
          </h2>
          {Property.length === 0 ? (
            <h1>No Properties Found</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hotProperties.map((property) => (
                <div>
                  <PropertyCard key={property._id} property={property} />{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg px-6 my-5">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
