import { useNavigate } from 'react-router-dom';

export const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div style={ {textAlign: 'center' } }>
           <h1>Error404</h1>
            <button onClick={() => navigate('/adidas')}>
                Перейти к пользователям
            </button>
        </div>
    );
};

