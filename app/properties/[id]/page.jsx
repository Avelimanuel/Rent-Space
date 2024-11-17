import Property from "@/models/Property";
import connectToDb from "@/config/databaseconnect";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyImages from "@/components/PropertyImages";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyInfo from "@/components/PropertyInfo";

const SinglePropertyPage = async ({ params }) => {
  await connectToDb();
  const singleProperty = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={singleProperty.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyInfo property={singleProperty}/>
          </div>
        </div>
      </section>
      <PropertyImages images={singleProperty.images}/>
    </>
  );
};

export default SinglePropertyPage;
