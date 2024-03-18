import React from 'react';
import './index.css';
import OneNews from '../Items/OneNews';

const SyNews = (props) => {
	
	return (  
		<div className='container news'>
			<div className='text-center mx-auto'>
				<h2>Tin Tức SynerLink</h2>
				<p className="news-text mx-auto mt-2">Hãy khám phá thế giới thông qua ống kính của chúng tôi! Với một dải rộng các chủ đề từ xã hội đến văn hóa và giáo dục, chúng tôi cung cấp cho bạn một trải nghiệm đọc tin tức phong phú và đa dạng.

</p>

<p className="news-text mx-auto mt-2">
Tin tức của chúng tôi không chỉ là thông tin, mà còn là một cửa sổ mở ra thế giới, mang đến cho bạn cái nhìn sâu sắc và đa chiều về những sự kiện và diễn biến mới nhất trên khắp thế giới. Chúng tôi cam kết cung cấp thông tin đáng tin cậy và chất lượng, giúp bạn hiểu rõ hơn về thế giới xung quanh và định hình quan điểm của bản thân.
</p>
			</div>
			<div className="aksel_news-main">
				<div className="row">
					{props.news.map((news, index) => ( 
						<OneNews key={index} news={news} /> 
					))}
				</div>
			</div>
		</div>
	)
}

export default SyNews;
