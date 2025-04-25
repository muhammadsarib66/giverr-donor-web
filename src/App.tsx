import { Route, Routes } from "react-router-dom"
import SignUpAuthPhone from "./screens/Auth/SignUpAuthPhone"
import VerifyPhoneOtp from "./screens/Auth/VerifyPhoneOtp"
import EmailAuth from "./screens/Auth/EmailAuth"
import UserName from "./screens/Auth/UserName"
import AddAddress from "./screens/Auth/AddAddress"
import SignUpAuthEmail from "./screens/Auth/SignUpAuthEmail"
import VerifyEmailOtp from "./screens/Auth/VerifyEmailOtp"
import PhoneAuth from "./screens/Auth/PhoneAuth"

const App = () => {
  return (
    <div>
      <Routes>
        {/* // Auth Routes  */}
        <Route path="*" element={<SignUpAuthPhone />} />
        <Route path="/signup-auth-phone" element={<SignUpAuthPhone />} />
        <Route path="/verify-phone-otp" element={<VerifyPhoneOtp />} />
        <Route path="/add-email-verification" element={<EmailAuth />} />
        <Route path="/add-username" element={<UserName />} />
        <Route path="/add-address" element={<AddAddress />} />
        {/* Auth login With Email  */}
        <Route path="/signupWithEmail" element={<SignUpAuthEmail />} />
        <Route path="/verify-email-otp" element={<VerifyEmailOtp />} />
        <Route path="/verify-phone-verification" element={<PhoneAuth />} />
        
      </Routes>



    </div>
  )
}

export default App