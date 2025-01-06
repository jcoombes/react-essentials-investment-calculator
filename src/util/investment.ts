// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

/** Represents the input parameters for investment calculation */
interface InvestmentData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

/** Represents the calculated data for each year of investment */
interface YearData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

/** Calculates yearly investment results based on given parameters */
export function calculateInvestmentResults(investmentData: InvestmentData) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;

  // Validate input data
  if (duration < 1) throw new Error('Duration must be at least 1 year');
  if (expectedReturn < -100) throw new Error('Expected return cannot be less than -100%');
  if (initialInvestment < 0) throw new Error('Initial investment cannot be negative');
  if (annualInvestment < 0) throw new Error('Annual investment cannot be negative');


  const annualData: YearData[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;

    const yearData: YearData = {
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    };

    annualData.push(yearData);
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "£1,000"
export const formatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
