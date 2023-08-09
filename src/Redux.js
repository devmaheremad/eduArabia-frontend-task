import { configureStore, createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    mode: false,
    lang: 'rtl',
    search: '',
    isUpdate: false,
    activeLink: 0,
    isSearch: false,
    Manufacturers: [],
    isStacky: 2,
    isActiveBarSide: true,
  },
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload
    },
    changeLang(state, action) {
      state.lang = action.payload
    },
    login(state, action) {
      state.user = action.payload
    },
    register(state, action) {
      state.user = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    setIsUpdate(state, action) {
      state.isUpdate = !state.isUpdate
    },
    setActiveLink(state, action) {
      state.activeLink = action.payload
    },
    setIsSearch(state, action) {
      state.isSearch = !state.isSearch
    },
    setManufacturers(state, action) {
      state.Manufacturers = action.payload
    },
    setIsStacky(state, action) {
      state.isStacky = action.payload
    },
    setIsActiveBarSide(state, action) {
      state.isActiveBarSide = action.payload
    },
  },
})
export const actions = countSlice.actions
const store = configureStore({
  reducer: countSlice.reducer,
})
export default store
