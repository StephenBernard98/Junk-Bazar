import VendorDashboardNav from "./VendorDashboardNav";
import VendorDashboardHead from "./VendorDashboardHead";
import React, { useState, useEffect } from "react";
import History from "./History";
import NoOrder from "./components/NoOrder";
import Settings from "./Settings";

const VendorDashboard = () => {
  const [vendorNav, setVendorNav] = useState(false);
  const handleVendorNav = () => setVendorNav(true);
  const closeVendorNav = () => setVendorNav(false);
  const [noScrap, setNoScrap] = useState(false);
  const [manageNavs, setManageNavs] = useState({
    showOrder: true,
    showHistory: false,
    showSettings: false,
  });
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    if (manageNavs.showOrder) {
      setRenderer(<NoOrder noScrap={noScrap} />);
    }
    if (manageNavs.showHistory) {
      setRenderer(<History />);
    }
    if (manageNavs.showSettings) {
      setRenderer(<Settings />);
    }
  }, [
    manageNavs.showHistory,
    manageNavs.showOrder,
    manageNavs.showSettings,
    noScrap,
  ]);

  return (
    <main>
      <VendorDashboardNav
        showNav={vendorNav}
        hideNav={closeVendorNav}
        onScrap={() => {
          setNoScrap((prevState) => !prevState);
          setManageNavs({
            showHistory: false,
            showOrder: true,
            showSettings: false,
          });
        }}
        showHistory={() =>
          setManageNavs({
            showSettings: false,
            showHistory: true,
            showOrder: false,
          })
        }
        showSettings={() =>
          setManageNavs({
            showHistory: false,
            showOrder: false,
            showSettings: true,
          })
        }
      />
      <VendorDashboardHead
        handleNavClick={handleVendorNav}
        showNav={vendorNav}
      />

      {renderer}
    </main>
  );
};

export default VendorDashboard;
