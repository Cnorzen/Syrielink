import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

// Phần Home  - 2
const WeHelpSurface = () => {


    return (
        <div className="container we_help_surface">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="d-flex align-items-center title">
                        <img src="/image/page1_we_help_surface_panel.svg" alt="" />
                        <h4 className="text-success mx-3">Quyên góp dự án</h4>
                    </div>
                    <div className='title-title'>
                        <h1 className="mt-3">Dự án đang gây quỹ</h1>
                        <h3 className="mt-1">Nền tảng gây quỹ cộng đồng trực tuyến</h3>
                        <p className="mt-4">SynerLink không chỉ là một ứng dụng, mà là một cộng đồng, một hành trình đến với những ước mơ. Chúng tôi tin rằng mọi ước mơ đều xứng đáng được thực hiện và mỗi người đều có thể làm nên điều kỳ diệu. Với SynerLink, chúng tôi không chỉ tạo ra một nền tảng để chia sẻ và kết nối, mà còn là một nguồn động viên, niềm tin và hy vọng cho mỗi cá nhân. Tại đây, bạn sẽ không chỉ nhận được sự hỗ trợ vật chất, mà còn là sự đồng cảm và sự chia sẻ từ cộng đồng.</p>
                    </div>
                    <div className="d-flex row pb-5">
                        <div className='col-lg-4 col-md-12 btn-center mt-2'>
                            <button className="mt-2 button-bg-pink-text-white">
                                <div className="d-flex">
                                    <div style={{ paddingRight: '15px' }}>Tìm Hiểu Thêm</div>
                                    <img src="/image/page1_we_help_surface_arrow.svg" alt="" />
                                </div>
                            </button>
                        </div>
                        <div className='col-lg-8 col-md-12 d-flex btn-center'>
                            <button className="mt-2 button-bg-white-text-gray">Donate Bây Giờ</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                        <div>
                            <img src="./image/le-tan-OLuTnePDR14-unsplash.jpg" className="img-fluid mt-5 help-panel" alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default WeHelpSurface;
