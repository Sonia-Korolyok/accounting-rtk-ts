import ProfileData from "./ProfileData.tsx";
import UpdateUser from "./UpdateUser.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import {clearUser} from "../../features/user/userSlice.ts";
import {clearToken} from "../../features/token/tokenSlice.ts";

const Profile = () => {
    const dispatch = useAppDispatch();

    const handleClickLogOut = () => {
        dispatch(clearUser())
        dispatch(clearToken())
    }

    return (
        <div>
            <ProfileData/>
            <button onClick={handleClickLogOut}>Logout</button>
            <UpdateUser/>
        </div>
    );
};

export default Profile;