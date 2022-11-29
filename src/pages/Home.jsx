import { Link } from "react-router-dom";

function HomePage() {
    return (<>
    <h2>Добро пожаловать на наш сайт!</h2>
    <ul>
      <li><Link to="/chats/0">Страница чатов</Link></li>
      <li><Link to="/profile/">Мой профиль</Link></li>
      <li><Link to="/cats/">Котики</Link></li>
    </ul>
    </>
  );
  }
  
  export default HomePage;
