import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllUsers } from "./getAllUsers";
import { UserComponent } from "./UserComponent/UserComponent";
import { getUser } from "../ProfilePage/getUser";
import "./userPage.css";

export function UserPage() {
    const loggedinUser = localStorage.getItem("loggedinUser");

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        async function getStates() {
            const fetchedUsers = await getAllUsers();
            const fetchedUser = await getUser(loggedinUser);
            setCurrentUser(fetchedUser);
            const usersWithoutCurrentUser = fetchedUsers.filter((user) => user.username !== loggedinUser);
            setUsers(usersWithoutCurrentUser);
        }
        getStates();
    }, []);

    return (
        <>
            <Navbar />
            <div className="userContainer">
                {users.length > 0 ? (
                    users.map((user) => <UserComponent user={user} key={user.username} currentUser={currentUser} />)
                ) : (
                    <>There are no registered users</>
                )}
            </div>
        </>
    );
}
