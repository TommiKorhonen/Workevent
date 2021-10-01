import React from 'react'

const EventCreate = () => {
    return (
        <div className="mb-2">
            <form >
                <div className="flex flex-col gap-4 mt-10">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                            <label htmlFor="cars">Name</label>
                            <select name="cars" id="cars" form="carform">
                                <option value="volvo">Bob</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cars">Area</label>
                            <select name="cars" id="cars" form="carform">
                                <option value="volvo">Toimisto</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="cars">Category</label>
                            <select name="cars" id="cars" form="carform">
                                <option value="volvo">Toimisto</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="author">Date</label>
                            <input type="date" id="author" name="author" ></input>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description"></textarea>
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
