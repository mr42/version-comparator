import { expect } from 'chai';
import { lte } from '../src/version.comparator';
import { compare } from '../dist/version.comparator';

describe('version comparator comparison ', (): void => {
  it('returns 0 if v1 == v2', (): void => {
    let actual: number = compare('5.06', '5.06');
    expect(actual).is.equal(0);
    actual = compare('5.6', '5.06');
    expect(actual).is.equal(0);
  });

  it('returns 1 if v1 > v2', (): void => {
    let actual: number = compare('5.06', '5.04');
    expect(actual).is.equal(1);
    actual = compare('5.6', '5.04');
    expect(actual).is.equal(1);
  });

  it('returns -1 if v1 < v2', (): void => {
    let actual: number = compare('5.04', '5.06');
    expect(actual).is.equal(-1);
    actual = compare('5.4', '5.06');
    expect(actual).is.equal(-1);
  });

  it('returns 1 if v1.length > v2.length ', (): void => {
    const actual: number = compare('5.06.1', '5.06');
    expect(actual).is.equal(1);
  });

  it('returns -1 if v1.length < v2.length ', (): void => {
    const actual: number = compare('5.06', '5.06.1');
    expect(actual).is.equal(-1);
  });
});

describe('version comparator lte', (): void => {
  it('returns true if v1 == v2', (): void => {
    const actual = lte('5.06', '5.06');
    expect(actual).true;
  });

  it('returns true if v1 < v2', (): void => {
    const actual = lte('5.04', '5.06');
    expect(actual).true;
  });

  it('returns false if v1 > v2', (): void => {
    const actual = lte('5.06', '5.04');
    expect(actual).false;
  });
});
