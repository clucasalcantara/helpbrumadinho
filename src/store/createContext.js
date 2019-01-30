import { createContext } from 'react'
import { initialState } from '.'

export default overrideContext =>
  createContext({ ...initialState, ...overrideContext })
