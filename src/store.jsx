import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../Slice/pasteSlice'
export const store = configureStore({
  reducer: {
        Paste: pasteReducer,
  },
})