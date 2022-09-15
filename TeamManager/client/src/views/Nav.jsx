import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="container">
            <div className="bg-light">
                <Link className='btn ' to={`/team`}><p>List</p></Link>
                <Link className='btn ' to={`/new`}><p>Add Player</p></Link>
                <Link className='btn ' to={`/status/1`}><p>Manage Player Status</p></Link>
            </div>
        </div>
    )
}
export default Nav