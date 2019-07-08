import React from 'react'
import Word from '../components/Word/Word'

// Reads a single item from the 'lines' array in a song object
// Generates a <Word/> component with each special word tag it finds (e.g. *1*)

function parseLine(verseIndex, lineIndex, song, scope) {
  const specialWord = /\*[0-9]+\*/
  let lineToParse = song.lines[lineIndex]
  let parsedLine = []
  let match
  let i = 1

  while ((match = specialWord.exec(lineToParse)) != null) {
    // Everything before the matched pattern
    let chunk1 = lineToParse.slice(0, match.index)

    // The word which corresponds to matched pattern
    let wordNumber = parseInt(match[0].replace('*', ''))
    let realWord = song.verses[verseIndex]['word' + wordNumber]

    // The remainder of the line
    let chunk3 = lineToParse.slice(match.index + match[0].length)

    // Transforming the parsed chunks and pushing them to an array
    parsedLine.push(
      chunk1,
      <Word
        verse={verseIndex}
        wordNum={wordNumber}
        wordValue={realWord}
        change={scope.handleWordChange}
        key={i} />
    )

    // Feeding the unparsed remainder back into the loop
    lineToParse = chunk3
    i++
  }

  // Adding any remaining text to the array after all special words have been replaced
  if (lineToParse.length >= 1) {
    parsedLine.push(lineToParse)
  }

  return parsedLine
}

export default parseLine;