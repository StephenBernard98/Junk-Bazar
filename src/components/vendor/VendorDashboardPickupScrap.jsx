import location from "../../assets/SVG/dashboard/location_icon.svg";
import contact_icon from "../../assets/SVG/dashboard/contact_icon.svg";
import telephone from "../../assets/SVG/dashboard/telephone.svg";
import VendorDashboardNav from "./VendorDashboardNav";
import VendorDashboardHead from "./VendorDashboardHead";

const VendorDashboardPickupScrap = () => {
  return (
    <main className=" bg-white">
      <VendorDashboardNav />
      <VendorDashboardHead />
      <section className="ml-[18%] pt-[8%] h-full ">
        <aside className="mb-3 pb-8 flex justify-between bg-white border p-3 pr-16 border-neutral-300 rounded-sm mx-8 h-full">
          <div className="">
            <h1 className=" text-neutral-700 text-2xl font-normal font-['Gilroy-Bold'] leading-9 tracking-tight p-2">
              A New Order
            </h1>
            <div className="flex justify-between w-full">
              <div className="w-full">
                <div className="flex p-2">
                  <img src={location} alt="location_icon" className="mr-2" />
                  <div className="">
                    <p className=" text-neutral-600 text-base font-normal font-['Gilroy-Bold']">
                      Dehli, Groove Estate
                    </p>
                    <p className=" text-zinc-600 text-sm font-normal font-['Gilroy-Regular'] ">
                      234, Knight St Cedar Lake,Groove Estate, Mumbai, India
                    </p>
                  </div>
                </div>
                <div className="flex p-2">
                  <img src={contact_icon} alt="contact_icon" className="mr-2" />
                  <div className="">
                    <p className=" text-neutral-600 text-base font-normal font-['Gilroy-Bold']">
                      Amit Harsh
                    </p>
                    <p className=" text-zinc-600 text-sm font-normal font-['Gilroy-Regular'] ">
                      234, Knight St Cedar Lake,Groove Estate, Mumbai, India
                    </p>
                  </div>
                </div>
                <div className="flex p-2 items-end">
                  <img
                    src={telephone}
                    alt="telephone_icon"
                    className="mr-2 w-6 "
                  />

                  <p className="text-center text-lime-600 text-lg font-bold leading-[29.09px] tracking-wider">
                    {" "}
                    +91 4529405234
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-end items-end">
              <button className="text-center text-white text-base font-semibold bg-lime-600 hover:bg-transparent hover:border-2 hover:border-zinc-500 hover:text-zinc-500 duration-200 flex items-center justify-center shadow-inner rounded-full  mt-5 cursor-pointer px-7 py-[.65rem] border-2 border-lime-600 tracking-wide">
                I have Pickup Scrap
              </button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default VendorDashboardPickupScrap;
