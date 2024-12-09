import Property from "@/models/Property";
import connectToDb from "@/config/databaseconnect";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyInfo from "@/components/PropertyInfo";
import { convertToSerializableObject } from "@/app/utils/convertToObject";

import PropertyContactForm from "@/components/PropertyContactForm";

const SinglePropertyPage = async ({ params }) => {
  await connectToDb();
  const singlePropertyDoc = await Property.findById(params.id).lean();
  const singleProperty = convertToSerializableObject(singlePropertyDoc);

  if (!singleProperty) {
    return (
      <h1 className="text-center font-bold text-red-500 text-2xl">
        Property not found
      </h1>
    );
  }

  return (
    <>
      {/* Header Image */}
      <PropertyHeaderImage image={singleProperty.images[0]} />

      {/* Back to Properties Link */}
      <section>
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-blue-50">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-80/20 gap-6">
            {/* Property Information */}
            <div>
              <PropertyInfo property={singleProperty} />
            </div>
          </div>
        </div>
      </section>

      {/* Property Images */}
      <section className="py-6">
        <PropertyImages images={singleProperty.images} />
      </section>
      {/* Aside Section */}
      <aside className="flex flex-col  justify-center items-center gap-4 sm:gap-6">
        <PropertyContactForm property={singleProperty} />
      </aside>
    </>
  );
};

export default SinglePropertyPage;
