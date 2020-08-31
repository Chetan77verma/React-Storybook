import React from 'react'
import { addDecorator } from "@storybook/react"
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core"
// import Center from "../src/components/Center/Center"
import { withConsole } from "@storybook/addon-console"
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