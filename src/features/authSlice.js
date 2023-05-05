import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    pesertamagang: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const LoginUser = createAsyncThunk("User/LoginUser", async(user, thunkAPI) =>{
    try {
        const response = await axios.post('http://localhost:5000/login', {
            email: user.email,
            password: user.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe = createAsyncThunk("User/getMe", async(_, thunkAPI) =>{
    try {
        const response = await axios.get('http://localhost:5000/me');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LoginPesertaMagang = createAsyncThunk("PesertaMagang/LoginPesertaMagang", async(pesertamagang, thunkAPI) =>{
    try {
        const response = await axios.post('http://localhost:5000/login2', {
            email: pesertamagang.email,
            password: pesertamagang.password
        });
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getMe2 = createAsyncThunk("PesertaMagang/getMe2", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/me2');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOut = createAsyncThunk("User/LogOut", async() =>{
    await axios.delete('http://localhost:5000/logout');
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) =>{
        builder.addCase(LoginUser.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 
        })

        //Get User Login
        builder.addCase(getMe.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMe.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 
        })
        //////////////////////
        builder.addCase(LoginPesertaMagang.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(LoginPesertaMagang.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.pesertamagang = action.payload
        });
        builder.addCase(LoginPesertaMagang.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
        // ambil data peserta magang
        builder.addCase(getMe2.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getMe2.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.pesertamagang = action.payload;
        });
        builder.addCase(getMe2.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const {reset} = authSlice.actions;
export default authSlice.reducer;