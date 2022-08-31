import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "./schoolService";

const initialState = {
  schools: [],
  currentSchool: {},
  searchedSchools: [],
  schoolId: null,
  trainersId: [],
  trainersForThisSchool: [],
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

export const updateSchoolLikes = createAsyncThunk(
  "schools/updateSchoolLikes",
  async (schoolId, thunkAPI) => {
    try {
      return await schoolService.updateSchoolLikes(schoolId);
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

export const getSearchedSchool = createAsyncThunk(
  "schools/getSearchedSchool",
  async (schoolData, thunkAPI) => {
    try {
      return await schoolService.getSearchedSchool(schoolData);
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

export const editSchool = createAsyncThunk(
  "schools/editSchool",
  async (schoolData, thunkAPI) => {
    try {
      return await schoolService.editSchool(schoolData);
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

export const addSchoolsAndTrainers = createAsyncThunk(
  "schools/addSchoolsAndTrainers",
  async (school, thunkAPI) => {
    try {
      return await schoolService.addSchoolsAndTrainers(school);
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

export const getBySchool = createAsyncThunk(
  "schools/getBySchool",
  async (schoolId, thunkAPI) => {
    try {
      return await schoolService.getBySchool(schoolId);
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
        state.schoolId = action.payload.id;
        state.trainersId = [action.payload.trainerId]
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
      })
      .addCase(updateSchoolLikes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSchoolLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentSchool.likes++;
      })
      .addCase(updateSchoolLikes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.schools = {};
      })
      .addCase(getSearchedSchool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchedSchool.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.searchedSchools = action.payload;
      })
      .addCase(getSearchedSchool.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.searchedSchools = [];
      })
      .addCase(editSchool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editSchool.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editSchool.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addSchoolsAndTrainers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSchoolsAndTrainers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addSchoolsAndTrainers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBySchool.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBySchool.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainersForThisSchool = action.payload;
      })
      .addCase(getBySchool.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trainersForThisSchool = null;
      });
  },
});

export default schoolsSlice.reducer;
export const schoolsActions = schoolsSlice.actions;
