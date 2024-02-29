import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
    
    <p className='cta-text'>Am I the match ? <br className='sm:block hidden'/>Let's communicate...</p>
    <Link to="/contact" className='btn'>Contact</Link>
    </section>
  )
}

export default CTA
