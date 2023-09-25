import { IUser } from './User'

const UserList = ({ users }: { users: IUser[] }) => {

    const Row = ({ user }: { user: IUser }) => {
        return <div className='row'>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.companies.name}</div>
            <div className='buttons'>
                <button>Update</button>
                <button>Delete</button>
            </div>
        </div>
    }

    return (
        <div className='table'>
            <div className='titles'>
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Company</div>
                <div>Actions</div>
            </div>
            <div className='rows'>
                {
                    users.map((user: IUser) => <Row key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}

export default UserList