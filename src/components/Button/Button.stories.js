import React from 'react'
import Button from './Button'
import Center from '../Center/Center'
export default {
   title: 'My Form/My Button',
   component: Button,
   // decorators: [story => <Center>{story()}</Center>] //{Usage : Local decorator: When ever this story is created warp it it <Center /> component}
}

export const Primary = () => <Button variant="primary">Primary</Button>

export const Secondary = () => <Button variant="secondary">Secondary</Button>

export const Success = () => <Button variant="success">Success</Button>

export const Danger = () => <Button variant="danger">Danger</Button>
