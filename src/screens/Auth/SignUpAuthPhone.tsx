/* eslint-disable @typescript-eslint/no-explicit-any */
import { emailIcon, GiverAuthImg, giverrDarkLogo, googleIcon } from "../../assets/Icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../features/slicer/GetCountriesSlice";
import PrimaryBtn from "../../component/common/PrimaryBtn"; // Assuming you saved PrimaryBtn
import PhoneInputWithCountry from "../../component/common/PhoneInputWithCountry";
import SecondaryBtn from "../../component/common/SecondaryBtn";
import { useNavigate } from "react-router-dom";

const SignUpAuthPhone = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  countries } = useSelector((state: any) => state.countriesSlice,
);


  useEffect(() => {
    dispatch(fetchCountries() as any);
  }, [dispatch]);

  

  const handleSubmit = () => {
    navigate('/verify-phone-otp')

  };

  return (
    <section className="flex h-screen  overflow-hidden bg-white">
      <div className=" flex-1 ">
        <img src={GiverAuthImg} className="h-screen w-full object-cover object-bottom" />
      </div>
      <div className="flex-1 flex  justify-center  overflow-y-auto">
        <div className="w-[70%] h-fit  py-10">

        <img src={giverrDarkLogo} className="h-20 w-20 mb-10" alt="Giverr Logo" />
        <div>
          <h1 className="text-xl font-semibold mb-5">Start Your Journey</h1>
          <p className="mb-5">Enter your credentials and begin.</p>

          <div className="flex flex-col gap-4">
            {/* Country Dropdown */}
            <PhoneInputWithCountry countries={countries} />
<PrimaryBtn 


label="Continue" className="bg-bgPrimary capitalize font-normal" onClick={handleSubmit} />

   
          <div className="flex items-center justify-between mt-5">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-5">
            <SecondaryBtn text="Continue with Google"
            iconStyle="w-8 h-8"
            className="bg-bgSecondary capitalize font-semibold text-bgPrimary py-2 px-2"
            iconSrc={googleIcon} />
            <SecondaryBtn text="Continue with Email"
            iconStyle="w-8 h-8"
            onClick={() => navigate('/signupWithEmail')}
            className="bg-bgSecondary capitalize font-semibold text-bgPrimary py-2 px-2"
            iconSrc={emailIcon} />
    </div>
    <div>
        <p  className="underline text-xs text-center font-semibold">
            Continue as a Guest 
        </p>
        <div className="flex items-start gap-2 mt-4">
            <input type="checkbox" className="mt-2" />
            <div className="text-xs">
                <p className="mb-1 text-base font-semibold">Accept our Terms & Review Privacy Notice</p>
                <p>By selecting "I Agree" below, I have reviewed and agree to the Terms of Use and acknowledge the Privacy Notice. I am at least 18+ years of age.</p>
            </div>
        </div>
    </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SignUpAuthPhone;

