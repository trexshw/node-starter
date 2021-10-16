import sum from './index';

describe('index', () => {
  describe('sum', () => {
    test('Add up two numbers, return correct result', () => {
      const testCases = [
        { a: 1, b: 1, expected: 2 },
        { a: -1, b: -1, expected: -2 },
        { a: 1, b: -1, expected: 0 },
      ];

      for (let i = 0; i < testCases.length; i += 1) {
        const result = sum(testCases[i].a, testCases[i].b);
        expect(result).toBe(testCases[i].expected);
      }
    });
  });
});
