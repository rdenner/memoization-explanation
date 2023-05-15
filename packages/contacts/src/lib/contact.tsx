import { Card, CardContent, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, RootState } from './contactsSlice'
import { get } from 'lodash'

export interface Props {
  id: string
  className?: string
}

export const Contact: FC<Props> = ({ id, className }) => {
  const contact = useSelector((state: RootState) =>
    get(state.contacts.contacts, id)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!contact) dispatch(add({ id, contact: { name: '', cellNumber: '' } }))
  }, [])

  return (
    <Card className={className}>
      <CardContent>
        <TextField
          id="contact-name"
          label="Name"
          sx={{ mr: 2 }}
          onBlur={(input) => {
            const newVal = input.target.value.trim()
            if (contact.name !== newVal)
              dispatch(edit({ id, contact: { name: newVal } }))
          }}
        />
        <TextField
          id="contact-cellnumber"
          label="Cell Number"
          onBlur={(input) => {
            const newVal = input.target.value.trim()
            if (contact.cellNumber !== newVal)
              dispatch(edit({ id, contact: { cellNumber: newVal } }))
          }}
        />
      </CardContent>
    </Card>
  )
}

export default Contact
