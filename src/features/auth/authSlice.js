import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const localLogin = createAsyncThunk(
    'auth/localLogin',
    async(values, thunkAPI) =>{
        console.log('logging in ...: ', values)
        try {
            const res = await axios.post('https://runor-backend.onrender.com/api/auth/login', {
                email: values.email,
                password: values.password
            })
            // console.log('from api:', res.data)
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue('Something went wrong')
            return error.response.data.msg
        }
    }
)

export const localSignup = createAsyncThunk(
    'auth/localSignup',
    async(values, thunkAPI) => {
        try {
            const res = await axios.post('https://runor-backend.onrender.com/api/auth/signup', {
                email: values.email,
                password: values.password,
                otherName: values.otherName,
                firstName: values.firstName
            })
            return res.data
        } catch (error) {
            thunkAPI.rejectWithValue('Something went wrong')
            return error.response.data.msg   
        }
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null, 
        userLoading: true, 
        message: ''
    },
    reducers: {
        setUser: (state, {payload}) => {
            state.user = payload
        }, 
        clearUser: (state) => {
            state.user = null
        },
        clearMessage: (state)=>{
            state.message = ''
        }
    }, 

    extraReducers: (builder) =>{
        builder
            .addCase(localLogin.pending,  (state) =>{
                state.userLoading = true
                state.message = 'Please wait...'
            })
            .addCase(localLogin.fulfilled, (state, action) => {
                if(action.payload.user){
                    state.userLoading = false
                    state.user = action.payload.user
                    state.message = action.payload.message
                    console.log('user:', action.payload.user)
                }else{
                    state.message = action.payload
                }
            })
            .addCase(localLogin.rejected, (state, {payload}) => {
                state.userLoading = false
                state.message = 'Login failed'
            })
            .addCase(localSignup.pending, (state) =>{
                state.userLoading = true
            })
            .addCase(localSignup.fulfilled, (state, action) =>{
                state.userLoading = false
                if(action.payload.user){
                    state.userLoading = false
                    state.user = action.payload.user
                    state.message = action.payload.message
                }else{
                    state.message = action.payload
                }
            })
            .addCase(localSignup.rejected, (state) =>{
                state.userLoading = false
                state.message = 'Sign up failed'
            })
        }
    }
)

export const {setUser, clearUser, clearMessage} = authSlice.actions
export default authSlice.reducer