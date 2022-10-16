import style from '../style'
import { email, profile } from '../assets';
import React from 'react';
import { ReactDOM } from 'react';
import About from './About';
import Hero from './Hero';
import Contact from './Contact';


class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.handleClickHome = this.handleClickHome.bind(this);
        this.state = { isNav: 'home' };

    }

    handleClickHome = () => {
        this.setState({ isNav: 'home' });

    }
    handleClickAbout = () => {
        this.setState({ isNav: 'about' });

    }
    handleClickContact = () => {
        this.setState({ isNav: 'contact' });

    }




    render() {
        const isNav = this.state.isNav
        console.log(isNav)
        return (
            <>

                <div className="navbar bg-transparent absolute sm:px-32 px-5 z-50">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a onClick={this.handleClickHome}>Home</a></li>
                                <li><a onClick={this.handleClickAbout}>About</a></li>
                                <li><a onClick={this.handleClickContact}>Contact</a></li>
                            </ul>
                        </div>
                        <a className=" normal-case text-xl text-gradient font-poppins font-bold md:text-[32px] text-[25px] text-right ">Rizal.</a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a onClick={this.handleClickHome}>Home</a></li>
                            <li><a onClick={this.handleClickAbout}>About</a></li>
                            <li><a onClick={this.handleClickContact}>Contact</a></li>

                        </ul>
                    </div>
                    <div className="navbar-end hidden md:flex">
                        <img
                            src={email}
                            alt="profile"
                            className='w-[26px] h-[26px] mx-4 sm:ml-10'
                        />
                        <p className={`${style.paragraph} text-[16px]`}>rizal.firdaus117@gmail.com</p>
                    </div>
                </div>

                {isNav == 'home' && <Hero />}
                {isNav == 'about' && <About />}
                {isNav == 'contact' && <Contact />}

            </>
        )
    }
}

export default Navbar;