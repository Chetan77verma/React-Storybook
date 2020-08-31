import React from 'react'
import { Button } from "@chakra-ui/core"
import { action,actions } from "@storybook/addon-actions"

export default {
   title:'My Form/ChakraButton',
   component:Button
}

export const Success = () => <Button variantColor="green" onClick={action('sucess button clicked')}>Success</Button>
export const Danger = () => <Button variantColor="red" {...actions('onClick','onMouseOver')}>Danger</Button>
