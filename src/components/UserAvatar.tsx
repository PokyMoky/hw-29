// import type {User} from "../utils/types";
import {useContext} from "react";
import {TwitterContext} from "../utils/twitterContext.ts";

// type Props = {
//     user: User,
//     changeAvatar: (url: string) => void,
// }

const UserAvatar= () => {
    const {user, changeAvatar} = useContext(TwitterContext);
    return (
        <div>
            <img onClick={() => changeAvatar(prompt('Enter new avatar url') as string)} src={user.avatar}
                 alt={user.name} className={'user-avatar'}/>
        </div>
    );
};

export default UserAvatar;