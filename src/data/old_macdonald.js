const old_macdonald = {
  verses: [
    {
      word1: 'cow',
      word2: 'moo'
    },
    {
      word1: 'dog',
      word2: 'woof'
    },
    {
      word1: 'cat',
      word2: 'meow'
    },
    {
      word1: 'pig',
      word2: 'oink'
    },
    {
      word1: 'rat',
      word2: 'squeak'
    }
  ],
  lines: [
    'Old MacDonald had a farm, E-I-E-I-O,',
    'And on his farm he had a *1*, E-I-E-I-O.',
    'With a *2* *2* here and a *2* *2* there,',
    'Here a *2*, there a *2*, ev’rywhere a *2* *2*.',
    'Old MacDonald had a farm, E-I-E-I-O.'
  ]
}

function Song(verses, lines) {
  this.verses = verses
  this.lines = lines

  this.parseLine = function(verseIndex, lineIndex) {
    const specialWord = /\*[0-9]+\*/g
    var parsedLine = this.lines[lineIndex]

    while ((match = specialWord.exec(parsedLine)) != null) {
      let wordNumber = parseInt(match[0].replace('*', ''))
      let chunk1 = parsedLine.slice(0, match.index)
      let chunk2 = this.verses[verseIndex]['word' + wordNumber]
      let chunk3 = parsedLine.slice(match.index + match[0].length)

      parsedLine = chunk1 + chunk2 + chunk3
    }

    return parsedLine
  }
}

const oldMc = new Song(old_macdonald.verses, old_macdonald.lines)

for (let i=0; i < oldMc.verses.length; i++) {
  for (let j=0; j < oldMc.lines.length; j++) {
    console.log(oldMc.parseLine(i, j))
  }
  console.log('')
}