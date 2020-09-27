import { Meta, moduleMetadata } from '@storybook/angular'

import { MatIconModule } from '@angular/material/icon'
import { ButtonComponent, ButtonModule, ButtonVariants } from 'ktb-ui-components/button'

export default {
  title: 'Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, MatIconModule]
    })
  ],
  argTypes: {
    ktbButton: {
      label: 'Button variants',
      defaultValue: ButtonVariants.Primary,
      description: `Controls the button styles. Can be one of \`${Object.values(ButtonVariants).join(' | ')}\``,
      control: {
        type: 'select',
        options: Object.values(ButtonVariants)
      }
    }
  }
} as Meta

const Template = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
  template: `
    <button [ktbButton]="ktbButton">Button Label</button>
    <button [ktbButton]="ktbButton">Very Very Long Button Label</button>
    <button [ktbButton]="ktbButton">
      <span>+</span>
      With Icon
    </button>
    <button [ktbButton]="ktbButton" disabled>Disabled Button</button>
  `
})

export const Overview = () => ({
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

export const Primary = Template.bind({})
Primary.args = {
  ktbButton: ButtonVariants.Primary
}

export const Secondary = Template.bind({})
Secondary.args = {
  ktbButton: ButtonVariants.Secondary
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  ktbButton: ButtonVariants.Tertiary
}

export const TertiaryOutline = Template.bind({})
TertiaryOutline.args = {
  ktbButton: ButtonVariants.TertiaryOutline
}
