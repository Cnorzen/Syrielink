    import './index.css';


    const Page1Categories = () => {

        const categories = [
            {
                img: '../image/page1_categories_technology.svg',
                title: 'Ủng Hộ Thiết bị công nghệ'
            },
            {
                img: '../image/page1_categories_education.svg',
                title: 'Ủng Hộ Sách Vở'
            },
            {
                img: '../image/page1_categories_videos.svg',
                title: 'Chia Sẻ Video Của Trẻ Nhỏ'
            },
            {
                img: '../image/page1_categories_medical.svg',
                title: 'Hỗ Trợ Y tế'
            },
            {
                img: '../image/page1_categories_fashion.svg',
                title: 'Ủng Hộ Quần Áo'
            },
            {
                img: '../image/page1_categories_design_hand.svg',
                title: 'Hỗ Trợ Giáo dục Trẻ Em Vùng Núi'
            },
        ]

        return (
            <div className="container">
                <div className='text-center mx-auto container-text'>
                    <h4 className="text-uppercase text-success mt-5">Danh Mục</h4>
                    <h2 className="mt-4 categories-explore-title">Khám phá các danh mục nổi bật về huy động vốn từ cộng đồng của chúng tôi</h2>
                    <p className="mt-4">Khám phá các danh mục nổi bật về huy động vốn từ cộng đồng của chúng tôi là một chuyến hành trình đến với những điều tuyệt vời nhất mà tình người có thể mang lại. Trong danh sách này, mỗi danh mục đều là một cánh cửa mở ra cho những trải nghiệm đầy ý nghĩa và tình cảm.

Từ việc ủng hộ thiết bị công nghệ giúp tạo ra sự tiện ích và phát triển, đến việc chia sẻ những cuốn sách vở giáo dục và truyền cảm hứng, mỗi bước đi đều góp phần tạo ra một cộng đồng mạnh mẽ và đầy tình thương.

Chia sẻ video của trẻ nhỏ không chỉ là việc tạo ra những kỷ niệm đáng nhớ, mà còn là cơ hội để lan tỏa niềm vui và nụ cười đến những người xung quanh. Đồng thời, hỗ trợ y tế và ủng hộ quần áo là những biện pháp cụ thể giúp giảm bớt gánh nặng và nâng cao chất lượng cuộc sống của những người cần thiết.

Mỗi danh mục đều mang trong mình một ý nghĩa và một mục tiêu cao cả, và mỗi đóng góp của bạn sẽ là một bước tiến quan trọng trong hành trình chung của chúng ta, hướng tới một cộng đồng hòa bình, phát triển và nhân văn hơn.</p>
                </div>
                <div className="row d-flex justify-content-center">
                {categories.map(({ img, title }, index) =>
    <section key={index} className="main_container__icon item col-lg-2 mt-5">
        <figure>
            <img src={img} alt="icon" />
            <h5 className='mt-4'>{title}</h5>
        </figure>
    </section>
)}

                </div>
            </div>
        )
    }

    export default Page1Categories;