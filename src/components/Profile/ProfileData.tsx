import type {UserProfile} from "../../utils/types";

interface Props {
    data: UserProfile;
}

const ProfileData = ({data}:Props) => {


    return (
        <>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Login: {data.login}</p>
            <ul>
                {data.roles.map(role => <li key={role}>{role}</li>)}
            </ul>
        </>
    );
};

export default ProfileData;