import './index.css';

const DontMiss = () => {
    return (
		<div className="container-fluid py-3 dont_miss">
            <h2 className="text-white text-center mt-5 pb-5 dont-miss-text mx-auto">Đừng bỏ lỡ thông tin cập nhật hàng tuần của chúng tôi về quyên góp</h2>
            <div className="row">
                <div className="col-lg-6 col-md-12 mt-5 text-white dont_miss__left_column">
                    <input type='email' className='dont_miss__input' placeholder="Nhập địa chỉ email của bạn ...." max="40" min="5" />
                </div>
                <div className="col-lg-6 col-md-12 mt-5 pb-5 dont_miss__right_column">
                    <button className="dont_miss__button">Tham Gia</button>
                </div>
            </div>
        </div>
    )
}

export default DontMiss;