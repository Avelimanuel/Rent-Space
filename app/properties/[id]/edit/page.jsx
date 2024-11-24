import EditPropertyForm from "@/components/EditPropertyForm";
import connectToDb from "@/config/databaseconnect";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/app/utils/convertToObject";

const EditPropertyPage = async ({ params }) => {
  await connectToDb();
  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializableObject(propertyDoc);
  if (!property) {
    <h1 className="text-center font-bold text-2xl mt-10">
      Property not found
    </h1>;
  }
  return (
    <section className="bg-blue-50">
      <div className="container py-24 max-w-2xl m-auto">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <EditPropertyForm property={property}/> 
        </div>
      </div>
    </section>
  );
};

export default EditPropertyPage;
