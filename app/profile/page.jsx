import Property from "@/models/Property";
import Image from "next/image";
import connectToDb from "@/config/databaseconnect";
import { getSessionUser } from "../utils/getsessionUser";
import profileDefault from "@/assets/images/profile.png";
import UsersPropertiesPage from "@/components/UsersProperties";
import { convertToSerializableObject } from "../utils/convertToObject";

const ProfilePage = async () => {
  await connectToDb();
  const sessionUser = await getSessionUser();

  if (!sessionUser.userId) {
    throw new Error(`User id is required`);
  }

  const propertiesDocs = await Property.find({ owner: sessionUser.userId }).lean();
  const properties = propertiesDocs.map( convertToSerializableObject )

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-8 w-8 rounded-full"
                  src={sessionUser?.user?.image || profileDefault}
                  width={200}
                  height={200}
                  alt="Profile image"
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span>{" "}
                {sessionUser?.user?.name}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span>{" "}
                {sessionUser?.user?.email}
              </h2>
            </div>

            <div className="items-center"><h2 className="text-xl text-center font-semibold mb-4">Your Listings</h2></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UsersPropertiesPage properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
