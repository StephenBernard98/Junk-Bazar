import React from "react";
import Button from "../../auth/Button";
import customer from "../../../assets/PNG/tractor 2.png";
import Input from "../../auth/Input";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import { useNavigate } from "react-router-dom";
import SmallDevices from "../components/SmallDevices";

const VendorSignup = () => {
  const [state, setState] = React.useState({
    phoneNumber: "",
    vendorName: "",
    landmark: "",
    password: "",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [checked, setChecked] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const inputs = [
    {
      name: "vendorName",
      type: "text",
      value: state.vendorName,
      label: "Vendor name",
    },

    {
      name: "landmark",
      type: "text",
      value: state.landmark,
      label: "Landmark",
    },
    {
      name: "phoneNumber",
      type: "number",
      value: state.phoneNumber,
      label: "Phone number",
    },
    {
      name: "password",
      type: "password",
      value: state.password,
      label: "Password",
    },
  ];

  const handleChange = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  let pages = [];
  for (let index = 0; index < 3; index++) {
    pages = [...pages, index + 1];
  }

  const renderer =
    currentPage === 1 ? (
      <StepOne inputs={inputs} handleChange={handleChange} />
    ) : currentPage === 2 ? (
      <StepTwo />
    ) : (
      <StepThree />
    );

  return (
    <>
      <SmallDevices />
      <div className="flex flex-col signup-container lg:pl-[50px] lg:pr-[50px]">
        <div className="p-5 width">
          <h2 className="head text-[38px] md:text-[48px] mt-10 mb-2 font-[600] text-white hidden">
            Welcome To <span className="text-[#5AB344]">JunkBazar</span>
          </h2>
          <p className="head hidden text-[20px] md:text-[24px] text-white font-[400]">
            Sign up to enjoy exclusive access!
          </p>
          <img
            src={customer}
            alt=""
            className="signup-img w-[251px] h-[251px] mx-auto xs:w-[320px] xs:h-[450px] max-w-[886px] lg:h-[500px]"
          />
        </div>
        <div className="form-data-content width pl-12 pr-12 p-6 mr-5 w-full max-w-[772px] bg-white">
          <h2 className="text-[#333333] font-semibold text-[24px] mt-6 mb-2 xs:text-[28px]">
            Sign up now
          </h2>
          <p className="text-[#707070] text-[16px] font-medium mt-0 xs:text-[19px]">
            Create a new account in three simple steps
          </p>
          <div className="w-full flex justify-between mt-8 mb-5">
            {pages.map((page) => (
              <div
                key={page}
                className={`w-[28.23px] h-[28.23px] rounded-full text-white font-semibold text-center pt-[2px] pr-[1px] cursor-pointer ${
                  page === currentPage ? "active" : "not-active"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </div>
            ))}
          </div>
          <form className="mt-11">
            {renderer}
            <p className="text-[14px] text-[#666666] font-semibold mt-10 mb-5">
              <Input
                type="checkbox"
                classname="w-[18px] h-[18px] bg-[#5AB344] mr-2 translate-y-1 cursor-pointer"
                value={checked}
                checked={checked}
                handleChange={() => setChecked((prevState) => !prevState)}
              />{" "}
              By creating an account, I agree to our
              <span className="underline cursor-pointer">
                Terms of use
              </span> and{" "}
              <span className="underline cursor-pointer">Privacy Policy </span>
            </p>
            <Button
              label={loading ? "Please wait ...." : "Continue"}
              classname="font-semibold text-[19px] p-[2] text-center bg-[#5AB344] w-full text-white rounded-[27px] outline-none border-none h-[55px] hover:opacity-80"
              handleClick={() => setCurrentPage(currentPage + 1)}
            />
            <p className="text-[#333333] text-[16px] font-[400] text-center mt-5 -mb-3">
              Already have an account?{" "}
              <span
                className="font-semibold cursor-pointer underline hover:text-[#5AB344]"
                onClick={() => navigate("/vendor-signin")}
              >
                Sign in
              </span>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default VendorSignup;
