import { Component, ViewEncapsulation } from '@angular/core'
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { AlertModule, AlertService } from 'ktb-ui-components/alert'

@Component({
  selector: 'alert-button',
  template: `
    <ktbAlert></ktbAlert>

    <div>
      <button
        class="btn btn-success m-1"
        (click)="
          _alertService.success(
            'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs. Learn more.',
            options
          )
        "
      >
        Success
      </button>
      <button
        class="btn btn-danger m-1"
        (click)="
          _alertService.error(
            'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs. Learn more.',
            options
          )
        "
      >
        Error
      </button>
      <button
        class="btn btn-warning m-1"
        (click)="
          _alertService.warn(
            'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs. Learn more.',
            options
          )
        "
      >
        Warning
      </button>
    </div>
  `,
  providers: [AlertService]
})
class AlertButtonComponent {
  constructor(public _alertService: AlertService) {}
}

storiesOf('Alert Notification', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AlertButtonComponent],
      imports: [AlertModule]
    })
  )
  .add('Alert Notification', () => ({
    template: `
            <alert-button></alert-button>
            `,
    encapsulation: ViewEncapsulation.None
  }))
