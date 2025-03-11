import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import AuthHanlder from "@/handlers/auth-handler";
import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* handler to store the user data */}
      <AuthHanlder />
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};