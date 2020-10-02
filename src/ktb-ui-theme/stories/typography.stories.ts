import { Meta, moduleMetadata } from '@storybook/angular'
import { ButtonComponent, ButtonModule } from '../../button'

export default {
  title: 'System/Typography',
  subcomponents: [ButtonComponent],
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ]
} as Meta

export const Header = () => ({
  template: `
  <div class="typography-text-placement">
    <div>Header 1</div>
    <h1 class="h1-light">Krungthai Fast Light</h1>
    <h1 class="h1-regular">Krungthai Fast Regular</h1>
    <h1 class="h1-bold">Krungthai Fast Bold</h1>
  </div>
  <div class="typography-text-placement">
    <div>Header 2</div>
    <div style="height: 10px;"></div>
    <h2 class="h2-light">Krungthai Fast Light</h2>
    <h2 class="h2-regular">Krungthai Fast Regular</h2>
    <h2 class="h2-bold">Krungthai Fast Bold</h2>
  </div>
  <div class="typography-text-placement">
    <div>Header 3</div>
    <div class="empty-box"></div>
    <h3 class="h3-regular">Krungthai Fast Regular</h3>
    <h3 class="h3-bold">Krungthai Fast Bold</h3>
  </div>
  <div class="typography-text-placement">
    <div>Header 4</div>
    <div class="empty-box"></div>
    <h4 class="h4-regular">Krungthai Fast Regular</h4>
    <h4 class="h4-bold">Krungthai Fast Bold</h4>
  </div>
  <div class="typography-text-placement">
    <div>Header 5</div>
    <div class="empty-box"></div>
    <h5 class="h5-regular">Krungthai Fast Regular</h5>
    <h5 class="h5-bold">Krungthai Fast Bold</h5>
  </div>
  `
})

export const Body = () => ({
  template: `
  <div class="typography-text-placement">
    <div>Body Dark Grey</div>
    <p class="body-dark-grey">Krungthai Smart Regular</p>
  </div>
  <div class="typography-text-placement">
    <div>Body Medium Grey</div>
    <p class="body-medium-grey">Krungthai Smart Regular</p>
  </div>
  `
})

export const Subtitle = () => ({
  template: `
  <div class="typography-text-placement">
    <div>Subtitle 1 Medium Grey</div>
    <h5 class="subtitle1-medium-grey-bold">Krungthai Fast Bold</h5>
  </div>
  <div class="typography-text-placement">
    <div>Subtitle 1 Grey</div>
    <h5 class="subtitle1-grey-bold">Krungthai Fast Bold</h5>
  </div>
  <div class="typography-text-placement">
    <div>Subtitle 2</div>
    <h5 class="subtitle2-regular">Krungthai Smart Regular</h5>
  </div>
  `
})

export const Label = () => ({
  template: `
  <div class="typography-text-placement">
    <div>Label</div>
    <label class="label-bold">Krungthai Fast Bold</label>
  <div>
  `
})

export const Button = () => ({
  component: ButtonComponent,
  template: `
  <div class="typography-text-placement">
    <div>Button</div>
    <button ktbButton class="button-bold">Krungthai Fast Bold</button>
  <div>
  `
})

export const Caption = () => ({
  template: `
  <div class="typography-text-placement">
    <div>Caption 1</div>
    <p class="caption1-regular">Krungthai Smart Regular</p>
  </div>
  <div class="typography-text-placement">
    <div>Caption 2</div>
    <p class="caption2-regular">Krungthai Smart Regular</p>
  </div>
  `
})
