import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./NewsService";

const initialState = {
  news: [],
  currentNews: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createNews = createAsyncThunk(
  "news/createNews",
  async (news, thunkAPI) => {
    try {
      return await newsService.createNews(news);
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

export const getNews = createAsyncThunk(
  "news/getNews",
  async (thunkAPI) => {
    try {
      return await newsService.getNews();
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

export const getNewsById = createAsyncThunk(
  "news/getNewsById",
  async (newsId, thunkAPI) => {
    try {
      return await newsService.getNewsById(newsId);
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

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    like: (state, action) => {
      state.news[action.payload].likes++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.news = [...state.news, action.payload];
      })
      .addCase(createNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.news = null;
      })
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.news = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.news = [];
      })
      .addCase(getNewsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.currentNews = action.payload;
      })
      .addCase(getNewsById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.currentNews = {};
      });
  },
});

export default newsSlice.reducer;
export const newsActions = newsSlice.actions;
