import React, {useState} from 'react';
import './pictures.css'
import Modal from './Modal';
import Dimmer from './Dimmer';

const Pictures = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });
  
    const handleImageClick = (src, alt) => {
      setSelectedImage({ src, alt });
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

return <div className='Pictures'>


    <div className="header">
    <Dimmer onClick={closeModal} isActive={modalOpen} />
    </div>
    <div className='first_day'>
    <img src="./images/first_day.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/first_day.jpg', 'Image Alt')} />
    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='bridge'>
    <img src="./images/bridge.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/bridge.jpg', 'Image Alt')} />
    
    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='cozy'>
    <img src="./images/cozy.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/cozy.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='cruise'>
    <img src="./images/cruise.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/cruise.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='drama_awards'>
    <img src="./images/drama_awards.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/drama_awards.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='drama_show'>
    <img src="./images/drama_show.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/drama_show.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='early_beach'>
    <img src="./images/early_beach.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/early_beach.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='fav_pic'>
    <img src="./images/fav_pic.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/fav_pic.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='philly_kiss'>
    <img src="./images/philly_kiss.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/philly_kiss.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='prom_funny'>
    <img src="./images/prom_funny.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/prom_funny.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='pumpkin_killer'>
    <img src="./images/pumpkin_killer.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/pumpkin_killer.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='senior_day'>
    <img src="./images/senior_day.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/senior_day.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='senior_week'>
    <img src="./images/senior_week.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/senior_week.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='the_patch'>
    <img src="./images/the_patch.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/the_patch.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='true_love'>
    <img src="./images/true_love.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/true_love.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>

    <div className='tyler_state'>
    <img src="./images/tyler_state.jpg" width="auto" height="350" alt="Love" onClick={() => handleImageClick('./images/tyler_state.jpg', 'Image Alt')} />

    {modalOpen && <Modal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal} />}
    </div>


    {/* <div className='spotify'>           FIGURE BACKGROUND MUSIC OUT IF EXTRA TIME
    <iframe
  title="My Awesome Spotify Playlist"
  src="https://open.spotify.com/embed/playlist/0hsnIZMfBueNNyGDD2Zujp"
  width="300"
  height="380"
  frameborder="0"
  allowtransparency="true"
  allow="encrypted-media"
></iframe>

    </div> */}



</div>

}



export default Pictures;