import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

// export const baseUrl = "http://192.168.100.30:3009/api/v1";
// export const baseUrlImg = "http://192.168.100.30:3009";
// export const baseUrlImg1 = "http://192.168.100.30:3009/";
// export const baseUrl1 = "http://192.168.100.30:3009/";

export const baseUrl = "https://giverrapis.veriorinc.com/api/v1";
export const baseUrlImg = "https://giverrapis.veriorinc.com";
export const baseUrlImg1 = "https://giverrapis.veriorinc.com/";
export const baseUrl1 = "https://giverrapis.veriorinc.com/";

export const socket =  io(baseUrl1)


export const getConfig = () => ({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("DonorUserToken")}`,
  },
});

export const getConfigFormData = () => ({
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("DonorUserToken")}`,
  },
});

// admin@dbweb.com pass : 263122
const initialState = {
  ProfilePicture: {},
  profileImg: "",
  isLoading: false,
  isError: false,

 
};

const Slicer = createSlice({
  name: "slicer",

  initialState,
  reducers: {
   

  },
});
export const {
  
} = Slicer.actions;
export default Slicer.reducer;
