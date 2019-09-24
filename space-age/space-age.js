//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  const earthYears = (ageInSeconds / 60 / 60 / 24 / 365.25).toFixed(2)

  if (planet === 'earth') {
    return parseFloat(earthYears)
  }

  else if (planet === 'mercury') {
    return parseFloat((earthYears / 0.2408467).toFixed(2))
  }

  else if (planet === 'venus') {
    return parseFloat((earthYears / 0.6154).toFixed(2))
  }

  else if (planet === 'mars') {
    return parseFloat((earthYears / 1.8808158).toFixed(2))
  }

  else if (planet === 'jupiter') {
    return parseFloat((earthYears / 11.862615).toFixed(2))
  }

  else if (planet === 'saturn') {
    return parseFloat((earthYears / 29.447498).toFixed(2))
  }

  else if (planet === 'uranus') {
    return parseFloat((earthYears / 84.016846).toFixed(2))
  }

  else if (planet === 'neptune') {
    return parseFloat((earthYears / 164.79132).toFixed(2))
  }
};
