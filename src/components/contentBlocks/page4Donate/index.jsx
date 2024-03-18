import './index.css';

const Donate = () => {
	return (
		<div className="container donate_to" style={{backgroundImage: 'url(/image/page4_donate_hand.svg)'}}>
			<div className="donate-title">
				<div>Donate tới</div>
				<div>Dự án ủng hộ gây quỹ</div>
			</div>
			<p className="donate-text">Hãy cùng tham gia vào hành động từ thiện và tạo ra sự khác biệt trong cộng đồng! Mỗi đóng góp, dù lớn hay nhỏ, đều có thể góp phần vào việc cải thiện cuộc sống của những người cần giúp đỡ. Hãy đồng hành cùng chúng tôi trong hành trình ủng hộ và quyên góp để đem lại sự ấm áp và hy vọng cho những người gặp khó khăn. Một hành động nhỏ từ bạn có thể mang lại một thay đổi lớn cho người khác. Hãy đóng góp ngay hôm nay và cùng nhau tạo ra những điều tốt đẹp cho cộng đồng!</p>
			<button className='donate-btn button-bg-pink-text-white d-flex justify-content-between align-items-center'>
				<span className='mx-3'>Donate Bây Giờ</span>
				<img src='../image/page4_donate_heart.svg' style={{marginRight: '15px'}} />	
			</button>
		</div>
	)
}

export default Donate;