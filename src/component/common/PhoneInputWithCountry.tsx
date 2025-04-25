import { useEffect, useState, useRef } from "react";

interface Country {
  name: string;
  flag: string;
  code: string;
  phoneCode: string;
  officialName: string;
  region: string;
  capital: string;
}

const PhoneInputWithCountry = ({ countries }: { countries: Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set default country if you want (like US or GB)
    if (countries.length) {
      setSelectedCountry(countries.find(c => c.code === "GB") || countries[0]);
    }
  }, [countries]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setPhoneNumber(country.phoneCode + " ");
    setDropdownOpen(false);
  };

  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    if (selectedCountry && !value.startsWith(selectedCountry.phoneCode)) {
      return;
    }
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base  font-medium">Enter Number</label>

      <div className="flex  gap-4 items-center">
        {/* Country Selector */}
        <div ref={dropdownRef} className="relative ">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center bg-bgSecondary  px-3 py-2 rounded-lg gap-2 focus:outline-none"
          >
            {selectedCountry && (
              <img
                src={selectedCountry.flag}
                alt="flag"
                className="w-8 h-8 object-cover rounded-full"
              />
            )}
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 w-40 max-h-60 overflow-y-auto mt-2 bg-white  border rounded-md shadow-lg">
              {countries.map((country) => (
                <div
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img src={country.flag} alt={country.name} className="w-5 h-3 object-cover" />
                  <span className="text-sm">{country.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Phone Input */}
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 flex-1 focus:outline-none focus:ring-1 focus:ring-bgPrimary"
          placeholder="+1 234 567 890"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default PhoneInputWithCountry;
