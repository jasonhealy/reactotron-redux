import { toJs } from 'mori'

export default state => {
  // If we have a toJS, lets assume we need to call it to get a plan 'ol JS object
  // NOTE: This handles ImmutableJS
  if (state.toJS) {
    return state.toJS()
  }

  return toJs(state)
}
