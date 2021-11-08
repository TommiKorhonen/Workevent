import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import EventsApi from '../../api/EventsApi'

export const getEvents = createAsyncThunk("events/getEvents", async () => {
    const response = await EventsApi.get("/")
    return response.data.data.events
})

const initialState = {
    event: [],
    status: null
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    extraReducers: {
        [getEvents.pending]: (state, action) => {
            state.status = "loading"
        },
        [getEvents.fulfilled]: (state, action) => {
            state.status = "success";
            state.event = action.payload
        },
        [getEvents.rejected]: (state, action) => {
            state.status = "failed"
        }
    }

})

// Action creators are generated for each case reducer function
export const { setEvents } = eventsSlice.actions

export default eventsSlice.reducer
