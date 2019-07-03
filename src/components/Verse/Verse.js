import React from 'react'
import './Verse.css'

const Verse = (props) => {
  const { animal, sound } = props;

  return(
    <div className='Verse'>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O,</span>
      <span className='line'>And on his farm he had a {animal}, E-I-E-I-O.</span>
      <span className='line'>With a {sound} {sound} here and a {sound} {sound} there,</span>
      <span className='line'>Here a {sound}, there a {sound}, ev’rywhere a {sound} {sound}.</span>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O</span>
    </div>
  )
};

export default Verse;