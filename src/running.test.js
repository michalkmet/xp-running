const spacey = require('./running');

describe('Running out of space - spacey', () => {
  it('should return array', () => {
    expect(spacey([])).toEqual([]);
  });
  it('should return one word', () => {
    expect(spacey(['word'])).toEqual(['word']);
  });
  it('should return all words', () => {
    expect(spacey(['i', 'have','no','space'])).toEqual(['i','ihave','ihaveno','ihavenospace']);
  });
});
