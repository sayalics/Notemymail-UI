import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const PrivateRoute = ({ layout: Layout,component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={matchProps =>
      auth.isAuthenticated === true ? (
        <Layout><Component {...matchProps} /></Layout>
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);

