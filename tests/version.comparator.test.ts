import { compare } from '../src/version.comparator';
import { expect } from 'chai';

describe('version comparator', (): void => {
  it('comparison returns 0 if v1 == v2', (): void => {
    let actual: number = compare('5.06', '5.06');
    expect(actual).is.equal(0);
    actual = compare('5.6', '5.06');
    expect(actual).is.equal(0);
  });

  it('comparison returns 1 if v1 > v2', (): void => {
    let actual: number = compare('5.06', '5.04');
    expect(actual).is.equal(1);
    actual = compare('5.6', '5.04');
    expect(actual).is.equal(1);
  });

  it('comparison returns -1 if v1 < v2', (): void => {
    let actual: number = compare('5.04', '5.06');
    expect(actual).is.equal(-1);
    actual = compare('5.4', '5.06');
    expect(actual).is.equal(-1);
  });

  it('comparison returns 1 if v1.length > v2.length ', (): void => {
    const actual: number = compare('5.06.1', '5.06');
    expect(actual).is.equal(1);
  });

  it('comparison returns -1 if v1.length < v2.length ', (): void => {
    const actual: number = compare('5.06', '5.06.1');
    expect(actual).is.equal(-1);
  });
});
