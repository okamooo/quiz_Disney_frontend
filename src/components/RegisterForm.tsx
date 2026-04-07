import React ,{useState} from "react";
import { RegisterRequest } from "../types/auth";

interface RegisterFormProps {
    onRegister : (request : RegisterRequest) => void;
    isLoading : boolean;
}

const RegisterForm : React.FC<RegisterFormProps> = ({onRegister,isLoading}) => {
    const [loginId,setLoginId] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('パスワードが一致しません。');
            return;
        }
        onRegister({loginId,password});
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
                <label htmlFor="loginId">ログインID:</label>
                <input id="loginId" type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="password">パスワード:</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="confirmPassword">パスワード確認:</label>
                <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? '登録中...' : '登録'}
            </button>
        </form>
    );
}

export default RegisterForm;