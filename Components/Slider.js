import { useState, useEffect } from 'react';
import styles from './Slider.module.css';

const images = [
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957039/first%20year%20students/abhinav_wsku13.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957008/first%20year%20students/akhil_qvaue3.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957008/first%20year%20students/aniket_bqxhor.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957008/first%20year%20students/anjali_odwzkq.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/ankush_zge4ub.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957008/first%20year%20students/anuj_efuvjo.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/arpit_ureixh.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/avneesh_vyi4rf.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/ayush1_lymxtf.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/ayush_bks3hx.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683968505/first%20year%20students/charu_sfy2k5_rpx5gj.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957009/first%20year%20students/drishti_hnnhj7.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/govind_ngsjwe.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/harsh_lmtrzf.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/jugantar_f35xyj.png',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/kaushal_icroyl.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/mukesh_l8iijl.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/naman_cdtjat.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/nikhil_zwd8xs.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957010/first%20year%20students/nitesh_iksjmj.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/pankaj_mdu4xo.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/ranjeet_fzmiic.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/rashi_ko2kj5.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/shailesh_usyzwi.png',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/shivam_mra5bj.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/siddharth_c7kjtq.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/sneha_rfsxe4.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/sumit_rav7ml.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957011/first%20year%20students/tanmay_guwhhw.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957012/first%20year%20students/tarunSingh_c308ql.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957013/first%20year%20students/tarun_mlgxom.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957012/first%20year%20students/utkarsh_t3hhep.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957012/first%20year%20students/vansh_ija8cn.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957012/first%20year%20students/yash_authlu.jpg',
  'https://res.cloudinary.com/dasuumgyw/image/upload/v1683957012/first%20year%20students/yogesh_z19mzq.jpg',
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Automatic sliding
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const imageContainer = document.getElementById('image-container');
    const slideWidth = imageContainer.offsetWidth;
    const transformValue = `translateX(${-slideWidth * currentImage}px)`;
    imageContainer.style.transform = transformValue;
  }, [currentImage]);

  return (
    <div className={styles.slider}>
      <div className={styles.imageContainer} id="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <button className='mx-5 font-bold' onClick={previousSlide}>Previous</button>
        <button className='mx-[1050px] font-bold' onClick={nextSlide}>Next</button>
      </div>
      {/* <div className={styles.pagination}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentImage ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
