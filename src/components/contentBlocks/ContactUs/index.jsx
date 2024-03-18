import './index.css';

const Contact = () => {
    return (
        <div>
            <div className="container mt-5">
                <h2 className="text-center">Liên Hệ Chúng Tôi</h2>
                <p className="mt-4 text-center mx-auto contact-text">Hãy liên hệ với chúng tôi để có được sự hỗ trợ</p>
                <div className="row mt-5">
                    <div className="col-lg-4 cold-sm-12">
                        <div className="d-flex">
                            <div>
                                <img src="/image/page_6_phone.svg" />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h4 className="mt-3">Số Liên Hệ</h4>
                                <h5 className="mt-4">0912345678</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 cold-sm-12">
                        <div className="d-flex">
                            <div>
                                <img src="/image/page_6_email.svg" />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h4 className="mt-3">Mail</h4>
                                <h5 className="mt-4">support@SynerLink.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 cold-sm-12">
                        <div className="d-flex">
                            <div>
                                <img src="/image/page_6_location.svg" />
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <h4 className="mt-3">Địa chỉ của chúng tôi</h4>
                                <h5 className="mt-4">Tòa nhà FPT Polytechnic, phố Trịnh Văn Bô, phường Phương Canh, quận Nam Từ Liêm, TP Hà Nội</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={(event) => {
                event.preventDefault();
                alert('biểu mẫu đã được gửi thành công')
            }}>
                <div className="contact-form bg-white mx-auto">
                    <h3 className="pt-5 px-5 pb-3">Viết cho chúng tôi một tin nhắn</h3>
                    <div className="row mx-5 d-flex justify-content-between">
                        <div className="p-0 mt-5 col-xl-5 col-lg-12">
                            <h5 className="contact-item-text" htmlFor="fname">Họ Và Tên</h5>
                            <div>
                                <input className="contact-input mt-4" placeholder="Họ và tên của bạn" id="fname" name="fname" type="text" min="5" max="40" />
                            </div>
                        </div>
                        <div className="p-0 mt-5 col-xl-5 col-lg-12">
                            <h5 className="contact-item-text" htmlFor="eadress">Địa chỉ Email</h5>
                            <div>
                                <input className="contact-input mt-4" placeholder="Email của bạn" id="eadress" name="eadress" type="email" min="5" max="40" />
                            </div>
                        </div>
                    </div>
                    <div className="row mx-5 d-flex justify-content-between">
                        <div className="p-0 mt-5 col-xl-5 col-lg-12">
                            <h5 className="contact-item-text" htmlFor="number">Số điện thoại</h5>
                            <div>
                                <input className="contact-input mt-4" placeholder="Số điện thoại của bạn" id="number" name="number" type="tel" min="5" max="40" />
                            </div>
                        </div>
                        <div className="mb-5 p-0 mt-5 col-xl-5 col-lg-12">
                            <h5 className="contact-item-text" htmlFor="cname">Tên Công Ty</h5>
                            <div>
                                <input className="contact-input mt-4" placeholder="Công Ty của bạn" id="cname" name="cname" type="text" min="5" max="50" />
                            </div>
                        </div>
                    </div>
                    <h5 className="mt-3 mx-5 contact-item-text" htmlFor="message">Lời Tin Nhắn</h5>
                    <div className='mx-5'>
                        <input className="mt-4 contact-message" type="text" placeholder="Viết cho chúng tôi ở đây" id="message" name="message" min="5" max="250" />
                    </div>
                    <div className="row mx-5 mt-5">
                        <div className="col-lg-6 col-md-12 p-0 d-flex align-items-center mt-4">
                            <input type="checkbox" className="contact-checkbox" />
                            <div className="mx-3">Chấp nhận các điều khoản và điều kiện</div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0 mt-3 d-flex justify-content-end">
                            <button
                                className="text-white text-uppercase button-bg-pink-text-white btn-contact"
                                type='submit'>Gửi</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;
