import { useState } from "react";

export const CreateStore = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "Avigail", email: "aa@gmail.com", password: "aa1234!" , role: "manager"},
        { id: 2, username: "Malki", email: "mm@gmail.com", password: "mm1234!" , role: "user"},
        { id: 3, username: "Yael", email: "yy@gmail.com", password: "yy1234!", role: "user" }
    ]);

    const [currentUser, setCurrentUser] = useState(null);

    //  אובייקט שמכיל את המשתמשים, משתמש נוכחי ופונקציות
    const store = {
        users,
        currentUser,
        logIn: (email, password, navigate) => {
            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                alert("הרשם - אינך רשום!")
            } else {
                setCurrentUser(user);
                navigate("/home")
            }
        },

        signUp: (newUser, navigate) => {
            if (users.some(u => u.email === newUser.email)) {
                alert("קיים כבר משתמש כזה במערכת - עליך להתחבר")
            } else {
                newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
                newUser.role = "user";
                setUsers([...users, newUser]);
                setCurrentUser(newUser);
                navigate("/home");
            }
        },
        logOut: () => {
            setCurrentUser(null);
        }
    };

    return store;
};

