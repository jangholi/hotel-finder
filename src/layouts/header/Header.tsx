import React from 'react';
import './Header.css';
import logo from '../../img/limehome_logo.svg';
import burgerIcon from '../../img/burger_icon.svg';

class Header extends React.Component {
    constructor(props: any) {
        super(props);
        this.fixNav = this.fixNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.fixNav);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.fixNav);
    }

    fixNav() {
        const header = document.querySelector('.header');
        let topOfNav:number = 0;
        if (header instanceof HTMLElement) {topOfNav = header.offsetTop};

        if (header && window.scrollY >= topOfNav) {
            header.classList.add('fixed-header');
        } else if (header) {
            header.classList.remove('fixed-header');
        }
    }

    render() {
        return (
            <header className='header'>
                <nav className='header_nav'>
                    <ul className='header_menu'>
                        <li className='header_menu-item'>
                            <img src={logo} alt='Logo'/>
                        </li>
                        <li className='header_menu-item'>
                            <button>
                                <img src={burgerIcon} alt='Menu button'/>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;