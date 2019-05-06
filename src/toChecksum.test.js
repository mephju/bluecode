import toChecksum from './toChecksum'

it('computes correct checksum', () => {
  const checksum = toChecksum('5489850354')
  expect(checksum).toBe(7)
})