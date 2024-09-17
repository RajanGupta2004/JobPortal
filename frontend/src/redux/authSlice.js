import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "Auth",
    initialState: {
        loading: false,
        user: null
    },

    reducers: {
        // actions
        setLoading(state, action) {
            state.loading = action.payload

        },

        setUser(state, action) {
            state.user = action.payload

        }
    }
})

// console.log("authSlice", authSlice)

export const { setLoading, setUser } = authSlice.actions
export default authSlice.reducer