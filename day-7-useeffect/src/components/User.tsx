import React, { useEffect, useState } from 'react'
import UserList from './UserList';
import UserForm from './UserForm';

export interface IUser {
    name: string;
    username: string;
    email: string;
    phone: string;
    companies: ICompany;
    id: number;
}

export interface ICompany {
    id: number;
    name: string;
    catchPhrase: string;
}

const API_URL = 'http://localhost:3000/users';
const User = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        // on component load
        // on some props change
        // on unload component
        // console.log('useEffect', users);
        fetchUser();
    }, [])

    const fetchUser = async () => {
        const response = await fetch(`${API_URL}?_expand=companies`);
        const users = await response.json();
        console.log('users', users)
        setUsers(users);
    }


    if (users.length === 0) {
        return <p>There is no user.</p>
    }

    return (
        <>
            <h3>New user</h3>
            <UserForm userData={{}} />
            <UserList users={users} />
        </>
    )
}

export default User