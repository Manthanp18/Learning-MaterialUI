import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";

import AppHeader from "./AppHeader";
// import * as actions from "../../../modules/Authentication/redux/actions";
// import { noop } from "../../../utils";
// import { showNotification } from "../../Notifications";

const AppHeaderContainer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppHeader
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        anchorElNav={anchorElNav}
        anchorElUser={anchorElUser}
      />
    </>
  );
};
export default AppHeaderContainer;
// const mapStateToProps = (state) => ({
//   currentUserProfile: state.auth.currentUserProfile,
// });

// const mapDispatchToProps = (dispatch) => ({
//   logoutUser: () => dispatch(actions.logoutUser()),
//   getCurrentUserProfile: () => dispatch(actions.getCurrentUserProfile()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(AppHeaderContainer));
