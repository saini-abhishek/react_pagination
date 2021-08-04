import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import UserProfile from './UserProfile';

const fetchUsers = ({ page = 1 }) => {
    try {
        return axios.get(`https://reqres.in/api/users?page=${page}`);
    } catch (error) {
        return ({ error: _.get(error, 'message', 'network request failed') });
    }
}

const useStyles = makeStyles({
    userListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        minWidth: '360px',
        margin: 'auto',
    },
    usersContainer: {
        padding: '8px',
        maxWidth: '1200px',
        minWidth: '360px',
        margin: 'auto',
    }
});


const Users = () => {
    const classes = useStyles();
    const [users, setUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState('');
    
    useEffect(() => {
        (async () => {
            const { data } = await fetchUsers({ page: currentPage });
            const { error, total_pages = 1, data: _users = [] } = data;
            if (error) {
                setError(JSON.stringify(error));
            } else {
                setTotalPages(total_pages);
                setUser(_users);
            }
        })();
    }, [currentPage]);
    
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={classes.usersContainer}>
            <div className={classes.userListContainer}>
                {_.map(users, ({ id, first_name: firstName, last_name: lastName, email, avatar}) => (
                    <UserProfile
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        avatar={avatar}
                        email={email}
                    />
                ))}
            </div>
            <Footer 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Users;