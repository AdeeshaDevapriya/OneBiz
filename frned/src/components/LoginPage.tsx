import { useState } from "react";
import { useAuthContext } from "./AuthContext";

export default function LoginPage() {
    const { login } = useAuthContext(); const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit() {
        if (!email || !password) {
            alert("Email and Password required!");
            return;
        } login(email, password);
    }
    return (
        <div style={{ padding: 30 }}>
            <h2>Login</h2>
            <input type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} />

            <br /><br />

            <input type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} />

            <br /><br />
            <button onClick={handleSubmit}> Login </button>
        </div>
    );
}