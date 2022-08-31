import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventsService from "./EventsService";

const initialState = {
  events: [],
  currentEvent: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (event, thunkAPI) => {
    try {
      return await eventsService.createEvent(event);
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

export const getEvents = createAsyncThunk(
  "events/getEvents",
  async (thunkAPI) => {
    try {
      return await eventsService.getEvents();
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

export const getEventById = createAsyncThunk(
  "events/getEventById",
  async (eventId, thunkAPI) => {
    try {
      return await eventsService.getEventById(eventId);
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

export const updateEventLikes = createAsyncThunk(
  "events/updateEventLikes",
  async (eventId, thunkAPI) => {
    try {
      return await eventsService.updateEventLikes(eventId);
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

export const editEvent = createAsyncThunk(
  "events/editEvent",
  async (eventData, thunkAPI) => {
    try {
      return await eventsService.editEvent(eventData);
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

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    like: (state, action) => {
      state.events[action.payload].likes++;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = [...state.events, action.payload];
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = null;
      })
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = [];
      })
      .addCase(getEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentEvent = action.payload;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currentEvent = {};
      })
      .addCase(updateEventLikes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEventLikes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events.find((event) => event.id === action.payload.id).currentNumberOfParticipants--
        state.currentEvent.currentNumberOfParticipants--
      })
      .addCase(updateEventLikes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.events = {};
      })
      .addCase(editEvent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.events = [...state.events,  action.payload];
      })
      .addCase(editEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default eventsSlice.reducer;
// export const { like, addSchool } = schoolsSlice.actions;
export const eventsActions = eventsSlice.actions;
