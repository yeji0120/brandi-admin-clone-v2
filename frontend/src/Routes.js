import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "src/GlobalStyles";
import SideBar from "src/component/sideBar/SideBar";
import Login from "src/pages/Login";
import SignUp from "src/pages/SignUp";
import SellerAccountManagement from "src/pages/SellerAccountManagement";
import SellerInfoEdit from "src/pages/SellerInfoEdit";
import LoginOk from "src/pages/LoginOk";
import TestingTable from "./component/sellerAccountManagement/TestingTable";
import ProductRegist from "src/pages/ProductRegist";
import ColorFilter from "src/component/productRegist/ColorFilter";
import SellerSelect from "src/component/productRegist/SellerSelect";

const Routes = () => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={SideBar} />
        <Route exact path="/seller" component={SellerAccountManagement} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/sellerInfoEdit" component={SellerInfoEdit} />
        <Route exact path="/loginOk" component={LoginOk} />
        <Route exact path="/test" component={TestingTable} />
        <Route exact path="/productRegist" component={ProductRegist} />
        <Route exact path="/colorFilter" component={ColorFilter} />
        <Route exact path="/sellerSelect" component={SellerSelect} />
      </Switch>
    </Router>
  );
};
export default Routes;
