import React from 'react'
import { mount } from 'enzyme'
import ThemeEditor from './ThemeEditor'
import ReactColorPicker from 'react-circular-color'

it('displays correct color pickers', () => {
  const wrapper = mount(<ThemeEditor />)

  
  expect(wrapper.state('picker')).toBe('')
  expect(wrapper.find(ReactColorPicker).length).toBe(0)

  wrapper.find('input[name="primary"]').simulate('focus')
  expect(wrapper.state('picker')).toBe('primary')
  expect(wrapper.find(ReactColorPicker).length).toBe(1)

  wrapper.find('input[name="secondary"]').simulate('focus')
  expect(wrapper.state('picker')).toBe('secondary')
  expect(wrapper.find(ReactColorPicker).length).toBe(1)

});
