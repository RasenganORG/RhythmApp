import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schools: [
    {
      name: "School1",
      likes: 1,
      trainer: [{
        trainerName: "Mimi",
        trainerPicture: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
      },
      {
        trainerName: "Ana",
        trainerPicture: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
      },
      {
        trainerName: "Alex",
        trainerPicture: "https://randomuser.me/api/portraits/thumb/men/39.jpg",
      },]
    },
    {
      name: "School2",
      likes: 3,
      trainer: [{
        trainerName: "Andrei",
        trainerPicture:  "https://randomuser.me/api/portraits/thumb/men/27.jpg",
      },
      {
        trainerName: "Mihai",
        trainerPicture:  "https://randomuser.me/api/portraits/thumb/men/76.jpg",
      }]
    },
    {
      name: "School3",
      likes: 3,
      trainer: [{
        trainerName: "Alexandra",
        trainerPicture:  "https://randomuser.me/api/portraits/thumb/women/30.jpg",
      },
      {
        trainerName: "Andra",
        trainerPicture:  "https://randomuser.me/api/portraits/thumb/women/35.jpg",
      }]
    },
  ],
};

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {
    like: (state, action) => {
      state.schools[action.payload].likes++;
    },
    addSchool: (state, action) => {
      state.schools.push(action.payload)
    }
  },
});

export default schoolsSlice.reducer;
export const { like, addSchool } = schoolsSlice.actions;
