import "dotenv/config.js"
import "../../config/db.js"
import User from "../User.js"

const users = [
    {
        name: "Usuario 1",
        email: "user1@example.com",
        direction: "Calle Falsa 123, Ciudad",
        password: "contraseña123",
        phone: 1234567890,
        photo: "https://example.com/photo1.jpg",
        role: 1,
        online: false
    },
    {
        name: "Usuario 2",
        email: "user2@example.com",
        direction: "Calle Falsa 456, Ciudad",
        password: "contraseña123",
        phone: 1234567891,
        photo: "https://example.com/photo2.jpg",
        role: 2,
        online: false
    },
    {
        name: "Usuario 3",
        email: "user3@example.com",
        direction: "Avenida Siempreviva 789, Ciudad",
        password: "contraseña123",
        phone: 1234567892,
        photo: "https://example.com/photo3.jpg",
        role: 1,
        online: false
    },
    {
        name: "Usuario 4",
        email: "user4@example.com",
        direction: "Calle Luna 101, Ciudad",
        password: "contraseña123",
        phone: 1234567893,
        photo: "https://example.com/photo4.jpg",
        role: 2,
        online: false
    },
    {
        name: "Usuario 5",
        email: "user5@example.com",
        direction: "Avenida Sol 202, Ciudad",
        password: "contraseña123",
        phone: 1234567894,
        photo: "https://example.com/photo5.jpg",
        role: 1,
        online: false
    },
    {
        name: "Usuario 6",
        email: "user6@example.com",
        direction: "Calle Estrella 303, Ciudad",
        password: "contraseña123",
        phone: 1234567895,
        photo: "https://example.com/photo6.jpg",
        role: 2,
        online: false
    },
    {
        name: "Usuario 7",
        email: "user7@example.com",
        direction: "Avenida Marte 404, Ciudad",
        password: "contraseña123",
        phone: 1234567896,
        photo: "https://example.com/photo7.jpg",
        role: 1,
        online: false
    },
    {
        name: "Usuario 8",
        email: "user8@example.com",
        direction: "Calle Venus 505, Ciudad",
        password: "contraseña123",
        phone: 1234567897,
        photo: "https://example.com/photo8.jpg",
        role: 2,
        online: false
    },
    {
        name: "Usuario 9",
        email: "user9@example.com",
        direction: "Avenida Tierra 606, Ciudad",
        password: "contraseña123",
        phone: 1234567898,
        photo: "https://example.com/photo9.jpg",
        role: 1,
        online: false
    },
    {
        name: "Usuario 10",
        email: "user10@example.com",
        direction: "Calle Júpiter 707, Ciudad",
        password: "contraseña123",
        phone: 1234567899,
        photo: "https://example.com/photo10.jpg",
        role: 2,
        online: false
    }
]

User.insertMany(users)