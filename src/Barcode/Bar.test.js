import React from 'react'
import Bar from './Bar'
import { shallow } from 'enzyme'
import styles from './Bar.module.css'

it('renders correct bar', () => {
  const bar0 = shallow(<Bar color='#343343' digit={0} />)
  const bar1 = shallow(<Bar color='#343343' digit={1} />)
  const bar2 = shallow(<Bar color='#343343' digit={2} />)
  const bar3 = shallow(<Bar color='#343343' digit={3} />)
  const bar4 = shallow(<Bar color='#343343' digit={4} />)
  const bar5 = shallow(<Bar color='#343343' digit={5} />)
  const bar6 = shallow(<Bar color='#343343' digit={6} />)
  const bar7 = shallow(<Bar color='#343343' digit={7} />)
  const bar8 = shallow(<Bar color='#343343' digit={8} />)
  const bar9 = shallow(<Bar color='#343343' digit={9} />)

  expect(bar0.hasClass(`${styles.bar} ${styles.bar0}`)).toBe(true)
  expect(bar1.hasClass(`${styles.bar} ${styles.bar1}`)).toBe(true)
  expect(bar2.hasClass(`${styles.bar} ${styles.bar2}`)).toBe(true)
  expect(bar3.hasClass(`${styles.bar} ${styles.bar3}`)).toBe(true)
  expect(bar4.hasClass(`${styles.bar} ${styles.bar4}`)).toBe(true)
  expect(bar5.hasClass(`${styles.bar} ${styles.bar5}`)).toBe(true)
  expect(bar6.hasClass(`${styles.bar} ${styles.bar6}`)).toBe(true)
  expect(bar7.hasClass(`${styles.bar} ${styles.bar7}`)).toBe(true)
  expect(bar8.hasClass(`${styles.bar} ${styles.bar8}`)).toBe(true)
  expect(bar9.hasClass(`${styles.bar} ${styles.bar9}`)).toBe(true)

});
