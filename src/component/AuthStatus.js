import {useAuth} from "../contect/AuthProvider";
import {useNavigate} from "react-router-dom";

export function AuthStatus() {
    const auth = useAuth();
    const navigate = useNavigate();

    const signOut = () => auth.signOut(() => navigate('/'))

    if (auth.user === null) {
        return <p> You aren't logged!</p>
    }
    return (
        <>
            Welcome user {auth.user}
            <button onClick={signOut}> sign Out</button>
        </>
    )
}