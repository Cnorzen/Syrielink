import './index.css';

const SuccessStory = () => {

    const data = {
        title: 'Chung tay hỗ trợ quyên góp: Ánh Sáng trẻ em đặc biệt khó khăn tại Vùng núi sâu xa',
        description: 'Trong vùng núi sâu, nhóm "Chung Tay Hỗ Trợ" đã mang lại ánh sáng cho trẻ em bằng những món quà nhỏ và tình yêu thương. Hành động này không chỉ là sự quyên góp vật chất, mà còn là biểu tượng của lòng nhân ái và hy vọng. Cùng nhau, chúng ta đã tạo ra những khoảnh khắc ý nghĩa và ấm áp, gửi đi thông điệp rằng không ai phải đối mặt với cuộc sống một mình.',
        totalFounded: '326',
        author: {
            name: 'Nguyễn Kim Dét ',
            city: 'Ho Chi Minh City, Viet Nam'
        }
    }

    return (
        <div className="container success_story">
            <div className="row pb-5">
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h4 className="text-uppercase text-success">Câu Chuyện SynerLink</h4>
                        <h2 className="mt-4 title-title">Đọc Câu chuyện cùng SynerLink</h2>
                        <p className="mt-4">SynerLink không chỉ là một ứng dụng, mà là một cộng đồng, một hành trình đến với những ước mơ. Chúng tôi tin rằng mọi ước mơ đều xứng đáng được thực hiện và mỗi người đều có thể làm nên điều kỳ diệu. Với SynerLink, chúng tôi không chỉ tạo ra một nền tảng để chia sẻ và kết nối, mà còn là một nguồn động viên, niềm tin và hy vọng cho mỗi cá nhân. Tại đây, bạn sẽ không chỉ nhận được sự hỗ trợ vật chất, mà còn là sự đồng cảm và sự chia sẻ từ cộng đồng. Bằng cách kết nối và chia sẻ, chúng tôi tạo ra những kết nối tinh thần mạnh mẽ, giúp mỗi người trở nên mạnh mẽ hơn trước những thách thức và khó khăn. Và với mỗi bước tiến trên SynerLink, chúng ta cùng nhau tạo ra những câu chuyện đẹp, những kỳ tích nhỏ, và làm cho thế giới này trở nên tốt đẹp hơn.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center success_story__button-col">  
                <div className="col-lg-15 col-md-12">
                    <img src="../image/mi-pham-xtd3zYWxEs4-unsplash.jpg" style={{ width: '100%' }} alt="#" />
                </div>
                </div>
            </div>
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-lg-6 col-md-12">
                    <img src="../image/le-tan-OLuTnePDR14-unsplash.jpg" style={{ width: '100%' }} alt="#" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className='title-title'>
                        <h3 className="">{data.title}</h3>
                        <p className="mt-4">{data.description}</p>
                        <h2 className="mt-4 text-success success-story-founded">{data.totalFounded}</h2>
                        <h5 className="mt-2">Tổng người ủng hộ quyên góp</h5>
                    </div>
                    <div className="mt-5">
                        <div className="d-flex title">
                            <div className='mx-2'>
                                <div>
                                    <h5>{data.author.name}</h5>
                                </div>
                                <div className="author-city">{data.author.city}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuccessStory;