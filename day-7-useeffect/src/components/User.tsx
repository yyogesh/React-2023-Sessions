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
    const [selectedUser, setSelectedUser] = useState<IUser>();

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

    const handleCreateUser = async (user: any) => {
        user.username = user.name;
       // user.companiesId = user.companiesId.toString();
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'  
            }
        });
        if(response.ok) {
            const users = await response.json();
            console.log('users', users)
            fetchUser();
        }
    }

    const handleUpdateuserById = async (user: any, id: number) => {
        user.username = user.name;
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'  
            }
        });
        if(response.ok) {
            const users = await response.json();
            console.log('users', users)
            fetchUser();
        }
    }

    const handleUpdateUser = (user: IUser) => {
        setSelectedUser(user);
    }

    if (users.length === 0) {
        return <p>There is no user.</p>
    }

    return (
        <>
            <h3>New user</h3>
            <UserForm userData={selectedUser} updateUser={handleUpdateuserById} createUser={handleCreateUser}/>
            <UserList users={users} handleUpdateUser={handleUpdateUser}/>
        </>
    )
}

export default User