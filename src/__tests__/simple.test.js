// A simple test file that doesn't rely on React components

describe('Simple Test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('string concatenation', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World');
  });

  test('boolean logic', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  test('array operations', () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3);
    expect(arr).toContain(2);
  });
});