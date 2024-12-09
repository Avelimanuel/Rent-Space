import PropertyCard from "@/components/PropertyCard";
import Property from "@/models/Property";
import connectToDb from "@/config/databaseconnect";
import Pagination from "@/components/Pagination";

const PropertiesPage = async ({ searchParams: { page = 1, pageSize = 8 } }) => {
  await connectToDb();
  const skipNumber = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skipNumber).limit(pageSize);

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <h1 className="tetx-red">No Properties Found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {properties.map((property) => (
              <div>
                <PropertyCard key={property._id} property={property} />{" "}
              </div>
            ))}
          </div>
        )}
        <Pagination
          page={parseInt(page)}
          pageSize={parseInt(pageSize)}
          totalItems={parseInt(total)}
        />
      </div>
    </section>
  );
};

export default PropertiesPage;
