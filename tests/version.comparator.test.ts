import { expect } from 'chai';
import { lte } from '../src/version.comparator';

describe('version comparator lte', (): void => {
  it('returns true if v1 == v2', (): void => {
    const actual: number = lte('5.06', '5.06');
    expect(actual).true;
  });

  it('returns true if v1 < v2', (): void => {
    const actual: number = lte('5.04', '5.06');
    expect(actual).true;
  });

  it('returns false if v1 > v2', (): void => {
    const actual: number = lte('5.06', '5.04');
    expect(actual).false;
  });
});
