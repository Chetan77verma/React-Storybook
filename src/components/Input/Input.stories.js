import React from 'react'
import Input from './Input'

export default {
   title: 'My Form/My Input',
   component: Input
}

export const Small = () => <Input size="small" placeholder="Small size input" />
export const Medium = () => <Input size="medium" placeholder="Medium size input" />
export const Large = () => <Input size="large" placeholder="Large size input" />
