import { Card, CardContent, CardHeader, TextField } from '@mui/material'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, edit, RootState, selectors } from './contactsSlice'

export interface Props {
  id: string
  className?: string
}

export const Contact: FC<Props> = ({ id, className }) => {
  const contact = useSelector((state: RootState) =>
    selectors.selectById(state, id)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!contact) dispatch(add({ id, name: '', cellNumber: '' }))
  }, [])

  return (
    <Card className={className}>
      <CardHeader title="Contact" />
      <CardContent>
        <TextField
          id="contact-name"
          label="Name"
          sx={{ mr: 2 }}
          onBlur={(input) => {
            const newVal = input.target.value.trim()
            if (contact?.name !== newVal)
              dispatch(edit({ id, changes: { name: newVal } }))
          }}
        />
        <TextField
          id="contact-cellnumber"
          label="Cell Number"
          onBlur={(input) => {
            const newVal = input.target.value.trim()
            if (contact?.cellNumber !== newVal)
              dispatch(edit({ id, changes: { cellNumber: newVal } }))
          }}
        />
      </CardContent>
    </Card>
  )
}

export default Contact
