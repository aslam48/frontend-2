import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/base_url";
import { setUser } from "../auth/authSlice";

export const getAllProfiles = createAsyncThunk(
    'profile/getAllProfiles',
    async(arg, thunkAPI) =>{
        try {
            const res = await axios.get(`${baseUrl}/api/profile`, {
                "Content-type": "application/json",
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.data)
        }
    }
)

export const updateProfile = createAsyncThunk(
    'profile/update',
    async(values, thunkAPI) =>{
        try {
            const res = await axios.patch(`${baseUrl}/api/profile/personal`, values, {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const {user} = thunkAPI.getState()
            if(res.data.user){
                thunkAPI.dispatch(setUser(res.data.user))
                localStorage.setItem('user', JSON.stringify(res.data.user))
            }
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue('something went wrong')
        }
    }
)

const date = new Date()
let month = date.getMonth() + 1
month = date.getMonth() < 10 ? '0' + month.toString() : month
const defaultDateOfBirth = `${date.getFullYear()}-${month}-${date.getDate()}`
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        personalProfile: {
            bio: 'my beatiful bio',
            birthday: defaultDateOfBirth,
            city: 'my city',
            country: 'my country'
        },
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

            .addCase(updateProfile.fulfilled, (state, {payload}) =>{
                state.isLoading = false
                if(payload){
                    state.personalProfile = payload.personalProfile
                }else{
                    state.errorMessage = 'Something went wrong'
                }
            })
            .addCase(updateProfile.rejected, (state, action)=>{
                state.errorMessage = action.payload
                state.isLoading = false
            })
            .addCase(updateProfile.pending, (state, action)=>{
                state.isLoading = false
            })
    }
})

export default profileSlice.reducer