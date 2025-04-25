import React, { useState } from "react";
import { 
  GiverrAuth, 
  giverrDarkLogo, 
  googleIcon,
  phoneIcon, 
} from "../../assets/Icons";
import PrimaryBtn from "../../component/common/PrimaryBtn";
import SecondaryBtn from "../../component/common/SecondaryBtn";
import PrimaryInput from "../../component/common/PrimaryInput";
import { useNavigate } from "react-router-dom";

const SignUpAuthEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
      navigate('/verify-email-otp');
  };

  return (
    <section className="flex h-screen overflow-hidden bg-white">
      <div className="flex-1">
        <img src={GiverrAuth} className="h-screen w-full object-cover object-bottom" alt="Auth background" />
      </div>
      <div className="flex-1 flex  justify-center  overflow-y-auto">
        <div className="w-[70%] h-full flex justify-between flex-col py-10">
          <div>
            <img src={giverrDarkLogo} className="h-20 w-20 mb-10" alt="Giverr Logo" />
            <h1 className="text-xl font-semibold mb-5">Start Your Journey</h1>
            <p className="mb-5">Enter your credentials and begin.</p>

            <div className="flex flex-col gap-4">
              <PrimaryInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={handleEmailChange}
              />

              <PrimaryBtn
                label="Continue"
                className="bg-bgPrimary capitalize font-normal"
                onClick={handleSubmit}
              />

              <div className="flex items-center justify-between mt-5">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="mx-2 text-gray-500">or</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>

              <SecondaryBtn
                text="Continue with Google"
                iconStyle="w-8 h-8"
                className="bg-bgSecondary capitalize font-semibold text-bgPrimary py-2 px-2"
                iconSrc={googleIcon}
              />
 <SecondaryBtn text="Continue with Email"
            iconStyle="w-8 h-8"
            onClick={() => navigate('/signupWithEmail')}
            className="bg-bgSecondary capitalize font-semibold text-bgPrimary py-2 px-2"
            iconSrc={phoneIcon} />
              <div>
                <p className="underline text-xs text-center font-semibold">
                  Continue as a Guest
                </p>
                <div className="flex items-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    className="mt-2"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                  <div className="text-xs">
                    <p className="mb-1 text-base font-semibold">
                      Accept our Terms & Review Privacy Notice
                    </p>
                    <p>
                      By selecting "I Agree" below, I have reviewed and agree to the Terms of Use 
                      and acknowledge the Privacy Notice. I am at least 18+ years of age.
                    </p>
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

export default SignUpAuthEmail;