import { useState } from 'react';
import './App.css';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const initialState: User = {
  firstName: '',
  lastName: '',
  email: ''
}

interface Error {
  [key: string]: string
}

function App() {
  const [user, setUser] = useState<User>(initialState);
  const [errors, setErrors] = useState<Error>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Error = {};
    if(!user.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if(!user.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    if(!user.email.trim()) {
      newErrors.email = 'email is required'
    } else if(!/^\S+@\S+\.\S+$/.test(user.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    console.log('newErrors', newErrors, user);
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // API CALLING
    console.log('Form submitted successfully');

  }

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First name'
            value={user.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p className='error'>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last name'
            value={user.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p className='error'>{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='email'
            value={user.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
