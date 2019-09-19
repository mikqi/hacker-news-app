import React, { createContext, useReducer } from 'react'

let PageContext
const { Consumer, Provider } = (PageContext = createContext())

const initialAppState = {
  page: 1,
  loading: false,
  news: [],
  menu: []
}

/**
 * @param {initialAppState} state
 * @param {Object} action
 * @param {('NEXT_PAGE'|'PREV_PAGE'|'SET_NEWS'|'TOGGLE_LOADING'|'SET_MENU')} action.type
 * @param {initialAppState} action.payload
 */
const appReducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 }
    case 'PREV_PAGE':
      return { ...state, page: state.page > 1 ? state.page - 1 : state.page }
    case 'TOGGLE_LOADING':
      return { ...state, loading: !state.loading }
    case 'SET_NEWS':
      return { ...state, news: action.payload }
    case 'SET_MENU':
      return { ...state, menu: action.payload }
    default:
      throw new Error('Unexpected Action')
  }
}

const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  return (
    <Provider
      value={{
        ...state,
        dispatch: dispatch
      }}
    >
      {children}
    </Provider>
  )
}

export { PageProvider, Consumer as PageConsumer, PageContext }
