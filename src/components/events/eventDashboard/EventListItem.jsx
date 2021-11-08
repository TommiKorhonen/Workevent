import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from "../eventReducer"
import moment from "moment";
const EventListItem = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.events.event);
    useEffect(() => {
        dispatch(getEvents())
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
                    {events && events.map((event) => {
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
