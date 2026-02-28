import { formatCurrency, truncate, capitalize } from './formatters';

describe('formatCurrency', () => {
  it('formats a positive number as USD by default', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50');
  });

  it('formats zero correctly', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('formats a negative amount', () => {
    expect(formatCurrency(-99.99)).toBe('-$99.99');
  });

  it('supports other currencies', () => {
    expect(formatCurrency(100, 'EUR', 'de-DE')).toMatch(/100/);
  });
});

describe('truncate', () => {
  it('returns the original string when shorter than maxLen', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('returns the original string when equal to maxLen', () => {
    expect(truncate('hello', 5)).toBe('hello');
  });

  it('truncates and appends ellipsis when longer than maxLen', () => {
    expect(truncate('hello world', 5)).toBe('hello…');
  });

  it('handles an empty string', () => {
    expect(truncate('', 5)).toBe('');
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hELLO')).toBe('Hello');
  });

  it('handles an already capitalized string', () => {
    expect(capitalize('World')).toBe('World');
  });

  it('handles a single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('returns an empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

});
