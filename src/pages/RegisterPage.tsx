import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterRequest } from '../types/auth';
import { register } from '../api/auth';

const RegisterPage : React.FC = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async(request : RegisterRequest) => {
        setIsLoading(true);
        setError(null);
        try{
            const response = await register(request);
           alert(`${response.loginId}さん ようこそ、夢と魔法の国へ！ \n${response.messeage}`);
            navigate('/login');
        }catch(err){
            console.error('登録エラー;', err);
            setError('登録に失敗しました。ログインIDが既に存在している可能性があります。');
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>ユーザー登録</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const loginId = formData.get('loginId') as string;
                const password = formData.get('password') as string;
                handleRegister({ loginId, password });
            }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <label htmlFor="loginId">ログインID:</label>
                    <input id="loginId" name="loginId" type="text" required />
                </div>
                <div>
                    <label htmlFor="password">パスワード:</label>
                    <input id="password" name="password" type="password" required />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? '登録中...' : '登録'}
                </button>
            </form>
        </div>
    );
}

export default RegisterPage;
