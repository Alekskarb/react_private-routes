import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../contect/AuthProvider";

function Login() {
    const nav = useNavigate();
    const auth = useAuth();
    const location = useLocation();
    console.log(location) //see state: from

    const from = location.state?.from || '/';

    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')
        console.log(username)
        auth.signIn(username, () => {
            nav(
                from, {replace: true}
                )
        })
    }
    return (
        <>
            <form onSubmit={submit}>
                <label> UserName: <input type="text" name='username'/> </label>
                <button type='submit'>
                    Log In
                </button>
            </form>
        </>
    );
}

export default Login;
