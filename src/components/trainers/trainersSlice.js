import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainerService from "./trainerService";

const initialState = {
  trainers: [],
  currentTrainer: {},
  coursesForThisTrainer: null,
  schoolsForThisTrainer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createTrainer = createAsyncThunk(
  "trainers/createTrainer",
  async (trainer, thunkAPI) => {
    try {
      return await trainerService.createTrainer(trainer);
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

export const getTrainers = createAsyncThunk(
  "trainers/getAllTrainers",
  async (thunkAPI) => {
    try {
      return await trainerService.getTrainers();
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

export const getTrainerById = createAsyncThunk(
  "trainers/getTrainer",
  async (trainerId, thunkAPI) => {
    try {
      return await trainerService.getTrainerById(trainerId);
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

export const updateTrainerLikes = createAsyncThunk(
  "trainers/updateTrainerLikes",
  async (trainerId, thunkAPI) => {
    try {
      return await trainerService.updateTrainerLikes(trainerId);
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

export const editTrainer = createAsyncThunk(
  "trainers/editTrainer",
  async (trainerData, thunkAPI) => {
    try {
      return await trainerService.editTrainer(trainerData);
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


export const getByTrainerId = createAsyncThunk(
  "trainers/getByTrainerId",
  async (trainerId, thunkAPI) => {
    try {
      return await trainerService.getByTrainerId(trainerId);
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

export const getByTrainer = createAsyncThunk(
  "trainers/getByTrainer",
  async (trainerId, thunkAPI) => {
    try {
      return await trainerService.getByTrainer(trainerId);
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


const trainersSlice = createSlice({
  name: "trainers",
  initialState,
  reducers: {
    like: (state, action) => {
      state.trainers[action.payload].likes++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTrainer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrainer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainers = [...state.trainers, action.payload];
      })
      .addCase(createTrainer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trainers = null;
      })
      .addCase(getTrainers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainers = action.payload;
      })
      .addCase(getTrainers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trainers = [];
      })
      .addCase(getTrainerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrainerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentTrainer = action.payload;
      })
      .addCase(getTrainerById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currentTrainer = {};
      })
      .addCase(updateTrainerLikes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTrainerLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentTrainer.likes++;
      })
      .addCase(updateTrainerLikes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.trainers = {};
      })
      .addCase(editTrainer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTrainer.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(editTrainer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getByTrainerId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByTrainerId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coursesForThisTrainer = action.payload;
      })
      .addCase(getByTrainerId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.coursesForThisTrainer = null;
      })
      .addCase(getByTrainer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getByTrainer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.schoolsForThisTrainer = action.payload;
      })
      .addCase(getByTrainer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.schoolsForThisTrainer = null;
      });
  },
});

export default trainersSlice.reducer;
export const trainersActions = trainersSlice.actions;
