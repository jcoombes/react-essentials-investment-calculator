export default function UserInput() {
  return (
    <form id="user-input">
      <fieldset className="input-group">
        <legend>User Input</legend>
        <p>
          <label htmlFor="current-savings">Current Savings (£)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (£)</label>
          <input type="number" id="yearly-contribution" />
        </p>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </fieldset>
      <section className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </section>
    </form>
  )
}
