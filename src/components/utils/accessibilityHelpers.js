export const checkAccessibility = location => {
  // Example function to check if a location meets accessibility criteria
  if (!location.ramps || !location.elevators) {
    return false;
  }
  return true;
};

export const formatAccessibilityMessage = isAccessible => {
  return isAccessible
    ? 'This location is accessible.'
    : 'This location has accessibility issues.';
};
