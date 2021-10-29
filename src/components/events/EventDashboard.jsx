import React from 'react'
import EventCreate from './EventCreate'
import EventHeader from './EventHeader'
import EventList from './EventList'

const EventDashboard = () => {
    return (
        <main className="h-screen ">
            <EventHeader />
            <EventCreate />
            <EventList />
        </main>
    )
}

export default EventDashboard
