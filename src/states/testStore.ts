import { create } from "zustand"

interface userTokenTypes {
  testStr: string
  setTestStr: (value: string) => void
}

// const localToken = storage.getString(LOCAL.TOKEN) || ""
const useTestStore = create<userTokenTypes>((set) => ({
  testStr: "zustand 테스트 문구임",
  setTestStr: (value) => set({ testStr: value }),
}))

export { useTestStore }
