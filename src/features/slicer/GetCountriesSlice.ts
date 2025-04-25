/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Country {
  name: string;
  flag: string;
  code: string;
  phoneCode: string;
  officialName: string;
  region: string;
  capital: string;
}

interface CountriesState {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  countries: [],
  isLoading: false,
  error: null,
};

// export const fetchCountries = createAsyncThunk(
//   'countries/fetchCountries',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         'https://countriesnow.space/api/v0.1/countries/info?returns=currency,flag,unicodeFlag,dialCode'
//       );

//       if (!data || !data.data) throw new Error("Invalid API response");

//       const formattedCountries = data.data
//         .map((country: any) => ({
//           name: country.name,
//           flag: country.flag,
//           code: country.unicodeFlag || country.code, // Fallback to code if unicodeFlag is not available
//           phoneCode: country.dialCode,
//         }))
//         .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
//       return formattedCountries;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || 'Failed to fetch countries');
//     }
//   }
// );
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://restcountries.com/v3.1/all');
      
      const formattedCountries = data
        .map((country: any) => ({
          name: country.name.common,
          flag: country.flags.png,
          code: country.cca2,
          phoneCode: country.idd?.root + (country.idd?.suffixes ? country.idd.suffixes[0] : ''),
          officialName: country.name.official,
          region: country.region,
          capital: country.capital ? country.capital[0] : ''
        }))
        .sort((a: Country, b: Country) => a.name.localeCompare(b.name));

        console.log(formattedCountries, 'formattedCountries')
      return formattedCountries;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch countries');
    }
  }
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default countriesSlice.reducer;