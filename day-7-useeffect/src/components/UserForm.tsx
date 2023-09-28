import React, { useState } from 'react'
import SelectCompanies from './SelectCompanies'

const UserForm = ({userData, createUser}: {userData: any, createUser: (user: any) => void}) => {
    const [user, setUser] = useState({
        name: userData.name ?? "",
        username: userData.username ?? "",
        email: userData.email ?? "",
        phone: userData.phone ?? "",
        companiesId: userData.companiesId ?? 0,
    })

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

    const submitUser=(e: any) => {
		e.preventDefault();
		if(userData.id) {
			// update
		} else {
			// create
			createUser(user);
		}
	}

    return (
        <form onSubmit={submitUser} className='row'>
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<SelectCompanies />
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
    )
}

export default UserForm