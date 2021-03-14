/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const state = () => ({
  error: {
    text: ''
  }
})

export const mutations = {
  error(state, error) {
    state.error = error
  }
}
