import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (<h1>No Properties Found</h1> ):(
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {properties.map((property)=>(
              <div> <PropertyCard key={property._id} property={property}/> </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
