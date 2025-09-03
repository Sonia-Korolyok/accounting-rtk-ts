import {useState} from "react";
import {useUpdateUserMutation} from "../../features/api/accountApi.ts";


export interface EditProfileProps {
    close: () => void,
    login: string
}

const EditProfile = ({close, login}: EditProfileProps) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const dispatch = useAppDispatch();
    const [updateUser] = useUpdateUserMutation();


    const handleClickSave = async () => {
        try {
            await updateUser({user: {firstName, lastName}, login}).unwrap();
        }catch (e) {
            console.log('error updating user', e);
        }
        close();
    }

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>First Name:
                <input type="text"
                       onChange={e => setFirstName(e.target.value)}
                       value={firstName}/>
            </label>
            <label>Last Name:
                <input type="text"
                       onChange={e => setLastName(e.target.value)}
                       value={lastName}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};


export default EditProfile;