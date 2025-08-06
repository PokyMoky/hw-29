import {useContext} from "react";
import UserAvatar from "./UserAvatar.tsx";
import {TwitterContext} from "../utils/twitterContext.ts";

const UserStats = () => {
    const {user, stats, changeName, changeStats} = useContext(TwitterContext);
    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p onClick={() => changeName(prompt("Enter new name") as string)}>
                {user.name}
            </p>
            <div className={'stats'}>
                <div onPointerDown={changeStats} onContextMenu={(e) => e.preventDefault()}>Followers: {stats.followers}</div>
                <div onPointerDown={changeStats} onContextMenu={(e) => e.preventDefault()}>Subscribers: {stats.subscribers}</div>
            </div>
        </div>
    );
};

export default UserStats;