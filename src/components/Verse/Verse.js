import React from 'react'
import Word from '../Word/Word'
import './Verse.css'

const Verse = (props) => {
  const { animal, active } = props;

  return(
    <div className='Verse'>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O,</span>
      <span className='line'>And on his farm he had a <Word type='species' animal={animal} active={active} change={props.change}/>, E-I-E-I-O.</span>
      <span className='line'>With a <Word type='sound' animal={animal} active={active} change={props.change}/> {animal.sound} here and a {animal.sound} there,</span>
      <span className='line'>Here a {animal.sound}, there a  {animal.sound}, ev’rywhere a  {animal.sound}.</span>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O</span>
    </div>
  )
};

export default Verse;