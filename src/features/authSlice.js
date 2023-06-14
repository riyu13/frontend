import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const initialState = {
  user: null,
  pesertamagang: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
};

// Mendapatkan token dari local storage
const getToken = () => localStorage.getItem("token");

// Menyimpan token ke local storage
const saveToken = (token) => localStorage.setItem("token", token);

export const LoginUser = createAsyncThunk(
  "User/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: user.email,
        password: user.password
      });
      const token = response.data.token;
      const decoded = jwt_decode(token);
      saveToken(token);
      console.log("LoginUser Token:", token); // Tambahkan console.log untuk token
      return decoded;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        console.log("LoginUser Error:", message); // Tambahkan console.log untuk pesan error
        return thunkAPI.rejectWithValue(message);
      } else {
        console.log("LoginUser Error:", "Server sedang maintenance"); // Tambahkan console.log untuk pesan error
        return thunkAPI.rejectWithValue("Server sedang maintenance");
      }
    }
  }
);

// Tambahkan console.log untuk informasi token
export const getMe = createAsyncThunk("User/getMe", async (_, thunkAPI) => {
  try {
    const token = getToken();
    console.log("getMe Token:", token);
    const response = await axios.get("http://localhost:5000/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      console.log("getMe Error:", message); // Tambahkan console.log untuk pesan error
      return thunkAPI.rejectWithValue(message);
    } else {
      console.log("getMe Error:", "Server sedang maintenance"); // Tambahkan console.log untuk pesan error
      return thunkAPI.rejectWithValue("Server sedang maintenance");
    }
  }
});

export const LoginPesertaMagang = createAsyncThunk(
  "PesertaMagang/LoginPesertaMagang",
  async (pesertamagang, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:5000/login2", {
        email: pesertamagang.email,
        password: pesertamagang.password
      });
      const token = response.data.token;
      const decoded = jwt_decode(token);
      saveToken(token);
      console.log("LoginPesertaMagang Token:", token); // Tambahkan console.log untuk token
      return decoded;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        console.log("LoginPesertaMagang Error:", message); // Tambahkan console.log untuk pesan error
        return thunkAPI.rejectWithValue(message);
      } else {
        console.log("LoginPesertaMagang Error:", "Server sedang maintenance"); // Tambahkan console.log untuk pesan error
        return thunkAPI.rejectWithValue("Server sedang maintenance");
      }
    }
  }
);

// Tambahkan console.log untuk informasi token
export const getMe2 = createAsyncThunk("PesertaMagang/getMe2", async (_, thunkAPI) => {
  try {
    const token = getToken();
    console.log("getMe2 Token:", token);
    const response = await axios.get("http://localhost:5000/me2", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      console.log("getMe2 Error:", message); // Tambahkan console.log untuk pesan error
      return thunkAPI.rejectWithValue(message);
    } else {
      console.log("getMe2 Error:", "Server sedang maintenance"); // Tambahkan console.log untuk pesan error
      return thunkAPI.rejectWithValue("Server sedang maintenance");
    }
  }
});

export const LogOut = createAsyncThunk("User/LogOut", async () => {
  await axios.delete("http://localhost:5000/logout");
  localStorage.removeItem("token");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(LoginPesertaMagang.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginPesertaMagang.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.pesertamagang = action.payload;
    });
    builder.addCase(LoginPesertaMagang.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe2.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe2.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.pesertamagang = action.payload;
    });
    builder.addCase(getMe2.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(LogOut.fulfilled, (state) => {
      state.user = null;
      state.pesertamagang = null;
      state.isSuccess = false;
      state.isLoading = false;
    });
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
