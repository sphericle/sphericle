import { useLocation } from 'react-router';
import '../css/Header.css';

function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <a href="/" className={location.pathname === '/' ? 'selected' : ''}>Home</a>
            <a href="/music" className={location.pathname === '/music' ? 'selected' : ''}>Music Stuff</a>
            <a href="/videoprogress" className={location.pathname === '/videoprogress' ? 'selected' : ''}>Video Progress</a>
        </div>
    );
};

export default Header;
