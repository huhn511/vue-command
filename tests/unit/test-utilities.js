import { mount } from '@vue/test-utils'

import VueCommand from '../../src/components/VueCommand'
import VueCommandWrapper from './VueCommandWrapper'
import { createStdout, createDummyStdout } from '../../lib'

export const getRandom = () => Math.random().toString(36).substring(7)

export const getEmptyCommands = () => ({ [null]: () => createDummyStdout() })
export const getCommands = command => ({ [command]: () => createStdout(command) })

export const getDefaultProps = () => ({ executed: new Set(), history: [createDummyStdout()] })

export const getMountedWrapper = (props, commands, slots) => mount(VueCommand, {
  propsData: { commands, ...props },
  slots,
})

export const getChildMountedWrapper = (
  builtIn,
  commands,
  props, 
) => mount(VueCommandWrapper, {
  propsData: { commands, builtIn, ...props}
})

export const enterAndTrigger = (wrapper, value, event = 'keyup.enter') => {
  wrapper.find('input').setValue(value)
  wrapper.find('input').trigger(event)
}
