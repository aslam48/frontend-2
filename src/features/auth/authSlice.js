import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    name: 'auth',
    user: {},
    isloading: false,
}
export const loginUser = createAsyncThunk(
    'login',
    async(name, thunkAPI) =>{
        try{
            const response = await axios('login-url')
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue('Somthing went wrong')
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        userLogOut: (state)=>{
            state.user = {}
        }
    },
    extraReducers: {
        [loginUser.pending]: (state, action)=>{
            state.isloading = true
        },
        [loginUser.fulfilled]: (state, action)=>{
            state.user = action.payload
        },
        [loginUser.rejected]: (state, action)=>{
            state.isloading = false
        }
    } 
})

export const {userLogOut} = authSlice.actions;
export default authSlice.reducer;