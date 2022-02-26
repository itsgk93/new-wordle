import { getMaxChallanges } from '../../lib/localStorage'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  currentRowClassName: string
  letterLength?: string
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
  letterLength,
}: Props) => {
  const empties =
    guesses.length < getMaxChallanges(letterLength ?? '5') - 1
      ? Array.from(
          Array(getMaxChallanges(letterLength ?? '5') - 1 - guesses.length)
        )
      : []
  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
        />
      ))}
      {guesses.length < getMaxChallanges(letterLength ?? '5') && (
        <CurrentRow
          guess={currentGuess}
          className={currentRowClassName}
          letterLength={letterLength ?? '5'}
        />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} letterLength={letterLength} />
      ))}
    </div>
  )
}
