import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

export interface Contact {
  id: string
  name: string
  cellNumber: string
}

const contactAdapter = createEntityAdapter<Contact>({
  selectId: ({ id }) => id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactAdapter.getInitialState(),
  reducers: {
    add: contactAdapter.addOne,
    edit: contactAdapter.updateOne,
    remove: contactAdapter.removeOne,
  },
})

// Action creators are generated for each case reducer function
export const { add, edit, remove } = contactsSlice.actions

export const reducer = contactsSlice.reducer

export type RootState = {
  contacts: ReturnType<typeof contactAdapter.getInitialState>
}

// Can create a set of memoized selectors based on the location of this entity state
export const selectors = contactAdapter.getSelectors<RootState>(
  (state) => state.contacts
)
