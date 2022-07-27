import {configureStore} from '@reduxjs/toolkit'
import { configure } from '@testing-library/react'
import schoolsReducer from "./components/schools/schoolsSlice"
import addSchoolReducer from "./components/schools/schoolsSlice"
import authReducer from "./components/auth/authSlice"
const store = configureStore({
    reducer:{
        schools: schoolsReducer,
        addSchool: addSchoolReducer,
        auth: authReducer
    }
})

export default store