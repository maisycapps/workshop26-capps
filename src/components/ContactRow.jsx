const ContactRow = ({contact, setSelectedContactId}) => {

    return ( 
        <tr onClick={() => setSelectedContactId(contact.id)}>
            <td>{contact.name}</td>
            <td><address><a href={contact.email}>{contact.email}</a></address></td>
            <td>{contact.phone}</td>
        </tr>
    );
}
 
export default ContactRow;


