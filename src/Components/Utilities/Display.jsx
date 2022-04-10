import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../Styles/Display.css';

const Display = () => {
  const images = useMemo(
    () => ['csgo', 'fortnite', 'lol', 'minecraft', 'valorant'],
    []
  );
  const [img, setImg] = useState(images[0]);
  const index = useRef(0);

  useEffect(() => {
    let time = setTimeout(() => {
      index.current = (index.current + 1) % 5;
      setImg(images[index.current]);
    }, 10000);
    return () => {
      clearTimeout(time);
    };
  }, [images, img]);

  return (
    <a href={`#${img}`} className='display-container'>
      <img className='img display-img' src={`/img/${img}.jpg`} alt={img} />
    </a>
  );
};

export default Display;
