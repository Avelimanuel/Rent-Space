import Link from 'next/link'
const InfoBox = ({heading,children,buttonInfo,backgroundColor}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">
        {children}
      </p>
      <Link
        href={buttonInfo.link}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
