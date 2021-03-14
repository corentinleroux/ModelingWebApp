/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const state = () => ({
  event: {
    name: '',
    data: null
  }
})

export const mutations = {
  emit(state, event) {
    state.event = event
  }
}
