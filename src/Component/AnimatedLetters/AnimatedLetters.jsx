import './AnimatedLetters.scss'

export const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

// 'i' beside char is a stepper or a roller , connected to outer prop we set 'index', to make the latency work , because we need rolling number beside classname to iterate in sass and make effect or animation

// so in conclusion mapping over the classname 'text-animate' to class over all letters, and the number next to it to give them a specific thing to delay over them.
