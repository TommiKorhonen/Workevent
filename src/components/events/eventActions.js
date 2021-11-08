import { ActionTypes } from "./eventConstants"

export const setEvents = (events) => {
    return {
        type: ActionTypes.SET_EVENTS,
        payload: events
    }
}