import React from 'react'
import Word from '../components/Word/Word'

// 1. Reads a single item from the 'lines' array in a song object
// 2. Parses the string for special words, marked as a number between two asterisk symbols (e.g. *2*)
// 3. Generates a <Word/> component with each special word tag it finds
// 4. Returns an array containing plain strings and/or <Word/> components

function parseVerse(verseIndex, song, scope, custom) {
  let lines = []
  let passedNums = [] // Using this to generate only 1 <Word/> instance for each special word

  for (let lineIndex = 0; lineIndex < song.lines.length; lineIndex++) {
    const specialWord = /\*[0-9]+\*/
    let lineToParse = song.lines[lineIndex]
    let parsedLine = []
    let match
    let i = 1

    while ((match = specialWord.exec(lineToParse)) != null) {
      // Everything before the matched pattern
      let chunk1 = lineToParse.slice(0, match.index)

      // The word number
      let wordNumber = parseInt(match[0].replace('*', ''))
      
      // The word which corresponds to matched pattern
      let realWord = song.verses[verseIndex]['word' + wordNumber]
      
      // The remainder of the line
      let chunk3 = lineToParse.slice(match.index + match[0].length)
      
      // Transforming the parsed chunks and pushing them to an array
      const isPassed = passedNums.indexOf(wordNumber) !== -1
      const wordJSX = <Word
                        verse={verseIndex}
                        wordNum={wordNumber}
                        wordValue={realWord}
                        change={scope.handleWordChange}
                        active={custom}
                        key={i} />

      const word = isPassed ? realWord : wordJSX
      parsedLine.push(chunk1, word)
      
      // Feeding the unparsed remainder back into the loop
      lineToParse = chunk3

      passedNums.push(wordNumber)
      i++
    }

    // Adding any remaining text to the array after all special words have been replaced
    if (lineToParse.length >= 1) {
      parsedLine.push(lineToParse)
    }

    lines.push(parsedLine)
  }

  return lines
}

export default parseVerse;