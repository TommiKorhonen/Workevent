import { useField } from "formik"
import { Listbox } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]
const MyselectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(field, meta)
    const [selectedPerson, setSelectedPerson] = useState(people[0])

    return (
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Label htmlFor={field.name}>{label}</Listbox.Label>
            <Listbox.Button className="relative w-full grid grid-cols-2 items-center  bg-white border border-gray-400 rounded-md shadow-sm p-2 text-left cursor-default sm:text-sm">
                {selectedPerson.name}
                <span className="flex justify-end">
                    <SelectorIcon className="h-5 w-5  text-gray-400" aria-hidden="true" />
                </span>
            </Listbox.Button>
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                    <Listbox.Option
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                    >
                        {person.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default MyselectInput
