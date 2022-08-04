import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainers: [
    {
      id: 1,
      trainerName: "Joe",
      likes: 10,
      danceStyles: ['rumba', 'samba'],
    },
    {
      id: 2,
      trainerName: "Billy",
      likes: 5,
      danceStyles: ['contemporary', 'salsa', 'tango'],
    },
    {
      id: 3,
      trainerName: "Amanda",
      likes: 18,
      danceStyles: ['hip-hop', 'vogue']
    },
    {
      id: 4,
      trainerName: "Kriss",
      likes: 18,
      danceStyles: ['hip-hop', 'vogue']
    }
  ],
};

const trainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    like: (state, action) => {
      state.trainers[action.payload].likes++;
    }
  },
})

export default trainersSlice.reducer;
export const {like} = trainersSlice.actions;
