import { userState , userValues } from "@/Types/userType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const initialState:userState = {
    token : localStorage.getItem('token')
}
export const userLogin = createAsyncThunk<any, userValues>(
  "userSlice/userLogin",
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.post("https://linked-posts.routemisr.com/users/signin", values);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);
export const userSlice = createSlice ({
    name: 'userSlice',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled , (state , action)=>{
            state.token = action.payload.token
            localStorage.setItem('token' , action.payload.token)
            toast.success(action.payload.message)
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        builder.addCase(userLogin.rejected , (state , action)=>{
            toast.error('Invalid Credentials')
        })
    }
})

export const userReducer = userSlice.reducer