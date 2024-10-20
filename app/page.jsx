import Link from "next/link";
const HomePage = () => {
  return (
    <div className="">
      <h1>Welcome to Rent-Space</h1>
      <Link href='/properties'>Properties</Link>
    </div>
  );
};

export default HomePage;
