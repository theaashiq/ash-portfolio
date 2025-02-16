import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './portfolio.css'
import { myProject } from './db/data'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PortfolioDetails from './PortfolioDetails';

const Portfolio = (props) => {

const { darkMode } = props

const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 998);

useEffect(() => {
  const handleResize = () => setIsMobileView(window.innerWidth <= 998);
  window.addEventListener('resize', handleResize);
  
  // Cleanup listener on unmount
  return () => window.removeEventListener('resize', handleResize);
},);

  return (
    <>
      <motion.div
        className='portfolio-container'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        viewport={{once:true}}>
        <p className='portfolio-heading' style={{marginTop:'0px'}}>Projects</p><span></span>
        <div className='portfolio-block'>
  {myProject.map((obj, index) => (
    <div className='portfolio' key={index}>
      {/* Conditional rendering for even/odd index */}
      {isMobileView || index % 2 !== 0 ? (
                <>
                <div 
                  className='portfolio-propName' 
                  style={{display: isMobileView ?  'block' : 'none', marginBottom: isMobileView && '20px'}}>
                    {obj.proName}
                  </div>
                <div className='portfolio-pic'>
                  <img 
                    src={obj.pic} 
                    onClick={() => window.open(obj.codeLink, '_blank')} 
                  />
                </div>
                <div className='portfolio-Details'>
                  <PortfolioDetails obj={obj} darkMode={darkMode} />
                </div>
              </>

      ) : (
        <>
          <div className='portfolio-Details'>
            <PortfolioDetails obj={obj} darkMode={darkMode} />
          </div>
          <div className='portfolio-pic'>
            <img 
              src={obj.pic} 
              onClick={() => window.open(obj.codeLink, '_blank')} 
            />
          </div>
        </>
      )}
      {/* {myProject.length !== index &&  */}
      <hr className='portfolio-divider' />
    </div>
  ))}
</div>

      </motion.div>
      <div className='portfolio-contBlock' style={{paddingBottom:'20px'}}>
          <p className='about-mySkill-heading' style={{marginBottom:'10px'}}>Contributions</p>
          <div>
            <div className='portfolio-propName' style={{textAlign: 'center'}}>Marie ERP</div>
            <div className='portfolio-propDetails' style={{textAlign:'center', padding:'0px 15%'}}>
              A restaurant application to manage accounting, stock details, and profit margins of menu items.
              Collaborating with backend developers to implement user authentication and authorization.
              Designing a responsive and user-friendly interface using CSS5 and Bootstrap.
            </div>
            <div className='portfolio-propTech' style={{justifyContent:'center'}}>
                  Tech
                  {/* {obj.tech.map((obj) => ( */}
                    <div 
                      className='portfolio-propTechList' 
                      style={{backgroundColor: darkMode ? '#272829' : '#fff'}}>
                      React JS
                    </div>
                    <div 
                      className='portfolio-propTechList' 
                      style={{backgroundColor: darkMode ? '#272829' : '#fff'}}>
                      CSS
                    </div>
                    <div 
                      className='portfolio-propTechList' 
                      style={{backgroundColor: darkMode ? '#272829' : '#fff'}}>
                      Bootstrap
                    </div>
                  {/* // ))} */}
            </div>
          </div>
      </div>
    </>
  )
}

export default Portfolio