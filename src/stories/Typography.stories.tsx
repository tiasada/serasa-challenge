import React, { Children } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Typography, { Props } from './Typography'

export default {
  title: 'Typograpgy',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<Props> = (args) => <Typography {...args} />


export const Display = Template.bind({});
Display.args = {
  variant: 'Display',
  children: 'Button',
}

export const HeadingL = Template.bind({});
HeadingL.args = {
  variant: 'HeadingL',
  children: 'Button',
}

export const HeadingM = Template.bind({});
HeadingM.args = {
  variant: 'HeadingM',
  children: 'Button',
}

export const HeadingS = Template.bind({});
HeadingS.args = {
  variant: 'HeadingS',
  children: 'Button',
}

export const HeadingXS = Template.bind({});
HeadingXS.args = {
  variant: 'HeadingXS',
  children: 'Button',
}

export const Subheading = Template.bind({});
Subheading.args = {
  variant: 'Subheading',
  children: 'Button',
}

export const BodyM = Template.bind({});
BodyM.args = {
  variant: 'BodyM',
  children: 'Button',
}

export const BodyMBold = Template.bind({});
BodyMBold.args = {
  variant: 'BodyM',
  children: 'Button',
  bold: true,
  
}


