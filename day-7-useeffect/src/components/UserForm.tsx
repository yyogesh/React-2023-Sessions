import React, { useState } from 'react'

const UserForm = ({userData}: {userData: any}) => {
    const [user, setUser] = useState({
        name: userData.name ?? "",
        username: userData.username ?? "",
        email: userData.email ?? "",
        phone: userData.phone ?? "",
        companiesId: userData.companiesId ?? "0",
    })

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

    const submitUser=() => {}

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
			
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
    )
}

export default UserForm