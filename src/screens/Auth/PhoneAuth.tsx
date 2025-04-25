
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { GiverrAuth, giverrDarkLogo,  leftArrow,  rightArrow } from "../../assets/Icons";
import PrimaryBtn from "../../component/common/PrimaryBtn"; // Assuming you saved PrimaryBtn
import { useNavigate } from "react-router-dom";
import SecondaryBtn from "../../component/common/SecondaryBtn";
import { useDispatch, useSelector } from "react-redux";
import PhoneInputWithCountry from "../../component/common/PhoneInputWithCountry";
import { fetchCountries } from "../../features/slicer/GetCountriesSlice";

const PhoneAuth = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const { countries } = useSelector((state: any) => state.countriesSlice,
);
 
   useEffect(() => {
     dispatch(fetchCountries() as any);
   }, [dispatch]);
 
  return (
    <section className="flex h-screen  overflow-hidden bg-white">
      <div className=" flex-1 ">
        <img src={GiverrAuth} className="h-screen w-full object-cover object-bottom" />
      </div>
      <div className="flex-1 flex  justify-center  overflow-y-auto">
        <div className="w-[70%]  h-full flex justify-between flex-col py-10">

        <div>
        <img src={giverrDarkLogo} className="h-20 w-20 mb-10" alt="Giverr Logo" />
          <h1 className="text-xl font-semibold mb-5">Enter your Phone Number 

            </h1>
            <p  
        
            className=" text-xs cursor-pointer">
Add your phone number to aid in account recovery</p>
    <div>
    <PhoneInputWithCountry countries={countries} />

    </div>

        </div>

        <div className=" flex justify-between w-full">
<SecondaryBtn

iconSrc={leftArrow}
iconStyle="w-5 h-5"
     className="w-fit bg-bgSecondary rounded-full capitalize font-normal"  onClick={()=>{
        navigate('/verify-phone-otp')
    }} />
<PrimaryBtn 
    icon={rightArrow}
    iconStyle="w-3 h-3"
    onClick={()=>{
        navigate('/add-username')
    }}
label="Next" className="w-fit bg-bgPrimary rounded-full capitalize font-normal"  />
        </div>
          
        </div>
      </div>
    </section>
  );
};

export default PhoneAuth;

