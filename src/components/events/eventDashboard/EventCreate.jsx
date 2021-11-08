import React, { useEffect, useState } from 'react'
import UserApi from '../../../api/UserApi'
import EventApi from '../../../api/EventsApi'

const EventCreate = () => {
    const [users, setUsers] = useState([]);
    const [eventValues, setEventValues] = useState({
        name: "",
        area: "",
        category: "",
        date: "",
        description: ""
    });
    const getUsers = async () => {
        const response = await UserApi.get("/get-users");
        // console.log(response.data.message)
        setUsers(response.data.message)

    };
    const handleSubmit = async (e) => {
        // console.log(eventValues)
        e.preventDefault()
        try {
            const response = await EventApi.post("/", {
                name: eventValues.name,
                area: eventValues.area,
                category: eventValues.category,
                date: eventValues.date,
                description: eventValues.description
            });
        } catch (err) {
            console.log(err);
        };

    };
    const handleChange = (e) => {
        setEventValues({
            ...eventValues,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div className="mb-2">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 mt-10">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                            <label htmlFor="cars">Name</label>
                            <select name="name" id="name" onChange={handleChange}>
                                <option disabled>Name</option>
                                {users.map((user) => {
                                    return (
                                        <option key={user.id} value={user.name}>{user.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="area">Area</label>
                            <select name="area" id="area" onChange={handleChange}>
                                <option value="Jätteenkäsittely">Jätteenkäsittely</option>
                                <option value="Valvomo">Valvomo</option>
                                <option value="Varasto">Varasto</option>
                                <option value="Kattilasali">Kattilasali</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" onChange={handleChange}>
                                <option value="Käyttö">Käyttö</option>
                                <option value="Huolto">Huolto</option>
                                <option value="Tapaturma">Tapaturma</option>
                                <option value="Huomio">Huomio</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="date" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" onChange={handleChange}></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button typeof="submit" className="bg-blue-500 w-32 text-white self-start">Save New</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EventCreate
