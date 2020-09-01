import React from 'react'
import { addDecorator , addParameters } from "@storybook/react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"
// import Center from "../src/components/Center/Center"
import { withConsole } from "@storybook/addon-console"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import {  withA11y } from "@storybook/addon-a11y"
addDecorator(story => <ThemeProvider theme={theme}>
  <CSSReset />
  {story()}
</ThemeProvider>) //Global Decorator: wrap every story with this <Center /> component in the whole project
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

/*

  to enhance the functionality of console logs in story book ( we can see from where the log statement comes)

**/
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

/* 
  add multiple devices for preview so that developer can easily test responsiveness of the component
**/

addParameters({
  viewport: {
    viewports:INITIAL_VIEWPORTS
  }
})

/* 
  added to fulfill accessibility standards in component/project
**/

addDecorator(withA11y)