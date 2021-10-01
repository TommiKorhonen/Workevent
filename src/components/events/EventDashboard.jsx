import React from 'react'
import EventCreate from './EventCreate'
import EventList from './EventList'

const EventDashboard = () => {
    return (
        <main className="h-screen">
            <EventCreate />
            <EventList />
        </main>
    )
}

export default EventDashboard
