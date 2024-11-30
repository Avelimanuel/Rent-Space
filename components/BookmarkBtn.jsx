// "use client";
// import { useState, useEffect } from "react";
// import { FaBookmark } from "react-icons/fa";
// import bookmarkProperty from "@/app/actions/bookmarkProperty";
// import checkBookmarkStaus
// import { toast } from "react-toastify";
// import { useSession } from "next-auth/react";
// const BookmarkButton = ({ property }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const { loading, setLoading } = useState(true);

//   const { data: session } = useSession();

//   const userId = session?.user?.id;

//   useEffect(() => {
//     if (!userId) {
//       return;
//     }
//     checkBookmarkStatus(property._id).then((res) => {
//       if (res.error) toast.error(res.error);
//       if (res.isBookmarked) setIsBookmarked(res.isBookmarked);
//     });
//   }, [property._id, userId, checkBookmarkStatus]);

//   const handleClick = async () => {
//     if (!userId) {
//       toast.error("Login required");
//       return;
//     }

//     const res = await bookmarkProperty(property._id);
//     if (res.error) {
//       toast.error(`Property not bookmarked ${res.error}`);
//     }
//     setIsBookmarked(res.isBookmarked);
//     toast.success(res.message);
//   };
//   return isBookmarked ? (
//     <div>
//       <button
//         onClick={handleClick}
//         className="bg-red-500 hover:bg-red-600 text-white font-bold  py-2 px-4 rounded-full flex items-center justify-center"
//       >
//         <FaBookmark className="mr-2" /> Remove bookmark
//       </button>
//     </div>
//   ) : (
//     <div>
//       <button
//         onClick={handleClick}
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold  py-2 px-4 rounded-full flex items-center justify-center"
//       >
//         <FaBookmark className="mr-2" /> Bookmark Property
//       </button>
//     </div>
//   );
// };

// export default BookmarkButton;
