import { Link } from '@tanstack/react-router'

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/new'}>NewGames</Link>
            <Link to={'/upcoming'}>UpcomingGames</Link>
            <Link to={'/popular'}>PopularGames</Link>
        </nav>
    )
}

export default Navbar
