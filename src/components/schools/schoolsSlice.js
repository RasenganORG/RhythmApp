import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "./schoolService";

const initialState = {
  schools: [],
  currentSchool: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createSchool = createAsyncThunk(
  "schools/createSchool",
  async (school, thunkAPI) => {
    try {
      return await schoolService.createSchool(school);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSchools = createAsyncThunk(
  "schools/getSchools",
  async (thunkAPI) => {
    try {
      return await schoolService.getSchools();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getSchoolById = createAsyncThunk(
  "schools/getSchool",
  async (schoolId, thunkAPI) => {
    try {
      return await schoolService.getSchoolById(schoolId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {
    like: (state, action) => {
      state.schools[action.payload].likes++;
    },
    addSchool: (state, action) => {
      state.schools.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSchool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSchool.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schools = [...state.schools, action.payload];
      })
      .addCase(createSchool.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.schools = null;
      })
      .addCase(getSchools.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchools.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schools = action.payload;
      })
      .addCase(getSchools.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.schools = [];
      })
      .addCase(getSchoolById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSchoolById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentSchool = action.payload;
      })
      .addCase(getSchoolById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currentSchool = {};
      });
  },
});

export default schoolsSlice.reducer;
// export const { like, addSchool } = schoolsSlice.actions;
export const schoolsActions = schoolsSlice.actions;
