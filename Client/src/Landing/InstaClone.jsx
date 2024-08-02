import React from 'react';
import './InstaClone.scss';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';

const InstaClone = () => {

    return (
        <div className="container">
            <section className="stats">
                <div className="stats__img-holder" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/instagram-logo.png')" }}>
                </div>
                <div className="stats__data">
                    <div className="stats__data__point">
                        <div className="stats__data__point__value">126</div>
                        <div className="stats__data__point__description">Posts</div>
                    </div>
                    <div className="stats__data__point">
                        <div className="stats__data__point__value">310.2K</div>

                        <div className="stats__data__point__description">Followers</div>

                    </div>
                    <div className="stats__data__point">
                        <div className="stats__data__point__value">2</div>
                        <div className="stats__data__point__description">Following</div>
                    </div>
                </div>
            </section>
            <section className="description">
                <h2 className="description__title">corswebduo</h2>
                <p>Website designing agency!</p>
                <a href="https://cwd.netlify.app">www.cwd.com</a>
            </section>
            <section className="actions">
                <Link to="https://www.instagram.com/corswebduo/"><button className="actions__btn actions__btn--active">Follow</button></Link>
                <button className="actions__btn">Message</button>
                <button className="actions__btn actions__btn--icon">
                    <i className="material-icons">
                        <ChevronDownIcon color="#000" boxSize={5} />
                    </i>
                </button>
            </section>
            <section className="stories">
                {[
                    { img: 'https://images.pexels.com/photos/24889654/pexels-photo-24889654/free-photo-of-xbox-controller-on-marble-table-near-tv-set.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Game On' },
                    { img: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Client' },
                    { img: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Server' },
                    { img: 'https://images.pexels.com/photos/1476316/pexels-photo-1476316.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Services' },
                    { img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Trending' },
                    { img: 'https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Our Team' },
                    { img: 'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Goals' },
                    { img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Reach' }
                ].map((story, index) => (
                    <div className="stories__single" key={index}>
                        <div className="stories__single__img-holder">
                            <div className="stories__single__img-holder__inner" style={{ backgroundImage: `url(${story.img})` }}></div>
                        </div>
                        <p className="stories__single__description">{story.desc}</p>
                    </div>
                ))}
            </section>
            <section className="tabs">
                {[
                    { icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/grid-icon.png', alt: 'grid icon' },
                    { icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/igtv-icon.png', alt: 'igtv icon' },
                    { icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/smile-icon.png', alt: 'smile icon' },
                    { icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2053557/tagged-icon.png', alt: 'tagged icon' }
                ].map((tab, index) => (
                    <button className={`tabs__btn ${index === 0 ? 'tabs__btn--active' : ''}`} key={index}>
                        <img className='tabs__btn__icon' src={tab.icon} alt={tab.alt} />
                    </button>
                ))}
            </section>
            <section className="grid">
                {[
                    "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://elements-cover-images-0.imgix.net/2e363c2c-e003-4872-8bdc-eef698b502dc?auto=compress%2Cformat&w=710&fit=max&s=a55c24d104c7431cd53a7de69a197b51",
                    "https://elements-cover-images-0.imgix.net/93bfd0b0-01c7-4caa-82fe-273c6a60b7e8?auto=compress%2Cformat&w=710&fit=max&s=f5a25bc79634d6d4784419473ea3d642",
                    "https://elements-cover-images-0.imgix.net/355a761d-8e4b-45c8-b93b-da95a6b0b393?auto=compress%2Cformat&w=710&fit=max&s=cbbf5607a0890bf92737792d312fd64e",
                    "https://elements-cover-images-0.imgix.net/0c95d5d4-c8c1-452c-bebc-5777b62791c5?auto=compress%2Cformat&w=710&fit=max&s=6b989e017e2474b63f11aa50e8ddec07",
                    "https://elements-cover-images-0.imgix.net/372e0d6d-386c-4874-b3cd-49dfe1633161?auto=compress%2Cformat&w=710&fit=max&s=27982e0d1ca3d1251d416f63b383f40a",
                    "https://elements-cover-images-0.imgix.net/0e7b8ff6-0f0a-42c1-be06-8c20e48cf974?auto=compress%2Cformat&w=710&fit=max&s=b9a96c0b76ff0e1274ff688299e9aad5",
                    "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&w=600",
                    "https://elements-cover-images-0.imgix.net/deb7a4c2-6a87-4b72-9834-0fd6ed0a4cc5?auto=compress%2Cformat&w=710&fit=max&s=867df951eb3d49866eef52d1fc493c0e",
                    "https://elements-cover-images-0.imgix.net/1edbffd6-1bd2-4fe4-9d99-a354eebd857a?auto=compress%2Cformat&w=710&fit=max&s=1bcffc1a39401169fe75affc7f09f5b9",
                ].map((src, index) => (
                    <div className="grid__img-holder" key={index}>
                        <img src={src} alt={`grid item ${index}`} className="grid__img-holder__inner" />
                    </div>
                ))}
            </section>


            {/*            
            <section className="grid">
                {[
                    
                    "https://elements-cover-images-0.imgix.net/85ec7ef7-50db-4c7f-a530-73e84dc4b711?auto=compress%2Cformat&w=710&fit=max&s=f4c4a466479a22d2bd326af5b90d85bf",
                    "https://elements-cover-images-0.imgix.net/3fcf5b4e-aa22-4592-97bb-eb93407e1492?auto=compress%2Cformat&w=710&fit=max&s=73a5730561f93db1d5457498370f0ccb",
                    
                ].map((img, index) => (
                    <div className="grid__img-holder" key={index}>
                        <div className="grid__img-holder__inner" style={{ backgroundImage: url(${img}) }}></div>
                    </div>
                ))}
            </section> */}





















        </div >
    );
};

export default InstaClone;
