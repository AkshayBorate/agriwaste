import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/about/About";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Pricing from "./components/pricing/Pricing";
import Home from "./components/home/Home";
import Signup from "./components/login/Signup";
import Services from "./components/common/footer/Services";
import Demo from "./components/home/Demo";
import Serve from "./components/common/footer/Serve";
import AdminLogin from "./components/login/AdminLogin";
import EmployeeLogin from "./components/login/EmployeeLogin";
import TermsAndConditions from "./components/common/footer/TermsAndConditions";
import PrivacyPolicy from "./components/common/footer/PrivacyPolicy";
import FeedbackForm from "./components/feedback/FeedBack";
import SellProduct from "./components/sellproduct/SellProduct";
import Adminpage from "./components/admin/Adminpage";
import EmployeeRegister from "./components/admin/EmployeeRegister";
import AdminHome from "./components/admin/AdminHome";
import Loginc from "./components/login/Loginc";
import { Outlet } from "react-router-dom";
import AllEmpoyee from "./components/admin/AllEmpoyee";
import Alluser from "./components/admin/Alluser";
import PaymentPage from "./components/pricing/PaymentPage";
import EmployeeHeader from "./components/Employee/EmployeeHeader";
import WasteIntake from "./components/Employee/WasteIntake";
import ProcessingStatus from "./components/Employee/ProcessingStatus";
import ProductListing from "./components/Employee/ProductListing";
import Dashboard from "./components/Employee/Dashboard";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "pricing", element: <Pricing /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "journal", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "logins", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "adminlogin", element: <AdminLogin /> },
      { path: "employeelogin", element: <EmployeeLogin /> },
      { path: "services", element: <Serve /> },
      { path: "demo", element: <Demo /> },
      { path: "termsandconditions", element: <TermsAndConditions /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "feedback", element: <FeedbackForm /> },
      { path: "sellwaste", element: <SellProduct /> },
      { path: "loginc", element: <Loginc /> },
    ],
  },
  {
    path: "/admindash",
    element: (
      <>
        <Adminpage />
        <Outlet />
      </>
    ),
    children: [
      { path: "home", element: <AdminHome /> },
      { path: "empcreate", element: <EmployeeRegister /> },
      { path: "allemp", element: <AllEmpoyee /> },
      { path: "alluser", element: <Alluser /> },
    ],
  },
  {
    path: "/empdash",
    element: (
      <>
        <EmployeeHeader />
        <Outlet />
      </>
    ),
    children: [
      { path: "wasteintake", element: <WasteIntake /> },
      { path: "processingstatus", element: <ProcessingStatus /> },
      { path: "productlisting", element: <ProductListing/> },
      { path: "dashboard", element: <Dashboard/> },
    ],
  },
]);

export default routing;
