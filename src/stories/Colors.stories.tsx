import React, { Children } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ColorBox, { Props } from './ColorBox'

export default {
  title: 'Colors',
  component: ColorBox,
} as Meta

const Template: Story<Props> = (args) => <ColorBox {...args} />

export const DarkHigh = Template.bind({});
DarkHigh.args = {
  
  color: 'dark-high',
  children: 'Dark High',
  
}

export const DarkMedium = Template.bind({});
DarkMedium.args = {
  color: 'dark-medium',
  children: 'Dark Medium',
}

export const DarkLow = Template.bind({});
DarkLow.args = {
  color: 'dark-low',
  children: 'Dark Low',
}

export const Magenta = Template.bind({});
Magenta.args = {
  color: 'magenta',
  children: 'Magenta',
}

export const LightHigh = Template.bind({});
LightHigh.args = {
  color: 'light-high',
  children: 'Light High',
}

export const LightSolid = Template.bind({});
LightSolid.args = {
  color: 'light-solid',
  children: 'Light Solid',
}