import React from 'react';
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { RouteWithLayout } from './Components/RouteWithLayout/index';
import { DriveLayout , EmailLayout, MinimalLayout , OrganizationLayout,InstituteLayout,StudentLayout,TeacherLayout } from './Layout/index';

import {
  MyDrive as MyDriveView,
  Shared as SharedView,
  Recent as RecentView,
  Trash as TrashView,
  ViewFolder as ViewFolderView,
  SignUp as SignUpView,
  SignIn as SignInView,
  InboxMail as InboxMailView,
  DraftMail as DraftMailView,
  SentMail as SentMailView,
  OrganizationDash as OrganizationDashView,
  InstituteDash as InstituteDashView,
  StudentDash as StudentDashView,
  TeacherDash as TeacherDashView,
  OrganizationSignUp as OrganizationSignUpView,
  OrganizationLogin as OrganizationLoginView,
  AddInstitute as AddInstituteView,
  InstituteLogin as InstituteLoginView,
  InstiAddStaff as InstiAddStaffView,
  OrgAddStaff as OrgAddStaffView,
  AddStudent as AddStudentView,
  AddTeacher as AddTeacherView,
  StaffLogin as StaffLoginView,
  TeacherLogin as TeacherLoginView,
  StudentLogin as StudentLoginView,
  PasswordChange as PasswordChangeView,
  InstiList as InstiListView,
  InstiStaffList as InstiStaffListView,
  OrgStaffList as OrgStaffListView,
  TeacherList as TeacherListView,
  StudentList as StudentListView
} from './Views/index';

import jwt_decode from "jwt-decode";
import setAuthToken from './Utils/SetAuthToken';
import { setCurrentUser, logoutUser } from "./Actions/AuthActions";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {Provider} from "react-redux";
import store from './Store';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const Routes = (appProps) => {
  return (

    <Provider store={store}>
      <BrowserRouter>
    <Switch>
      <Redirect
        exact
        from="/"
        to="/mydrive"
      />
      <RouteWithLayout
        component={MyDriveView}
        exact
        layout={DriveLayout}
        path="/mydrive"
        appProps={appProps}
      />
      <RouteWithLayout
        component={SharedView}
        exact
        layout={DriveLayout}
        path="/shared"
        appProps={appProps}
      />
      <RouteWithLayout
        component={RecentView}
        exact
        layout={DriveLayout}
        path="/recent"
        appProps={appProps}
      />
     
      <RouteWithLayout
        component={TrashView}
        exact
        layout={DriveLayout}
        path="/trash"
        appProps={appProps}
      />
       <RouteWithLayout
        component={ViewFolderView}
        exact
        layout={DriveLayout}
        path="/view"
        appProps={appProps}
      />
      <RouteWithLayout
        component={OrganizationDashView}
        exact
        layout={OrganizationLayout}
        path="/orgdash"
        appProps={appProps}
      />
      <RouteWithLayout
        component={InstituteDashView}
        exact
        layout={InstituteLayout}
        path="/instdash"
        appProps={appProps}
      />
      <RouteWithLayout
        component={StudentDashView}
        exact
        layout={StudentLayout}
        path="/studentdash"
        appProps={appProps}
      />
      <RouteWithLayout
        component={InboxMailView}
        exact
        layout={EmailLayout}
        path="/inbox"
        appProps={appProps}
      />
            <RouteWithLayout
        component={DraftMailView}
        exact
        layout={EmailLayout}
        path="/draft"
        appProps={appProps}
      />
            <RouteWithLayout
        component={SentMailView}
        exact
        layout={EmailLayout}
        path="/sent"
        appProps={appProps}
      />
            <RouteWithLayout
        component={TeacherDashView}
        exact
        layout={TeacherLayout}
        path="/teacherdash"
        appProps={appProps}
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/signup"
        appProps={appProps}
      />
       <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/signin"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={OrganizationSignUpView}
        exact
        layout={MinimalLayout}
        path="/orgsignup"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={OrganizationLoginView}
        exact
        layout={MinimalLayout}
        path="/orglogin"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={AddInstituteView}
        exact
        layout={MinimalLayout}
        path="/addinsti"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={InstituteLoginView}
        exact
        layout={MinimalLayout}
        path="/instilogin"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={InstiAddStaffView}
        exact
        layout={MinimalLayout}
        path="/instiaddstaff"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={OrgAddStaffView}
        exact
        layout={MinimalLayout}
        path="/orgaddstaff"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={AddStudentView}
        exact
        layout={MinimalLayout}
        path="/addstudent"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={AddTeacherView}
        exact
        layout={MinimalLayout}
        path="/addteacher"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={StaffLoginView}
        exact
        layout={MinimalLayout}
        path="/stafflogin"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={TeacherLoginView}
        exact
        layout={MinimalLayout}
        path="/teacherlogin"
        appProps={appProps}
      /> 
      
       <RouteWithLayout
        component={StudentLoginView}
        exact
        layout={MinimalLayout}
        path="/studentlogin"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={PasswordChangeView}
        exact
        layout={MinimalLayout}
        path="/passchange"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={TeacherListView}
        exact
        layout={InstituteLayout}
        path="/teacherlist"
        appProps={appProps}
      /> 
      <RouteWithLayout
        component={StudentListView}
        exact
        layout={InstituteLayout}
        path="/studentlist"
        appProps={appProps}
      />
      <RouteWithLayout
        component={InstiStaffListView}
        exact
        layout={InstituteLayout}
        path="/instistafflist"
        appProps={appProps}
      />  
      <RouteWithLayout
        component={OrgStaffListView}
        exact
        layout={OrganizationLayout}
        path="/orgstafflist"
        appProps={appProps}
      />  
      <RouteWithLayout
        component={InstiListView}
        exact
        layout={OrganizationLayout}
        path="/instilist"
        appProps={appProps}
      /> 
      </Switch>
      </BrowserRouter>
      </Provider>
  ); 
  
};

export default Routes;