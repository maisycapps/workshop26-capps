import React from "react";
import { useState, useEffect } from "react";
import SelectionDeets from "./SelectionDeets";

const SelectedContact = ({selectedContactId}) => {

    const [contact, setContact]=useState({});

    useEffect(() => {

        const getContacts = async() => {

            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result)
            } catch (error) {
                console.error(error)
            }
        }
    getContacts();
    }
    , []);

return (
    <>
        <article className="Contact">
            <SelectionDeets contact={contact}/>
        </article>
    </> 
)
}
 
export default SelectedContact;