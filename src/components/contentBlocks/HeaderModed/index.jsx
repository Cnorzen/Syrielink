import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './index.css';
import background from './bg.svg';

const HeaderModed = (props) => {

    const user = 'loginned'; /* registered, unregistered */
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <section>
            <section style={{ backgroundColor: '#1B8271' }}>
                <div className='container'>
                    <div className='row d-flex align-items-center pt-4'>
                        <div className='col-lg-6 col-md-12 px-3 title row d-flex align-items-center'>
                            <h6 className='col-lg-12 col-md-12 text-white title-title'>Chào mừng bạn tới SynerLink</h6>
                            <div className='col-md-12 btn-top title'>
                                <Link to={user === 'loginned' ? '/profile' : user === 'registered' ? '/login' : '/register'}>
                                    <button className='button-bg-pink-text-white'>
                                        <img alt="user" src="/image/header_moded_user.svg" />
                                        <span className='mx-3 text-white'>{user === 'loginned' ? 'My Account' : user === 'registered' ? 'Sign In Now' : 'Sign Up Now'}</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 contacts'>
                            <div className='row text-white'>
                                <div className='col-lg-6 col-md-12 d-flex header-top-email-phone'>
                                    <img alt="#" src="/image/header_moded_phone.svg" />
                                    <h6 className='px-3 mb-0'>0912345678
</h6>
                                </div>
                                <div className='col-lg-6 col-md-12 d-flex header-top-email-phone'>
                                    <img alt="#" src="/image/header_moded_email.svg" />
                                    <h6 className='mb-0' style={{ marginLeft: '15px' }}>support@SynerLink.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ width: '100%', color: 'white' }} className='mt-4' />
                <div className='container mt-4 pb-4'>
                    <div className='row d-flex refs-col'>
                        <div className='col-lg-3 col-6'>
                        <Link to="/">
                            <img className='logo-icon' src="/image/logo_sy.png" alt="logo" />
                        </Link>
                        </div>
                        <div className='col-lg-6 header-refs'>
                            <div className='row text-center d-flex justify-content-center align-items-center'>
                                <h5 className='col'>
                                    <Link to='/' className='header-ref'>Trang Chủ</Link>
                                </h5>
                                <h5 className='col'>
                                    <Link to='/about' className='header-ref'>Về Chúng Tôi</Link>
                                </h5>
                                <h5 className='col'>
                                    <Link to='/projects' className='header-ref'>Dự Án</Link>
                                </h5>
                                <h5 className='col'>
                                    <Link to='/news' className='header-ref'>Tin tức</Link>
                                </h5>
                                <h5 className='col'>
                                    <Link to='/contact' className='header-ref'>Liên hệ</Link>
                                </h5>
                            </div>
                        </div>
                        <div className='col-lg-3 col-6 mt-2'>
                            <div className='header-bottom__button'>
                                <Link to={user === 'loginned' ? '/profile' : user === 'registered' ? '/login' : '/register'}>
                                    <button className='button-bg-pink-text-white'>
                                        <img alt="user" src="/image/header_moded_user.svg" />
                                        <span className='mx-3 text-white'>{user === 'loginned' ? 'My Account' : user === 'registered' ? 'Sign In Now' : 'Sign Up Now'}</span>
                                    </button>
                                </Link>
                            </div>
                            <div className='burger-menu-col'>
                                <div>
                                    <AiOutlineMenu style={{ fill: 'white' }} className='burger-menu mt-3' onClick={() => setBurgerMenu(!burgerMenu)} />
                                    {burgerMenu ? (
                                        <div className='burger-content burger-white'>
                                            <div className='text-center p-3'>
                                                <h5 className='mt-3'>
                                                    <Link to='/' className='header-ref'>Trang Chủ</Link>
                                                </h5>
                                                <hr style={{ color: 'white' }} />
                                                <h5>
                                                    <Link to='/about' className='header-ref'>Về Chúng Tôi</Link>
                                                </h5>
                                                <hr style={{ color: 'white' }} />
                                                <h5>
                                                    <Link to='/projects' className='header-ref'>Dự Án
</Link>
                                                </h5>
                                                <hr style={{ color: 'white' }} />
                                                <h5>
                                                    <Link to='/news' className='header-ref'>Tin tức</Link>
                                                </h5>
                                                <hr style={{ color: 'white' }} />
                                                <h5>
                                                    <Link to='/contact' className='header-ref'>Liên hệ</Link>
                                                </h5>
                                                <hr style={{ color: 'white' }} />
                                                <div className='text-white mt-3'>
                                                    <h6>0912345678
</h6>
                                                </div>
                                                <div className='text-white mt-1'>
                                                    <h6>support@SynerLink.com</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5'>
                <div className='header-bg'>
                    <div className='container'>
                        <div style={{ backgroundImage: `url(${background})` }} className='header-bg-picture'>
                            <h2 className='text-center text-white header-title'>Hãy cùng tìm các dự án gây quỹ cộng đồng trên khắp thế giới</h2>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HeaderModed;