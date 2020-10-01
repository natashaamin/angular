import { Meta, Story, moduleMetadata } from '@storybook/angular'

import { ButtonComponent, ButtonModule, ButtonVariants } from 'ktb-ui-components/button'

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
  argTypes: {
    ktbButton: {
      name: 'Button variants',
      defaultValue: ButtonVariants.Primary,
      description: `Controls the button styles. Can be one of \`${Object.values(ButtonVariants).join(' | ')}\``,
      control: {
        type: 'select',
        options: Object.values(ButtonVariants)
      }
    },
    disabled: {
      defaultValue: true
    }
  }
} as Meta

const Template: Story = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <button [ktbButton]="ktbButton">Button Label</button>
    <button [ktbButton]="ktbButton">Very Very Long Button Label</button>
    <button [ktbButton]="ktbButton">
      <span>+</span>
      With Icon
    </button>
    <button [ktbButton]="ktbButton" [disabled]="disabled">Disabled Button</button>
  `
})

export const Overview: Story = () => ({
  component: ButtonComponent,
  template: `
    <h2>Default button state</h2>
    <button ktbButton>Primary Button</button>
    <button [ktbButton]="'${ButtonVariants.Secondary}'">Secondary Button</button>
    <button [ktbButton]="'${ButtonVariants.Tertiary}'">Tertiary Button</button>
    <button [ktbButton]="'${ButtonVariants.TertiaryOutline}'">Tertiary Button</button>
    <h2>Disabled</h2>
    <button disabled ktbButton>Primary Button</button>
    <button disabled [ktbButton]="'${ButtonVariants.Secondary}'">Secondary Button</button>
    <button disabled [ktbButton]="'${ButtonVariants.Tertiary}'">Tertiary Button</button>
    <button disabled [ktbButton]="'${ButtonVariants.TertiaryOutline}'">Tertiary Button</button>
  `
})

export const Primary: Story = Template.bind({})
Primary.args = {
  ktbButton: ButtonVariants.Primary
}

export const Secondary: Story = Template.bind({})
Secondary.args = {
  ktbButton: ButtonVariants.Secondary
}

export const Tertiary: Story = Template.bind({})
Tertiary.args = {
  ktbButton: ButtonVariants.Tertiary
}

export const TertiaryOutline: Story = Template.bind({})
TertiaryOutline.args = {
  ktbButton: ButtonVariants.TertiaryOutline
}
