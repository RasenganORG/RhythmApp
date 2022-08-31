import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import coursesService from "./CoursesService";

const initialState = {
  courses: [],
  currentCourse: {},
  courseId: null,
  trainersId: [],
  trainersForThisCourse: {},
  searchedCourses: [],
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

export const getSearchedCourse = createAsyncThunk(
  "courses/getSearchedCourse",
  async (courseData, thunkAPI) => {
    try {
      return await coursesService.getSearchedCourse(courseData);
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

export const updateCourseLikes = createAsyncThunk(
  "courses/updateCourseLikes",
  async (courseId, thunkAPI) => {
    try {
      return await coursesService.updateCourseLikes(courseId);
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

export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async (courseData, thunkAPI) => {
    try {
      return await coursesService.editSchool(courseData);
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

export const addCoursesAndTrainers = createAsyncThunk(
  "courses/addCoursesAndTrainers",
  async (course, thunkAPI) => {
    try {
      return await coursesService.addCoursesAndTrainers(course);
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

export const getByCourseId = createAsyncThunk(
  "courses/getByCourseId",
  async (courseId, thunkAPI) => {
    try {
      return await coursesService.getByCourseId(courseId);
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
        state.courseId = action.payload.id;
        state.trainersId = [action.payload.trainers];
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
      })
      .addCase(getSearchedCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchedCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.searchedCourses = action.payload;
      })
      .addCase(getSearchedCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.searchedCourses = [];
      })
      .addCase(updateCourseLikes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCourseLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentCourse.likes++;
        // state.searchedCourses.find(
        //       (course) => course.id === action.payload.id
        //     ).likes++;
      })
      .addCase(updateCourseLikes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.searchedCourses = {};
      })
      .addCase(editCourse.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editCourse.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCoursesAndTrainers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCoursesAndTrainers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addCoursesAndTrainers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getByCourseId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByCourseId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainersForThisCourse = action.payload;
      })
      .addCase(getByCourseId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trainersForThisCourse = null;
      });
  },
});

export default coursesSlice.reducer;
export const schoolsActions = coursesSlice.actions;
