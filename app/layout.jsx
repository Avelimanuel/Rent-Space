import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: "Rent_Space",
  description:
    "RentSpace - Efficient Property Management and Tenant Solutions.",
  keywords: [
    "property management",
    "rental management",
    "real estate software",
    "tenant management",
    "property listing platform",
    "landlord tools",
    "rent collection",
    "lease management",
    "property tracking",
    "online rent payment",
    "maintenance tracking",
    "tenant screening",
    "lease agreements",
    "property analytics",
    "landlord dashboard",
    "property maintenance",
    "real estate management system",
    "property management software",
    "tenant communication tools",
  ],
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer/>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
