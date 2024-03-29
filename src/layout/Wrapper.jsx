import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children, token }) => {
  const location = useLocation();
  const $hiddenPaths = [
    "/login_signup",
    "/signup",
    "/forgotpassword",
    "/forgot-password-page1",
    "/forgot-password-page2",
    "/pagethree",
    "/enter-otp",
    "/vendor-dashboard",
    "/vendor-dashboard-order",
    "/vendor-dashboard-request-issue",
    "/vendor-dashboard-arrived",
    "/vendor-dashboard-pickup-scrap",
    "/vendor-signup",
    "/vendor-forgetpassword",
    "/vendor-otp",
    "/vendor-signin",
    "/vendor-enter-otp",
    "/admin-dashboard",
    "/admin-dashboard/customer_details",
    "/admin-dashboard-settings",
    "/admin-dashboard/vendor",
    "/business-industry-chats",
    "/admin-notification",
  ];
  const _excludePaths = $hiddenPaths.includes(location.pathname);
  return (
    <div>
      {!_excludePaths && <Nav token={token} />}
      {children}
      {!_excludePaths && <Footer />}
    </div>
  );
};

export default Wrapper;
