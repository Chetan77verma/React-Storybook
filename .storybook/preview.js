import React from 'react'
import { addDecorator } from "@storybook/react"
import Center from "../src/components/Center/Center"
addDecorator(story => <Center>{story()}</Center>) //Global Decorator: wrap every story with this <Center /> component in the whole project
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}