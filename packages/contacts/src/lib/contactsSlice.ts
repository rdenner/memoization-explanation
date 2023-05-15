import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { unset } from 'lodash'

export interface Contact {
  name: string
  cellNumber: string
}

export interface ContactsState {
  contacts: Record<string, Contact>
}

const initialState: ContactsState = {
  contacts: {},
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ id: string; contact: Contact }>) => {
      state.contacts[action.payload.id] = action.payload.contact
    },
    edit: (
      state,
      action: PayloadAction<{ id: string; contact: Partial<Contact> }>
    ) => {
      const existing = state.contacts[action.payload.id]
      if (existing) {
        state.contacts[action.payload.id] = {
          ...existing,
          ...action.payload.contact,
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      unset(state.contacts, action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, edit, remove } = contactsSlice.actions

export const reducer = contactsSlice.reducer

export type RootState = { contacts: ContactsState }
