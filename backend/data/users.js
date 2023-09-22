import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('Om@12345', 10),
        cropSelection: '',
        isAdmin: true
    },
    {
        name: 'Sanjula User',
        email: 'Sanjula@example.com',
        cropSelection: 'paddy',
        password: bcrypt.hashSync('Om@12345', 10),
    },
    {
        name: 'Test User',
        email: 'Test@example.com',
        cropSelection: 'fruits',
        password: bcrypt.hashSync('Om@12345', 10),
    },
]

export default users