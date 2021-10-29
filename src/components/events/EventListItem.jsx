import React, { useEffect, useState } from 'react'
import moment from "moment";
import EventsApi from '../../api/EventsApi'
const EventListItem = () => {
    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
        try {
            const response = await EventsApi.get("/");
            // console.log(response.data.data.events[0].posting_date);
            setEvents(response.data.data.events)
        } catch (err) {
            console.log(err);
        };
    };
    useEffect(() => {
        fetchEvents();
    }, [])
    return (
        <article className="grid">
            <table>
                <thead>
                    <tr className="text-center bg-blue-400">
                        <th>Name</th>
                        <th>Area</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => {
                        const {
                            id,
                            area,
                            description,
                            category,
                            posting_date,
                            name } = event;
                        return (
                            <tr className="
                            text-center border border-black
                            bg-gray-700
                            hover:bg-gray-500
                            text-white
                            "
                                key={id}
                            >
                                <td>{name}</td>
                                <td>{area}</td>
                                <td>{description}</td>
                                <td>{category}</td>
                                <td>{moment(posting_date).format("YYYY/MM/DD")}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </article>
    )
}

export default EventListItem
