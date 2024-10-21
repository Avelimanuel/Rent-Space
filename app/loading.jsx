'use client'; // Add this to make it a client component

import ClipLoader from 'react-spinners/ClipLoader';
import { useEffect, useState } from 'react';

const LoadingPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    const override = {
        display: "block",
        margin: "100px auto"
    };

    useEffect(() => {
        // Set a timeout for 3 seconds (3000ms)
        const timer = setTimeout(() => {
            setIsLoading(false); // After 3 seconds, hide the loading page
        }, 5000);

        // Cleanup the timeout if the component unmounts before the timeout finishes
        return () => clearTimeout(timer);
    }, []);

    // Render the loading page if isLoading is true
    return isLoading ? <ClipLoader color="#3b82f6" cssOverride={override} size={150}/> : null;
};

export default LoadingPage;
