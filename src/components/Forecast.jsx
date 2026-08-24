export default function Forecast({ days, toDisplay, unit }) {
  return (
    <section className="forecast">
      {days.map((d) => (
        // BUG (issue #9): missing "key" prop on the mapped forecast cell.
        // BUG (issue #5): sub-zero temps get no styling/marker, so a freezing day looks
        // identical to a warm one (no visual cue for negative values).
        <div className="day">
          <span>{d.day}</span>
          <strong>{toDisplay(d.tempC)}°{unit}</strong>
        </div>
      ))}
    </section>
  )
}
