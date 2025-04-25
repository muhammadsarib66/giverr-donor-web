/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  GiverrAuth,
  giverrDarkLogo,
  leftArrow,
  rightArrow,
} from "../../assets/Icons";
import PrimaryBtn from "../../component/common/PrimaryBtn";
import SecondaryBtn from "../../component/common/SecondaryBtn";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import PrimaryInput from "../../component/common/PrimaryInput";

const AddAddress = () => {
  const navigate = useNavigate();

  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [address, setAddress] = useState({
    city: "",
    state: "",
    street: "",
    postalCode: "",
    country: "",
  });

  const handleLocationToggle = async (checked: boolean) => {
    setUseCurrentLocation(checked);

    if (checked) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
              );
              const data = await response.json();
              const addressDetails = data.address || {};

              setAddress({
                city:
                  addressDetails.city ||
                  addressDetails.town ||
                  addressDetails.village ||
                  "",
                state: addressDetails.state || "",
                street: addressDetails.road || "",
                postalCode: addressDetails.postcode || "",
                country: addressDetails.country || "",
              });
            } catch (error) {
              console.error("Error fetching address:", error);
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    } else {
      // Reset address if toggle off
      setAddress({
        city: "",
        state: "",
        street: "",
        postalCode: "",
        country: "",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex h-screen overflow-hidden bg-white">
      <div className="flex-1">
        <img
          src={GiverrAuth}
          className="h-screen w-full object-cover object-bottom"
          alt="Auth Background"
        />
      </div>
      <div className="flex-1 flex justify-center overflow-y-auto">
        <div className="w-[70%] h-full flex justify-between flex-col py-10">
          {/* Content */}
          <div className="space-y-2">
            <img
              src={giverrDarkLogo}
              className="h-20 w-20 mb-10"
              alt="Giverr Logo"
            />
            <h1 className="text-xl font-semibold mb-5">
              Set a location for your account
            </h1>
            <p className="text-xs cursor-pointer">
              We use your address to help you find the best donation options
              nearby
            </p>

            <div className="flex justify-between items-center pt-4">
              <p className="text-sm font-semibold cursor-pointer">
                Use current location
              </p>
              <Switch
                crossOrigin={""}
                onPointerEnterCapture={""}
                onPointerLeaveCapture={""}
                checked={useCurrentLocation}
                onChange={(e) => handleLocationToggle(e.target.checked)}
              />
            </div>

            {/* Address Inputs */}
            <div>
              <div className="flex gap-4 w-full justify-between">
                <PrimaryInput
                  label="City"
                  name="city"
                  placeholder="Enter your city"
                  value={address.city}
                  onChange={handleChange}
                />
                <PrimaryInput
                  label="State"
                  name="state"
                  placeholder="Enter your state"
                  value={address.state}
                  onChange={handleChange}
                />
              </div>
              <PrimaryInput
                label="Street"
                name="street"
                placeholder="Enter your street"
                value={address.street}
                onChange={handleChange}
              />

              <div className="flex gap-4 w-full justify-between">
                <PrimaryInput
                  label="Postal Code"
                  name="postalCode"
                  placeholder="Enter postal code"
                  value={address.postalCode}
                  onChange={handleChange}
                />
                <PrimaryInput
                  label="Country"
                  name="country"
                  placeholder="Enter country"
                  value={address.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between w-full">
            <SecondaryBtn
              iconSrc={leftArrow}
              iconStyle="w-5 h-5"
              className="w-fit bg-bgSecondary rounded-full capitalize font-normal"
              onClick={() => navigate("/add-email-verification")}
            />
            <PrimaryBtn
              icon={rightArrow}
              iconStyle="w-3 h-3"
              onClick={() => navigate("/")}
              label="Next"
              className="w-fit bg-bgPrimary rounded-full capitalize font-normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAddress;
