export function getAuthUser (state) {
  return state.user
}

export function isUserLogin (state) {
  return Object.keys(state.user).length > 0
}
