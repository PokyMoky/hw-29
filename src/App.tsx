import * as React from "react";
import {useState} from "react";
import './App.css'

import type {Stats, User} from "./utils/types";
import Nav from "./components/Nav.tsx";
import Body from "./components/Body.tsx";
import {TwitterContext} from "./utils/twitterContext.ts";

function App() {
    const [user, setUser] = useState<User>({
        name: "User",
        avatar: "#"
    });

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        subscribers: 0,
    });

    const changeName = (name: string): void => {
        setUser({...user, name: name || user.name});
    }

    const changeAvatar = (url: string): void => {
        setUser({...user, avatar: url ?? user.avatar});
    }

    const changeStats = (event: React.MouseEvent<HTMLElement>) => {
        type StatKey = "followers" | "subscribers";
        const fieldName = event.currentTarget.textContent?.split(":")[0].toLowerCase() as StatKey;
        setStats(prev => ({
            ...prev,
            [fieldName]: event.button === 0 ? prev[fieldName] + 1 : Math.max(prev[fieldName] - 1, 0),
        }))
    };

    return (
        <TwitterContext.Provider value={{
            user: user,
            stats: stats,
            changeStats,
            changeAvatar: changeAvatar,
            changeName: changeName
        }}>
            <Nav/>
            <Body/>
        </TwitterContext.Provider>
    )
}

export default App
