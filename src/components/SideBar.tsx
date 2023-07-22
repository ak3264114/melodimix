import "../asset/css/sideBar.css"
import homeIcon from '../asset/images/icon/homeIcon.svg'
import playListIcon from '../asset/images/icon/playList.svg'
import searchIcon from '../asset/images/icon/search.svg'
import favoritesIcon from '../asset/images/icon/favorites.svg'
import Logo from "../asset/images/icon/MelodiMixLogo.png"




const SideBar: React.FC = () => {

    const path = window.location.pathname;
    const menuItem = [
        {
            name: 'Home',
            path: '/',
            icon: `${homeIcon}`,
            active: (path === "/") ? true : false
        },
        {
            name: 'Search',
            path: '/search',
            icon: `${searchIcon}`,
            active: (path === "/search") ? true : false
        },
        {
            name: 'PlayList',
            path: '/playlist',
            icon: `${playListIcon}`,
            active: (path === "/playlist") ? true : false
        },
        {
            name: 'Favorities',
            path: '/favorites',
            icon: `${favoritesIcon}`,
            active: (path === "/favorites") ? true : false
        }
    ]
    return (
        <>
            <div className="sidebar">
                <a href=""><img className="logo" src={Logo} alt="" /><span></span></a>
                <div className="navbar">
                    <div className="classList">
                        {menuItem.map(item => {
                            return (
                                <div className="listItem">
                                    <a className={`navitem ${item.active ? "active " : null}`} href={item.path}>
                                        <img src={item.icon} alt="" />
                                        <span>{item.name}</span>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;