import './index.css';

const Footer = () => {
    return (
        <footer>
            <div className="contaniner-fluid footer">
                <div className="row gx-5 pt-3 mx-0">
                    <div className="col-lg-4 col-md-12 footer__first-col">
                        <br />
                        <div className="footer__first-col__text d-flex justify-content-center text-white mt-4"> SynerLink là một trang web gây quỹ cộng đồng và từ thiện. Đây là mạng xã hội của chúng tôi
</div>
                        <div className="row mt-4 d-flex justify-content-center">
                            <div className="col-2">
                                <a href='#'>
                                    <img src="/image/footer_facebook.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="/image/footer_twitter.svg" className="footer__first-col__logo twitter" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="/image/footer_youtube.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="/image/footer_in.svg" className="footer__first-col__logo in" />
                                </a>
                            </div>
                            <div className="col-2">
                                <a href='#'>
                                    <img src="/image/footer_instagram.svg" className="footer__first-col__logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">SynerLink</div>
                        <a href=''>
                            <div className='footer__item'>Tại sao SynerLink</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Doanh Nghiệp</div>
                        </a>
                        <a href=''>
                            <div className='footer__item'>Câu chuyện khách hàng</div>
                        </a>
                    </div>
                    <div className="col-lg-2 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">Hỗ Trợ</div>
                        <a href=''>
                            <div className="footer__item">Trung tâm Trợ Giúp</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Sự kiện</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Hướng Dẫn</div>
                        </a>
                    </div>
                    <div className="col-lg-1 col-md-4 text-white text-center">
                        <div className="footer__title mt-5 pb-3">Công Ty</div>
                        <a href=''>
                            <div className="footer__item">Về Chúng Tôi</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Liên hệ Chúng Tôi</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Sản Phẩm</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Đăng Nhập</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">Đăng Ký</div>
                        </a>
                        <a href=''>
                            <div className="footer__item">FAQ</div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-12 d-flex justify-content-center footer__first-col fifth_col text-white">
                        <div>
                            <div className="footer__title mt-5 pb-4">Liên Hệ Với Chúng Tôi</div>
                            <div className="d-flex fifth_col__location">
                                <img src="/image/footer_location.svg" className="mx-2" style={{ marginTop: '-20px' }} />
                                <div className="footer__location">Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội</div>
                            </div>
                            <div className="d-flex fifth_col__phone mt-4">
                                <img src="/image/footer_phone.svg" className="mx-2" />
                                <div className="footer__location">0912345678</div>
                            </div>
                            <div className="d-flex fifth_col__email" style={{ marginTop: '40px' }}>
                                <img src="/image/footer_email.svg" className="mx-2" />
                                <div className="footer__location">support@SynerLink.com</div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ border: '2px solid #3D3F4E', marginTop: '150px' }} />
                    <div className="text-white text-center pb-4 pt-4 h6">Trang web từ thiện và gây quỹ cộng đồng SynerLink  -   © 2024</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;