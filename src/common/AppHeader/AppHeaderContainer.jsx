import React, { useEffect, useState } from "react";

import AppHeader from "./AppHeader";

const AppHeaderContainer = () => {
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <AppHeader handleOpenUserMenu={handleOpenUserMenu} />
    </>
  );
};
export default AppHeaderContainer;
