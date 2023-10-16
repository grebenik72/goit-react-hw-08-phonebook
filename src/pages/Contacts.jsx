import { Form } from "components/Form/Form";
import { ContactsList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Error } from "components/Error/Error";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectPhoneBookValue } from "redux/phoneBook/phoneSelectors";
import { CssBaseline, Container, Box } from '@mui/material';
import * as React from 'react';
import contacts from 'photo/contacts.jpg';
import { boxContactsStyle, containerContactsStyle } from "./StylePages";
import { EmptyContactsList } from "components/EmptyContactList/EmptyContactList";

const ContactsPage = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const phoneBook = useSelector(selectPhoneBookValue);
    
    return (
        <Container component="main" maxWidth="md" sx={containerContactsStyle(contacts)}>
            <CssBaseline />
            <Box sx={boxContactsStyle}>
                <Form />
                <Filter />
                {error ? <Error /> : <ContactsList />}
                {phoneBook.length === 0 && !error && !isLoading &&
                    <EmptyContactsList />
                }
            </Box>
        </Container>
    )
};

export default ContactsPage;