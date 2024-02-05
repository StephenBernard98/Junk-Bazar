import { useState } from "react";
import AdminSideNavs from "../../AdminSideNavs";
import AdminDashboardHeader from "../../AdminDashboardHeader";
import { ImCancelCircle } from "react-icons/im";
import menu from "../../../../../assets/SVG/admin-dashboard/chats/menu.svg";
import message_green from "../../../../../assets/SVG/admin-dashboard/chats/message-green.svg";
import message_grey from "../../../../../assets/SVG/admin-dashboard/chats/message-grey.svg";
import circle from "../../../../../assets/SVG/admin-dashboard/chats/circle.svg";

const AdminNotifications = () => {
  const [adminNav, setAdminNav] = useState(false);
  const handleAdminNav = () => setAdminNav(true);
  const closeAdminNav = () => setAdminNav(false);
  const [showOption, setShowOption] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClick = (content) => {
    setInputValue(content);
    setShowOption(false);
  };

  return (
    <main>
      <AdminSideNavs showNav={adminNav} hideNav={closeAdminNav} />
      <AdminDashboardHeader
        handleNavClick={handleAdminNav}
        showNav={adminNav}
      />
      <section className="lg:ml-[18%] pt-[4.2rem] md:pt-[11%] lg:pt-[7%] md:bg-zinc-100 h-full">
        <aside className="max-w-[1100px] mx-auto ">
          <div className="hidden md:flex justify-between mx-5 items-center  bg-white p-6 rounded-lg relative">
            <div>
              <h2 className="font-bold text-xl text-neutral-700">
                Notification
              </h2>
            </div>

            <div className="flex ">
              <div className="relative mr-2 w-10/12">
                <div className="flex relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border-2 border-zinc-400 rounded-md px-2 py-1 outline-none tracking-wide"
                    placeholder="filter"
                  />
                  <div
                    className={`${
                      !showOption
                        ? "absolute bottom-3 right-3 "
                        : "absolute bottom-2 right-2 "
                    }`}
                  >
                    <img
                      src={menu}
                      alt="menu-icon"
                      className={`${
                        showOption ? "hidden" : "block"
                      } cursor-pointer `}
                      onClick={() => setShowOption(true)}
                    />
                    <ImCancelCircle
                      className={`${
                        !showOption ? "hidden" : "block"
                      } text-zinc-500 text-lg cursor-pointer`}
                      onClick={() => setShowOption(false)}
                    />
                  </div>
                </div>
                <div
                  className={`absolute right-0 pt-1 z-10 ${
                    showOption ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li
                      onClick={() => handleClick("Option 1")}
                      className="border-2 border-zinc-400 rounded-md px-10 py-3 mt-1 cursor-pointer text-gray-500 bg-white text-lg font-semibold"
                    >
                      Option 1
                    </li>
                    <li
                      onClick={() => handleClick("Option 2")}
                      className="border-2 border-zinc-400 rounded-md px-10 py-3 mt-1 cursor-pointer text-gray-500 bg-white text-lg font-semibold"
                    >
                      Option 2
                    </li>
                    <li
                      onClick={() => handleClick("Option 3")}
                      className="border-2 border-zinc-400 rounded-md px-10 py-3 mt-1 cursor-pointer text-gray-500 bg-white text-lg font-semibold"
                    >
                      Option 3
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <select
                  name="options"
                  id="options"
                  className="border-2 text-zinc-500 text-sm border-zinc-400 rounded-md p-[.4rem] outline-none tracking-wide cursor-pointer"
                >
                  <option
                    value="oldest"
                    className="text-zinc-500 px-2 py-1 outline-none tracking-wide"
                  >
                    Oldest
                  </option>
                  <option value="option-1">Option 1</option>
                  <option value="option-1">Option 2</option>
                  <option value="option-1">Option 3</option>
                </select>
              </div>
            </div>
          </div>

          <section className="bg-white md:mx-5 mt-4 rounded mx-1 md:p-3 mb-8 ">
            <h1 className="text-neutral-700 text-xl font-normal font-['Gilroy-Bold'] tracking-wide text-center md:hidden">
              Notification
            </h1>
            <aside>
              <div className="p-2 md:p-4 rounded-full bg-lime-50 flex justify-between h-full mt-4">
                <div className="flex ">
                  <img
                    src={message_green}
                    alt="message-icon"
                    className="w-7 md:w-10 mr-2"
                  />
                  <div>
                    <h1 className="font-bold text-neutral-600">
                      From Vikhram Sidney
                    </h1>
                    <p className="text-neutral-500 text-sm font-normal font-['Gilroy-Medium']">
                      Customer inputed the wrong address, and I am finding it
                      hard to locate sellers location
                    </p>
                  </div>
                </div>
                <img
                  src={circle}
                  alt="circle-icon"
                  className="w-3 mr-4 hidden md:block"
                />
              </div>

              <div className="p-2 md:p-4 rounded-full bg-lime-50 flex justify-between h-full mt-4">
                <div className="flex ">
                  <img
                    src={message_green}
                    alt="message-icon"
                    className="w-10 mr-2"
                  />
                  <div>
                    <h1 className="font-bold text-neutral-600">
                      From Vikhram Sidney
                    </h1>
                    <p className="text-neutral-500 text-sm font-normal font-['Gilroy-Medium']">
                      Customer inputed the wrong address, and I am finding it
                      hard to locate sellers location
                    </p>
                  </div>
                </div>
                <img
                  src={circle}
                  alt="circle-icon"
                  className="w-3 mr-4 hidden md:block"
                />
              </div>

              <div className="p-2 md:p-4 rounded-full bg-lime-50 flex justify-between h-full mt-4">
                <div className="flex ">
                  <img
                    src={message_green}
                    alt="message-icon"
                    className="w-10 mr-2"
                  />
                  <div>
                    <h1 className="font-bold text-neutral-600">
                      From Vikhram Sidney
                    </h1>
                    <p className="text-neutral-500 text-sm font-normal font-['Gilroy-Medium']">
                      Customer inputed the wrong address, and I am finding it
                      hard to locate sellers location
                    </p>
                  </div>
                </div>
                <img
                  src={circle}
                  alt="circle-icon"
                  className="w-3 mr-4 hidden md:block"
                />
              </div>

              <div className="p-2 md:p-4 rounded-full bg-violet-100 flex justify-between h-full mt-4">
                <div className="flex ">
                  <img
                    src={message_grey}
                    alt="message-icon"
                    className="w-10 mr-2"
                  />
                  <div>
                    <h1 className="font-bold text-neutral-600">
                      From Vikhram Sidney
                    </h1>
                    <p className="text-neutral-500 text-sm font-normal font-['Gilroy-Medium']">
                      Customer inputed the wrong address, and I am finding it
                      hard to locate sellers location
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 md:p-4 rounded-full bg-violet-100 flex justify-between h-full mt-4">
                <div className="flex ">
                  <img
                    src={message_grey}
                    alt="message-icon"
                    className="w-10 mr-2"
                  />
                  <div>
                    <h1 className="font-bold text-neutral-600">
                      From Vikhram Sidney
                    </h1>
                    <p className="text-neutral-500 text-sm font-normal font-['Gilroy-Medium']">
                      Customer inputed the wrong address, and I am finding it
                      hard to locate sellers location
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </aside>
      </section>
    </main>
  );
};

export default AdminNotifications;
