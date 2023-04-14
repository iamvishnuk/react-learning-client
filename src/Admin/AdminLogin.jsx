import React from 'react'

function AdminLogin() {
    return (
        <div className='body'>
            <div className='container_lr'>
                <h2>Admin Login</h2>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' placeholder='Username' />
                    </div>
                    <div>
                        <lable htmlFor="password">Password</lable>
                        <input type="password" name='password' placeholder='Password' />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin