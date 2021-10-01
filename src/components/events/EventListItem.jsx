import React from 'react'
import { sampleData } from '../../api/sampleData'
const EventListItem = () => {
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
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData.map((data) => {
                        const {
                            id,
                            name,
                            area,
                            description,
                            category,
                            date,
                            comments } = data;
                        return (
                            <tr className="
                            text-center border border-black
                             bg-gray-700
                            hover:bg-gray-500
                            text-white
                            ">
                                <td>{name}</td>
                                <td>{area}</td>
                                <td>{description}</td>
                                <td>{category}</td>
                                <td>{date}</td>
                                <td>{comments}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </article>
    )
}

export default EventListItem
