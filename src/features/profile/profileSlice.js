import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProfiles = createAsyncThunk(
    'profile/getAllProfiles',
    async(arg, thunkAPI) =>{
        try {
            console.log('token: ', localStorage.getItem('token'))
            const res = await axios.get('http://localhost:8000/api/profile', {
                "Content-type": "application/json",
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            console.log(res.data)
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.data)
        }
    }
)

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        personalProfile: null,
        serviceProfile: null,
        isLoading: true,
        errorMessage: ''
    },
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getAllProfiles.fulfilled, (state, {payload}) =>{
                console.log('fulfilled: ', payload)
                state.isLoading = false
                if(payload){
                    state.personalProfile = payload.personalProfile
                    state.serviceProfile = payload.serviceProfile
                }else{
                    state.errorMessage = 'Something went wrong'
                }
            })
            .addCase(getAllProfiles.rejected, (state, action)=>{
                state.errorMessage = action.payload
                state.isLoading = false
            })
            .addCase(getAllProfiles.pending, (state, action)=>{
                state.isLoading = true
            })
    }
})

export default profileSlice.reducer