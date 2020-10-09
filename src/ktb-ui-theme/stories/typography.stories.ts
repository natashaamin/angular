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
    <div class="header-margin">Header 1</div>
    <h1 class="h1-light">Krungthai Fast Light</h1>
    <h1 class="h1-regular">Krungthai Fast Regular</h1>
    <h1 class="h1-bold">Krungthai Fast Bold</h1>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Header 2</div>
    <div style="height: 10px;"></div>
    <h2 class="h2-light">Krungthai Fast Light</h2>
    <h2 class="h2-regular">Krungthai Fast Regular</h2>
    <h2 class="h2-bold">Krungthai Fast Bold</h2>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Header 3</div>
    <div class="empty-box-header"></div>
    <h3 class="h3-regular">Krungthai Fast Regular</h3>
    <h3 class="h3-bold">Krungthai Fast Bold</h3>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Header 4</div>
    <div class="empty-box-header"></div>
    <h4 class="h4-regular">Krungthai Fast Regular</h4>
    <h4 class="h4-bold">Krungthai Fast Bold</h4>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Header 5</div>
    <div class="empty-box-header"></div>
    <h5 class="h5-regular">Krungthai Fast Regular</h5>
    <h5 class="h5-bold">Krungthai Fast Bold</h5>
  </div>
  `
})

export const Body = () => ({
  template: `
  <div class="typography-text-placement">
    <div class="header-margin">Body 1</div>
    <p class="body1-light">Krungthai Smart Light</p>
    <p class="body1-regular">Krungthai Smart Regular</p>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Body 2</div>
    <div style="height: 8px;"></div>
    <p class="body2-light">Krungthai Smart Light</p>
    <p class="body2-regular">Krungthai Smart Regular</p>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Body 3</div>
    <div style="height: 13px;"></div>
    <p class="body3-light">Krungthai Smart Light</p>
    <p class="body3-regular">Krungthai Smart Regular</p>
  </div>
  `
})

export const Subtitle = () => ({
  template: `
  <div class="typography-text-placement">
    <div class="header-margin">Subtitle 1</div>
    <h5 class="subtitle1-regular">Krungthai Fast Regular</h5>
    <h5 class="subtitle1-bold">Krungthai Fast Bold</h5>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Subtitle 2</div>
    <div style="height: 5px;"></div>
    <h5 class="subtitle2-regular">Krungthai Fast Regular</h5>
    <h5 class="subtitle2-bold">Krungthai Fast Bold</h5>
  </div>
  `
})

export const Caption = () => ({
  template: `
  <div class="typography-text-placement">
    <div class="header-margin">Caption 1</div>
    <p class="caption1-regular">Krungthai Fast Regular</p>
    <p class="caption1-bold">Krungthai Fast Bold</p>
  </div>
  <div class="typography-text-placement">
    <div class="header-margin">Caption 2</div>
    <p class="caption2-regular">Krungthai Fast Regular</p>
    <p class="caption2-bold">Krungthai Fast Bold</p>
  </div>
  `
})

export const Label = () => ({
  template: `
  <div class="typography-text-placement">
    <div class="header-margin">Label</div>
    <label class="label-regular">Krungthai Fast Regular</label>
    <br>
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
