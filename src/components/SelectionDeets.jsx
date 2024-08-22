const SelectionDeets = ({contact, setSelectedContactId}) => {
    return ( 
        <>
            <ul>
                <li><h1>{contact.name}</h1></li>
                <li><b>Username</b>{contact.username}</li>
                <li><address><a href={contact.email}><b>Email</b>{contact.email}</a></address></li>
                <li><b>Phone</b>{contact.phone}</li>
                <li><address><a href={contact.website}><b>Website</b>{contact.website}</a></address></li>
            </ul>
        </>
    );
}
 
export default SelectionDeets;