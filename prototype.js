var music = {
  init: function(){
    document.addEventListener('click', music.generateExercise)
    document.addEventListener('touchstart', music.generateExercise)
  },
  generateExercise: function(){
    var random = Math.floor(Math.random()*3)
    switch(random) {
      case 0:
        music.randomSimilarMotion()
        break
      case 1:
        music.randomContraryMotion()
        break
      case 2:
        music.randomArpeggio()
        break
    }


  },
  randomSimilarMotion: function(){
    var scales = ['A flat major', 'D flat major', 'F harmonic minor', 'B flat harmonic minor', 'F melodic minor', 'B flat melodic minor', 'D flat chromatic']
    var hands = ['Right hand', 'Left hand', 'Hands together']
    var dynamicLevel = ['piano', 'forte', 'crescendo ascending | diminuendo descending']

    var content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild( music.createVariantWrapper('Similar Motion') )
    content.appendChild( music.createVariantWrapper(randomValue(scales)) )
    content.appendChild( music.createVariantWrapper(randomValue(hands)) )
    content.appendChild( music.createVariantWrapper(randomValue(dynamicLevel)) )
  },
  randomContraryMotion: function(){
    var scales = ['A flat major', 'F harmonic minor']

    var content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild( music.createVariantWrapper('Contrary Motion') )
    content.appendChild( music.createVariantWrapper(randomValue(scales)) )
  },
  randomArpeggio: function(){
    var scales = ['A flat major', 'D flat minor', 'A flat minor', 'D flat major', 'Dominant 7th of A flat', 'Dominant 7th of D flat', 'Diminished 7th of A flat', 'Diminished 7th of D flat']
    var hands = ['Right hand', 'Left hand', 'Hands together']

    var content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild( music.createVariantWrapper('Arpeggio') )
    content.appendChild( music.createVariantWrapper(randomValue(scales)) )
    content.appendChild( music.createVariantWrapper(randomValue(hands)) )
  },
  createVariantWrapper: function(s){
    var wrapper = document.createElement('div')
    wrapper.classList.add('variant')
    wrapper.innerHTML = s
    return wrapper
  }
}

function randomValue(a){
  return a[Math.floor(Math.random() * a.length)]
}

document.addEventListener('DOMContentLoaded', music.init)
