import React from 'react'
import { Button } from "@chakra-ui/core"
import { action, actions } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"
export default {
   title: 'Chakra/ChakraButton',
   component: Button
}

export const Success = () => <Button variantColor="green" onClick={action('sucess button clicked')}>Success</Button>
export const Danger = () => <Button variantColor="red" {...actions('onClick', 'onMouseOver')}>Danger</Button>
/*
   normal way to see logs
**/
// export const Log = () => <Button variantColor="blue" onClick={() => { console.log('button clicked') }}>Log</Button>


/*
   Storyway way to see logs  (import add-on in preview.js i.e global level)
**/

export const Log = () => <Button variantColor="blue" onClick={() => { console.log('button clicked',process.env.STORYBOOK_THEAM) }}>Log</Button>
export const Knob = () => <Button variantColor="purple" disabled={boolean('Disabled', false)} >{text('Label', "Button Label")}</Button>
