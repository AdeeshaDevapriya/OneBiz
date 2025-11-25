import { useAuth } from "../types/useAuth";

function LoginPage() {
    const { login } = useAuth();

    return (
        <button onClick={() => login("test@gmail.com", "123")}>
            Login
        </button>
    );
}

export default LoginPage;