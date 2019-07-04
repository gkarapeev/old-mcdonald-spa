import React from 'react'
import Word from '../Word/Word'
import './Verse.css'

const Verse = (props) => {
  const { animal, active } = props;

  return(
    <div className='Verse'>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O,</span>
      <span className='line'>And on his farm he had a <Word type='species' animal={animal} active={active} change={props.change}/>, E-I-E-I-O.</span>
      <span className='line'>With a <Word type='sound' animal={animal} active={active} change={props.change}/> <Word type='sound' animal={animal} active={active} change={props.change}/> here and a <Word type='sound' animal={animal} active={active} change={props.change}/> <Word type='sound' animal={animal} active={active} change={props.change}/> there,</span>
      <span className='line'>Here a <Word type='sound' animal={animal} active={active} change={props.change}/>, there a <Word type='sound' animal={animal} active={active} change={props.change}/>, ev’rywhere a <Word type='sound' animal={animal} active={active} change={props.change}/> <Word type='sound' animal={animal} active={active} change={props.change}/>.</span>
      <span className='line'>Old MacDonald had a farm, E-I-E-I-O</span>
    </div>
  )
};

export default Verse;