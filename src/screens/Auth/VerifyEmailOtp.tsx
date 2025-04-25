/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useEffect, useRef, useState } from "react";
import { GiverrAuth, giverrDarkLogo,  rightArrow } from "../../assets/Icons";
import PrimaryBtn from "../../component/common/PrimaryBtn"; // Assuming you saved PrimaryBtn
import { useNavigate } from "react-router-dom";

const VerifyEmailOtp = () => {
    const navigate = useNavigate();
    const inputRefs = useRef<any>([]);
    const [otp, setOtp] = useState(Array(5).fill(""));
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);
  
    useEffect(() => {
      let interval: any;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
      } else {
        setCanResend(true);
      }
      return () => clearInterval(interval);
    }, [timer]);
  
    const handleResendOTP = () => {
      // Add your resend OTP API call here
      setTimer(30);
      setCanResend(false);
      // Reset OTP fields
      setOtp(Array(5).fill(""));
    };
    const handleChange = (index:any, value:any) => {
        const newOtp = [...otp];
        newOtp[index] = value.replace(/[^0-9]/g, "");
        setOtp(newOtp);
     
        if (value && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      };
     
      function handleBackspace(event:any, index:any ) {
        if (event.key === "Backspace" && !event.target.value && index > 0) {
        //   console.log(inputRefs.current[index - 1]);
          inputRefs.current[index - 1].focus();
        }
      }
  console.log(canResend,'ss')
  return (
    <section className="flex h-screen  overflow-hidden bg-white">
      <div className=" flex-1 ">
        <img src={GiverrAuth} className="h-screen w-full object-cover object-bottom" />
      </div>
      <div className="flex-1 flex  justify-center  overflow-y-auto">
        <div className="w-[70%]  h-full flex justify-between flex-col py-10">

        <div>
        <img src={giverrDarkLogo} className="h-20 w-20 mb-10" alt="Giverr Logo" />
          <h1 className="text-xl font-semibold mb-5">Enter the 5-digit code sent to you at 

            <span className="text-blue-600 font-semibold">
                <br/>

          biggorillaApps.com
            </span>
            </h1>
            <p  
            onClick={
                () => {
                    navigate('/signupWithEmail')
                }
            }
            className="underline text-xs cursor-pointer">
            Change your emailAddress?
        </p>
    <div>
    <div>
            {/* ...existing code... */}
            <div className="my-4 flex items-center justify-start gap-2">
              {otp.map((digit, index) => (
                <React.Fragment key={index}>
                  <input
                    type="text"
                    maxLength={1}
                    className="w-10 h-10 border bg-bgSecondary rounded-md text-center text-lg focus:border-blue-500 focus:outline-none"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                </React.Fragment>
              ))}
            </div>
            
            <div className="mt-4 text-start">
              {timer > 0 ? (
                <p className="bg-bgSecondary rounded-full w-fit px-4 py-2 text-xs">
                  Resend code in {timer} seconds
                </p>
              ) : (
                <PrimaryBtn
                  onClick={handleResendOTP}
                  label="Resend OTP"
                  className="w-fit bg-bgPrimary text-white hover:bg-bgPrimary rounded-full capitalize font-normal"
                />
              )}
            </div>
          </div>
    </div>

        </div>

        <div className=" flex justify-end w-full">
<PrimaryBtn 
    icon={rightArrow}
    iconStyle="w-3 h-3"
    onClick={()=>{
        navigate('/verify-phone-verification')
    }}
label="Next" className="w-fit bg-bgPrimary rounded-full capitalize font-normal"  />
        </div>
          
        </div>
      </div>
    </section>
  );
};

export default VerifyEmailOtp;
// 