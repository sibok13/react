import { Link } from "react-router-dom";
import { logoutInitiate } from "../store/reducers/fireBaseReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.fireBase.currentUser);
  const navigate = useNavigate('');

  const handleAuth = () => { 
    if (user) {
        dispatch(logoutInitiate());
    }
    navigate('/');
  }

    return (<>
    {user.displayName ?
      <div><h2>Добро пожаловать на наш сайт {user.displayName}!</h2>
          <button onClick={handleAuth}>Выйти</button>
      </div>
      : null
    }
    <ul>
      <li><Link to="/chats/0">Страница чатов</Link></li>
      <li><Link to="/profile/">Мой профиль</Link></li>
    </ul>
    </>
  );
  }
  
  export default HomePage;
