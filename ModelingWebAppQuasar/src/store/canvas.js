/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const state = () => ({
  data: {
    scale: 1,
    lineName: 'curve',
    fromArrowType: '',
    toArrowType: 'triangleSolid',
    locked: 0
  }
})

export const mutations = {
  data(state, data) {
    state.data = data
  }
}
