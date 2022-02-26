import { Cell } from './Cell'

type Props = {
  guess: string
  className: string
  letterLength: string
}

export const CurrentRow = ({ guess, className, letterLength }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(
    Array(parseInt(letterLength ?? '5') - splitGuess.length)
  )
  const classes = `flex justify-center mb-1 ${className}`

  return (
    <div className={classes}>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
