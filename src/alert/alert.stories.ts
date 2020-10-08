import { Component, EventEmitter, ViewEncapsulation, Output, OnInit } from '@angular/core'
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { AlertModule, AlertService } from 'ktb-ui-components/alert'

@Component({
  selector: 'alert-dynamic-button',
  template: `
    <ktbAlert></ktbAlert>
    <div>
      <button class="btn btn-success m-1" (click)="showAlert(1, 'Aaaaaaaaaaaaaaaaa')">
        Success
      </button>
      <button class="btn btn-danger m-1" (click)="showAlert(2, 'I wanna')">
        Error
      </button>
      <button class="btn btn-warning m-1" (click)="showAlert(3, 'Travis Scott is lit')">
        Warning
      </button>
    </div>
  `,
  providers: [AlertService]
})
class AlertDynamicComponent {
  links = [
    {
      text: 'Learn more.',
      href: 'https://ibm.com'
    }
  ]

  constructor(private alertService: AlertService) {}

  showAlert(option, message): void {
    this.alertService.onClickButton(option, message, this.links)
  }
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
              <ktbAlert [alertObj]="{
                option: 1,
                type: 0,
                message: 'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.',
                link: links
              }">
              </ktbAlert>
              <ktbAlert [alertObj]="{
                option: 2,
                type: 1,
                message: 'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.',
                link: links
              }">
              </ktbAlert>
              <ktbAlert [alertObj]="{
                option: 3,
                type: 2,
                message: 'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.',
                link: links
              }">
              </ktbAlert>
            `,
    props: {
      links: [
        {
          href: 'https://google.com',
          text: 'Learn more.'
        }
      ]
    },
    encapsulation: ViewEncapsulation.None
  }))
  .add('Dynamic', () => ({
    template: `
            <alert-dynamic-button></alert-dynamic-button>
            `,
    encapsulation: ViewEncapsulation.None
  }))
