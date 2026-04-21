import React from "react";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
Footer;

const MainLayouts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      <Header userName="Dr. Smith" onLogout={handleLogout} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayouts;
