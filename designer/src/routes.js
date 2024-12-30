/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import FollowUp from "layouts/followup";
import NewOrder from "layouts/order";
import EditRequest from "layouts/edit";
import EditProduct from "layouts/edit-product";
import Assigned from "layouts/Assigned";
import Completed from "layouts/completed";
import Delivered from "layouts/delivered";
import Others from "layouts/Others";
import Logs from "layouts/Logs";
import CompleteDetail from "layouts/complete_detail";
import ClientReportingPage from "layouts/Crp";
import DeliveredDetail from "layouts/Delivered_Detail";
import AssignedDetail from "layouts/Assigned_Detail";
import OrderEdit from "layouts/OrderEdit";
import Submitted from "layouts/Submitted";
import OrderRejected from "layouts/OrderRejected";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "New Order",
    key: "NewOrder",
    route: "/NewOrder",
    icon: <Office size="12px" />,
    component: <NewOrder />,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Order Edit",
    key: "OrderEdits",
    route: "/OrderEdits",
    icon: <Office size="12px" />,
    component: <OrderEdit/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Submitted",
    key: "Submitted",
    route: "/Submitted",
    icon: <Office size="12px" />,
    component: <Submitted/>,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Order Rejected",
    key: "OrderRejected",
    route: "/OrderRejected",
    icon: <Office size="12px" />,
    component: <OrderRejected/>,
    noCollapse: true,
  },

  {
    route: "/EditProduct/:productId",
    component: <EditProduct/>,
    noCollapse: true,
  },
  //   {
  //   type: "collapse",
  //   name: "Follow Up",
  //   key: "FollowUp",
  //   route: "/FollowUp",
  //   icon: <Office size="12px" />,
  //   component: <FollowUp />,
  //   noCollapse: true,
  // },
  {
    route: "/EditProduct",
    component: <EditProduct />,
    noCollapse: true,
  },
  // {
  //   route: "/CompleteDetail",
  //   component: <CompleteDetail />,
  //   noCollapse: true,
  // },

  // {
  //   route: "/DeliveredDetail",
  //   component: <DeliveredDetail/>,
  //   noCollapse: true,
  // },
  // {
  //   route: "/AssignedDetail",
  //   component: <AssignedDetail/>,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Others",
  //   key: "Others",
  //   route: "/Others",
  //   icon: <Office size="12px" />,
  //   component: <Others />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Logs",
  //   key: "Logs",
  //   route: "/Logs",
  //   icon: <Office size="12px" />,
  //   component: <Logs />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Assigned",
  //   key: "Assigned",
  //   route: "/Assigned",
  //   icon: <Office size="12px" />,
  //   component: <Assigned />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Completed",
  //   key: "completed",
  //   route: "/completed",
  //   icon: <Office size="12px" />,
  //   component: <Completed />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Delivered",
  //   key: "Delivered",
  //   route: "/Delivered",
  //   icon: <Office size="12px" />,
  //   component: <Delivered />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Client Reporting",
  //   key: "ClientReporting",
  //   route: "/ClientReporting",
  //   icon: <Office size="12px" />,
  //   component: <ClientReportingPage />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
 
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
