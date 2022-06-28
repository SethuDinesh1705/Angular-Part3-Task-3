import { TestpipePipe } from './testpipe.pipe';

describe('TestpipePipe', () => {
  let pipe: TestpipePipe;
  beforeEach(() => {
    pipe = new TestpipePipe();
  });
  it('create an instance', () => {
    //const pipe = new TestpipePipe();
    expect(pipe).toBeTruthy();
  });
  it('Less than 20 not eligible', () => {
    //const pipe = new TestpipePipe();
    expect(pipe.transform(10)).toBe('Not eligible');
  });
  it('Greater than 20 only Eligible', () => {
    expect(pipe.transform(25)).toBe('Eligible');
  });
  it('Indian only Eligible', () => {
    expect(pipe.verify('Indian')).toBe('Eligible');
  });
  it('Non Indian not eligible', () => {
    expect(pipe.verify('American')).toBe('Not Eligible');
  });
});
