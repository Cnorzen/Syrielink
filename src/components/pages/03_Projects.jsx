
import HeaderModed from '../contentBlocks/HeaderModed';
import Donate from '../contentBlocks/page4Donate';
import DontMiss from '../contentBlocks/DontMiss';
import Footer from '../Footer';


export const Projects = () => { // page 3

    return (
        <section>
            <HeaderModed />
            <div className='container' style={{ maxWidth: '1620px' }}>
                <div className='row'>
                    <div className='col-xxl-3 col-md-12'>
                        <br />
                        <br />
                        <Donate />
                    </div>
                </div>
            </div>
            <DontMiss />
            <Footer />
        </section>
    )
}