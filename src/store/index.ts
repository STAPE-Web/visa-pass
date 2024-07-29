import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import State from './types'

const useGlobalStore = create<State>()(devtools((set) => ({
    isModal: false,

    changeIsModal: (value: boolean) => set({ isModal: value }),
})))

export default useGlobalStore