import './Topbar.css';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

const Topbar = () => {
 
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Explora']
      }
    });
   }, []);
  

  return (
    <div className='topbar'>
       <div className='topbar-heads'>
        <p>Gallery</p>
       </div>
    </div>
  )
}

export default Topbar