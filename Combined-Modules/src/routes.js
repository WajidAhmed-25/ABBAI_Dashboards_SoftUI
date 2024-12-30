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




// Account Imports //


// Soft UI Dashboard React icons
import Shop1 from "../src/Accounts-Component/src/examples/Icons/Shop";
import Office1 from "../src/Accounts-Component/src/examples/Icons/Office";
import Settings1 from "../src/Accounts-Component/src/examples/Icons/Settings";
import Document1 from "../src/Accounts-Component/src/examples/Icons/Document";
import SpaceShip1 from "../src/Accounts-Component/src/examples/Icons/SpaceShip";
import CustomerSupport1 from "../src/Accounts-Component/src/examples/Icons/CustomerSupport";
import CreditCard1 from "../src/Accounts-Component/src/examples/Icons/CreditCard";
import Cube1 from "../src/Accounts-Component/src/examples/Icons/Cube";
import FollowUp1 from "../src/Accounts-Component/src/layouts/followup";
import NewOrder1 from "../src/Accounts-Component/src/layouts/order";
import EditRequest1 from "../src/Accounts-Component/src/layouts/edit";

import EditProduct1 from "../src/Accounts-Component/src/layouts/edit-product";
import Account1 from "../src/Accounts-Component/src/layouts/Account";
import BillingRecord1 from "../src/Accounts-Component/src/layouts/billing_record/billing_record";
import Invoice1 from "../src/Accounts-Component/src/layouts/Invoice/Invoice";





////////////////////////////// QC ///////////////////////////////////




import NewOrder_QC from "../src/QC-Component/src/layouts/order";
import EditRequest_QC  from "../src/QC-Component/src/layouts/edit";
import EditProduct_QC  from "../src/QC-Component/src/layouts/edit-product";


import Assigned_QC  from "../src/QC-Component/src/layouts/Assigned";
import Completed_QC  from "../src/QC-Component/src/layouts/completed";
import Delivered_QC  from "../src/QC-Component/src/layouts/delivered";
import Others_QC  from "../src/QC-Component/src/layouts/Others";
import Logs_QC  from "../src/QC-Component/src/layouts/Logs";
import CompleteDetail_QC  from "../src/QC-Component/src/layouts/complete_detail";
import ClientReportingPage_QC  from "../src/QC-Component/src/layouts/Crp";
import DeliveredDetail_QC  from "../src/QC-Component/src/layouts/Delivered_Detail";
import AssignedDetail_QC  from "../src/QC-Component/src/layouts/Assigned_Detail";
import FollowUp_QC from "../src/QC-Component/src/layouts/followup";



/////////////////////////// DESIGNER //////////////////////////////


import NewOrder_Designer from "../src/Designer-Component/src/layouts/order";
import EditProduct_Designer from "../src/Designer-Component/src/layouts/edit-product";
import OrderEdit_Designer from "../src/Designer-Component/src/layouts/OrderEdit";
import Submitted_Designer from "../src/Designer-Component/src/layouts/Submitted";
import OrderRejected_Designer from "../src/Designer-Component/src/layouts/OrderRejected";

const routes = [

  { type: "title", title: "Admin Pages", key: "admin-pages" },

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
    name: "Edit Request",
    key: "EditRequest",
    route: "/EditRequest",
    icon: <Office size="12px" />,
    component: <EditRequest />,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Follow Up",
    key: "FollowUp",
    route: "/FollowUp",
    icon: <Office size="12px" />,
    component: <FollowUp />,
    noCollapse: true,
  },
  // {
  //   route: "/EditProduct",
  //   component: <EditProduct />,
  //   noCollapse: true,
  // },
  {
    route: "/EditProduct/:productId",
    component: <EditProduct />,
    noCollapse: true,
  },
  {
    route: "/CompleteDetail",
    component: <CompleteDetail />,
    noCollapse: true,
  },

  {
    route: "/DeliveredDetail",
    component: <DeliveredDetail/>,
    noCollapse: true,
  },
  {
    route: "/AssignedDetail",
    component: <AssignedDetail/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Others",
    key: "Others",
    route: "/Others",
    icon: <Office size="12px" />,
    component: <Others />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Logs",
    key: "Logs",
    route: "/Logs",
    icon: <Office size="12px" />,
    component: <Logs />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Assigned",
    key: "Assigned",
    route: "/Assigned",
    icon: <Office size="12px" />,
    component: <Assigned />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Completed",
    key: "completed",
    route: "/completed",
    icon: <Office size="12px" />,
    component: <Completed />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Delivered",
    key: "Delivered",
    route: "/Delivered",
    icon: <Office size="12px" />,
    component: <Delivered />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Client Reporting",
    key: "ClientReporting",
    route: "/ClientReporting",
    icon: <Office size="12px" />,
    component: <ClientReportingPage />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
 
  // { type: "title", title: "Account Pages", key: "account-pages" },
  {
    // type: "collapse",
    // name: "Profile",
    // key: "profile",
    route: "/profile",
    // icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    // key: "sign-in",
    route: "/authentication/sign-in",
    // icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    // key: "sign-up",
    route: "/authentication/sign-up",
    // icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },







  { type: "title", title: "Account Pages", key: "account-pages" },

  {
    route: "/Invoice",
    component: <Invoice1/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Account",
    key: "Account",
    route: "/Account",
    icon: <Office size="12px" />,
    component: <Account1 />,
    noCollapse: true,
   },
 
  {
    type: "collapse",
    name: "Billing",
    key: "billing_record",
    route: "/billing_record",
    icon: <CreditCard size="12px" />,
    component: <BillingRecord1/>,
    noCollapse: true,
  },


  {
    route: "/EditProduct",
    component: <EditProduct1 />,
    noCollapse: true,
  },
  {
    route: "/EditProduct/:productId",
    component: <EditProduct1/>,
    noCollapse: true,
  },
 



  { type: "title", title: "QC Pages", key: "QC-pages" },





  {
    type: "collapse",
    name: "New Order",
    key: "NewOrder_QC",
    route: "/NewOrder_QC",
    icon: <Office size="12px" />,
    component: <NewOrder_QC />,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Edit Request",
    key: "EditRequest_QC",
    route: "/EditRequest_QC",
    icon: <Office size="12px" />,
    component: <EditRequest_QC />,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Follow Up",
    key: "FollowUp",
    route: "/FollowUp_QC",
    icon: <Office size="12px" />,
    component: <FollowUp_QC />,
    noCollapse: true,
  },

  {
    route: "/EditProduct_QC/:productId",
    component: <EditProduct_QC />,
    noCollapse: true,
  },
  {
    route: "/CompleteDetail_QC",
    component: <CompleteDetail_QC />,
    noCollapse: true,
  },

  {
    route: "/DeliveredDetail_QC",
    component: <DeliveredDetail_QC/>,
    noCollapse: true,
  },
  {
    route: "/AssignedDetail_QC",
    component: <AssignedDetail_QC/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Others",
    key: "Others_QC",
    route: "/Others_QC",
    icon: <Office size="12px" />,
    component: <Others_QC />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Logs",
    key: "Logs_QC",
    route: "/Logs_QC",
    icon: <Office size="12px" />,
    component: <Logs_QC />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Assigned",
    key: "Assigned_QC",
    route: "/Assigned_QC",
    icon: <Office size="12px" />,
    component: <Assigned_QC />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Completed",
    key: "completed_QC",
    route: "/completed_QC",
    icon: <Office size="12px" />,
    component: <Completed_QC />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Delivered",
    key: "Delivered_QC",
    route: "/Delivered_QC",
    icon: <Office size="12px" />,
    component: <Delivered_QC />,
    noCollapse: true,
  },












  { type: "title", title: "Designer Pages", key: "Designer-pages" },






  {
    type: "collapse",
    name: "New Order",
    key: "NewOrder_Designer",
    route: "/NewOrder_Designer",
    icon: <Office size="12px" />,
    component: <NewOrder_Designer />,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Order Edit",
    key: "OrderEdits_Designer",
    route: "/OrderEdits_Designer",
    icon: <Office size="12px" />,
    component: <OrderEdit_Designer/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Submitted",
    key: "Submitted_Designer",
    route: "/Submitted_Designer",
    icon: <Office size="12px" />,
    component: <Submitted_Designer/>,
    noCollapse: true,
  },
    {
    type: "collapse",
    name: "Order Rejected",
    key: "OrderRejected_Designer",
    route: "/OrderRejected_Designer",
    icon: <Office size="12px" />,
    component: <OrderRejected_Designer/>,
    noCollapse: true,
  },

  {
    route: "/EditProduct_Designer/:productId",
    component: <EditProduct_Designer/>,
    noCollapse: true,
  },


























];

export default routes;
