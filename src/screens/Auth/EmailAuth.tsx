
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useRef, useState } from "react";
import { GiverrAuth, giverrDarkLogo,  leftArrow,  rightArrow } from "../../assets/Icons";
import PrimaryBtn from "../../component/common/PrimaryBtn"; // Assuming you saved PrimaryBtn
import { useNavigate } from "react-router-dom";
import SecondaryBtn from "../../component/common/SecondaryBtn";
import PrimaryInput from "../../component/common/PrimaryInput";

const EmailAuth = () => {
    const navigate = useNavigate();
 
  
  return (
    <section className="flex h-screen  overflow-hidden bg-white">
      <div className=" flex-1 ">
        <img src={GiverrAuth} className="h-screen w-full object-cover object-bottom" />
      </div>
      <div className="flex-1 flex  justify-center  overflow-y-auto">
        <div className="w-[70%]  h-full flex justify-between flex-col py-10">

        <div>
        <img src={giverrDarkLogo} className="h-20 w-20 mb-10" alt="Giverr Logo" />
          <h1 className="text-xl font-semibold mb-5">Enter your email address 

            </h1>
            <p  
        
            className=" text-xs cursor-pointer">
            Add your email to aid in account recovery
        </p>
    <div>
    <PrimaryInput
                  label="Email"
                  name="emailname"
                  placeholder="Enter Your Email Address"
                  value={''}
                  onChange={()=>{}}
                />
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

export default EmailAuth;

