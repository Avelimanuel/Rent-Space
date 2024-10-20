import "@/assets/styles/globals.css";

export const metadata = {
  title: "RentSpace",
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
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
