import { Component, EventEmitter, ViewEncapsulation, Output, OnInit } from '@angular/core'
import { ActivationStart } from '@angular/router'
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { AlertModule } from 'ktb-ui-components/alert'
import { AlertType } from './alert.model'

import { action } from '@storybook/addon-actions'

@Component({
  selector: 'alert-dynamic-button',
  template: `
    <button type="'${AlertType.Warning}'">
      Success
    </button>
  `
})
class AlertDynamicComponent {
  links = [
    {
      text: 'Learn more.',
      href: 'https://ibm.com'
    }
  ]

  constructor() {}
}

storiesOf('Alert Notification', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AlertDynamicComponent],
      imports: [AlertModule]
    })
  )
  .add('Basic', () => ({
    template: `
      <ktbAlert inputpls="i_want_success" message="helloooo" [linkLabel]="links"></ktbAlert>
      <ktbAlert inputpls="i_want_warn" message="helloooo" [linkLabel]="links"></ktbAlert>
      <ktbAlert inputpls="i_want_error" message="helloooo" [linkLabel]="links"></ktbAlert>
    `,
    props: {
      links: [
        {
          href: 'https://google.com',
          text: 'Learn more.'
        }
      ],
      labelClick: action('labelClick')
    },
    encapsulation: ViewEncapsulation.None
  }))
  .add('Dynamic', () => ({
    template: `
            <alert-dynamic-button></alert-dynamic-button>
            `,
    encapsulation: ViewEncapsulation.None
  }))
