import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coursesService from "./CoursesService";

const initialState = {
  courses: [],
  currentCourse: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (course, thunkAPI) => {
    try {
      return await coursesService.createCourse(course);
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

export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async (thunkAPI) => {
    try {
      return await coursesService.getCourses();
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

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (courseId, thunkAPI) => {
    try {
      return await coursesService.getCourseById(courseId);
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

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    like: (state, action) => {
      state.courses[action.payload].likes++;
    },
    addSchool: (state, action) => {
      state.courses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = [...state.courses, action.payload];
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.courses = null;
      })
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.courses = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.courses = [];
      })
      .addCase(getCourseById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCourseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentCourse = action.payload;
      })
      .addCase(getCourseById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currentCourse = {};
      });
  },
});

export default coursesSlice.reducer;
export const schoolsActions = coursesSlice.actions;
