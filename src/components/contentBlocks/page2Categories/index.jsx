import './index.css';

const Page2Categories = () => {

	const categories = [
		{
			img: '../image/page2_categories_icon-head.svg',
			title: 'Minh bạch và công khai:',
			description: 'SynerLink sử dụng công nghệ blockchain để ghi lại mọi chi tiết trong quá trình đăng tải ước mơ và nhận hỗ trợ. Điều này tạo ra một môi trường minh bạch và công khai, giúp tăng cường sự tin cậy và minh bạch.'
		},
		{
			img: '../image/page2_categories_icon-square.svg',
			title: 'Tính linh hoạt',
			description: 'SynerLink cung cấp một nền tảng linh hoạt cho cả người đăng tải ước mơ và những người muốn giúp đỡ. Bạn có thể tùy chỉnh danh sách ước mơ của mình theo nhu cầu cụ thể và có thể chọn hỗ trợ những ước mơ mà bạn cảm thấy đồng cảm và quan tâm..'
		},
		{
			img: '../image/page2_categories_icon-medical_bag.svg',
			title: 'Tác động tích cực: ',
			description: 'Bằng cách tham gia vào SynerLink, bạn đang tham gia vào một cộng đồng nhân văn, nơi mà mọi hành động đều nhằm mục đích tạo ra những tác động tích cực cho cả người nhận hỗ trợ và cộng đồng xung quanh'
		},
		{
			img: '../image/page2_categories_icon-book.svg',
			title: 'Tiện lợi và dễ sử dụng:',
			description: 'Giao diện ứng dụng của SynerLink được thiết kế để dễ có thể sử dụng và tiện lợi cho người dùng mọi độ tuổi, giúp họ dễ dàng có thể tạo ra dự án mới , ủng hộ Donata và tìm kiếm các ước mơ cũng như cách để hỗ trợ.'
		},
	]

	return (
		<div className='container' style={{marginTop: '100px'}}>
			<div className="text-center mx-auto" style={{maxWidth: '805px'}}>
				<h4 className="text-success">CATEGORIES</h4>
				<h2>Tại sao chọn SynerLink</h2>
				<p>

SynerLink không chỉ là một ứng dụng, mà là một cộng đồng, một hành trình đến với những ước mơ. Chúng tôi tin rằng mọi ước mơ đều xứng đáng được thực hiện và mỗi người đều có thể làm nên điều kỳ diệu. Với SynerLink, chúng tôi không chỉ tạo ra một nền tảng để chia sẻ và kết nối, mà còn là một nguồn động viên, niềm tin và hy vọng cho mỗi cá nhân. Tại đây, bạn sẽ không chỉ nhận được sự hỗ trợ vật chất, mà còn là sự đồng cảm và sự chia sẻ từ cộng đồng. Bằng cách kết nối và chia sẻ, chúng tôi tạo ra những kết nối tinh thần mạnh mẽ, giúp mỗi người trở nên mạnh mẽ hơn trước những thách thức và khó khăn. Và với mỗi bước tiến trên SynerLink, chúng ta cùng nhau tạo ra những câu chuyện đẹp, những kỳ tích nhỏ, và làm cho thế giới này trở nên tốt đẹp hơn.</p>
			</div>
			<div className="p-0">
				<div className="row d-flex justify-content-between">
				{categories.map(({ img, title, description }, index) =>
    <div className="col-lg-6 col-md-12" key={index}> {/* Thêm key prop ở đây */}
        <div className="d-flex item mt-5">
            <img src={img} className="categories-main__part__logo" />
            <div style={{ marginLeft: '2%' }}>
                <div className="categories-title mt-2">{title}</div>
                <p className='my-2'>{description}</p>
            </div>
        </div>
    </div>
)}

				</div>
			</div>
		</div>
	)
}

export default Page2Categories;