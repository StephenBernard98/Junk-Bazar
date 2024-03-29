import logo from "../../assets/PNG/dashboard/junk_bazar_logo.png";
import orders from "../../assets/SVG/dashboard/solar_bag-check-bold.svg";
import home_icon from "../../assets/SVG/dashboard/Home.svg";
import about_icon from "../../assets/SVG/dashboard/About.svg";
import contact_icon from "../../assets/SVG/dashboard/Contact.svg";
import price_list_icon from "../../assets/SVG/dashboard/Price list.svg";
import pickup_icon from "../../assets/SVG/dashboard/Pickup history.svg";
import setting_icon from "../../assets/SVG/dashboard/Settings.svg";
import logout_icon from "../../assets/SVG/dashboard/logout.svg";
import cancel_icon from "../../assets/SVG/dashboard/cancel.svg";
import user_img from "../../assets/SVG/dashboard/User Img.svg";
import location_icon from "../../assets/SVG/dashboard/location.svg";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { Link } from "react-router-dom";

const VendorDashboardNav = ({
  showNav,
  hideNav,
  onScrap,
  showHistory,
  showSettings,
}) => {
  return (
    <div>
      <nav className="fixed h-screen w-[18%] shadow-xl left-0 bg-white hidden lg:block">
        <main className="flex flex-col justify-between h-full">
          <section className=" ">
            <div className="flex justify-center items-center h-[15%]">
              <img
                src={logo}
                alt="bazar-logo"
                className="w-36 cursor-pointer p-3"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div
                className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer ml-2"
                onClick={onScrap}
              >
                <img src={orders} alt="order-icon" />
                <span className="text-center text-lime-600 text-base font-normal font-['Gilroy-Bold'] tracking-tight ml-3">
                  Orders
                </span>
              </div>

              <div className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                <img src={home_icon} alt="home-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  Homepage
                </span>
              </div>

              <div className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                <img src={about_icon} alt="about-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  About
                </span>
              </div>

              <div className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                <img src={contact_icon} alt="contact-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  Contact
                </span>
              </div>

              <div className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2">
                <img src={price_list_icon} alt="price-list-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  Price List
                </span>
              </div>

              <div
                className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2"
                onClick={showHistory}
              >
                <img src={pickup_icon} alt="pickup-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  Pickup History
                </span>
              </div>

              <div
                className=" w-[90%] h-[3.25rem] hover:bg-lime-200 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2"
                onClick={showSettings}
              >
                <img src={setting_icon} alt="setting-icon" />
                <span className="text-center text-neutral-500 text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                  Settings
                </span>
              </div>
            </div>
          </section>
          <section>
            <div className=" w-[90%] h-[3.25rem] hover:bg-red-300 mb-3 hover:rounded-[9px] flex items-center pl-4 duration-300 cursor-pointer mt-1 ml-2 text-neutral-500 hover:text-neutral-800">
              <img src={logout_icon} alt="logout-icon" />
              <span className="text-center   text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                Logout
              </span>
            </div>
          </section>
        </main>
      </nav>

      {/* Mobile Nav */}
      <main className="lg:hidden relative">
        <section>
          <aside
            className={
              showNav
                ? "fixed top-0 left-0 w-[65%] md:w-[50%] h-screen bg-white  duration-700 overflow-y-scroll delay-700 rounded-br-3xl overflow z-50"
                : "fixed top-[-100%] left-0 w-screen h-screen bg-white z-50 duration-700 overflow-y-scroll opacity-0 overflow"
            }
          >
            <div className="py-10 pl-2 md:pl-10 bg-lime-600 rounded-br-[40px] w-full">
              <img
                src={cancel_icon}
                alt="close-icon"
                className="absolute right-4 w-7 md:w-10 top-3 cursor-pointer"
                onClick={hideNav}
              />
              <aside className="flex items-center ">
                <img
                  src={user_img}
                  alt="useImg"
                  className="mr-2 w-16 md:w-20"
                />
                <aside>
                  <h1 className="text-white text-lg md:text-2xl font-bold leading-tight">
                    Andy Cophra
                  </h1>
                  <p className="text-white text-sm md:text-xl font-bold leading-tight">
                    +91 23940839400
                  </p>
                  <span className="flex mr-1">
                    <img src={location_icon} alt="location_icon" />
                    <p className="text-white text-sm md:text-xl font-bold leading-tight">
                      India
                    </p>
                  </span>
                </aside>
              </aside>
            </div>

            <nav className="font-['Gilroy-Regular'] h-full">
              <div className="flex justify-between flex-col h-3/4 ">
                <ul className="flex flex-col px-1 py-4 text-gray-800 font-semibold mt-1">
                  <Link to="/">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={home_icon}
                        alt="home-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Homepage
                      </span>
                    </li>
                  </Link>

                  <Link to="/about">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={about_icon}
                        alt="about-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />

                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        About Us
                      </span>
                    </li>
                  </Link>
                  <Link to="/contact-us">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      {/* <TfiHeadphoneAlt
                        className="mx-3 mr-3 w-7 md:w-12"
                        size={22}
                      /> */}

                      <TfiHeadphoneAlt className="mx-3 mr-3 w-7 md:w-12 text-zinc-500" size={22} />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Contact Us
                      </span>
                    </li>
                  </Link>
                  <Link to="/pricing">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={price_list_icon}
                        alt="price-list-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Price List
                      </span>
                    </li>
                  </Link>

                  <Link to="/vendor-dashboard-order">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={pickup_icon}
                        alt="pickup-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Pickup History
                      </span>
                    </li>
                  </Link>

                  <Link to="/">
                    <li
                      onClick={hideNav}
                      className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-lime-400  duration-500 "
                    >
                      <img
                        src={setting_icon}
                        alt="pickup-icon"
                        className="mx-3 mr-3 w-7 md:w-12"
                      />
                      <span className="text-base md:text-xl text-zinc-400  hover:text-lime-400 font-normal font-['Gilroy-Medium'] leading-loose">
                        Settings
                      </span>
                    </li>
                  </Link>
                </ul>

                <section>
                  <div className=" font-bold cursor-pointer py-2 flex items-center hover:border-l-4 hover:border-red-300  duration-500 pl-2">
                    <img
                      src={logout_icon}
                      alt="logout-icon"
                      className="mx-3 mr-3 w-7 md:w-12"
                    />
                    <span className="text-center   text-base font-normal font-['Gilroy-Medium'] tracking-tight ml-3">
                      Logout
                    </span>
                  </div>
                </section>
              </div>
            </nav>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default VendorDashboardNav;
