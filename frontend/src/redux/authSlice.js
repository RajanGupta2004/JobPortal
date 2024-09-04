import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "Auth",
    initialState: {
        loading: false
    },

    reducers: {
        // actions
        setLoading(state, action) {
            state.loading = action.payload

        }
    }
})

console.log("authSlice", authSlice)

export const { setLoading } = authSlice.actions
export default authSlice.reducer