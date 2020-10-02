import { Meta, moduleMetadata } from '@storybook/angular'
import { ContainerComponent, ContainerModule } from 'ktb-ui-components/container'

export default {
  title: 'Container',
  component: ContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [ContainerModule]
    })
  ]
} as Meta

export const Overview = () => ({
  component: ContainerComponent,
  template: `
 <div ktbContainer></div>
 `
})
