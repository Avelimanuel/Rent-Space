"use client";
import { useFormStatus } from "react-dom"; // Ensure you are correctly importing from your setup.

const SubmitPropertyButton = () => {
  const { pending } = useFormStatus(); // `pending` should be tied to form submission.

  return (
    <button
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline ${
        pending ? "bg-blue-300 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      type="submit"
      disabled={pending} // Disable button while `pending` is true.
    >
      {pending ? "Please wait..." : "Add Property"}
    </button>
  );
};

export default SubmitPropertyButton;
