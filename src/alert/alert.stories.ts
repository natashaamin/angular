import { Component, EventEmitter, ViewEncapsulation, Output, OnInit } from '@angular/core'
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { AlertModule, AlertService } from 'ktb-ui-components/alert'
import { Subject } from 'rxjs'
@Component({
  selector: 'alert-dynamic-button',
  template: `
    <ktbAlert></ktbAlert>
    <div>
      <button class="btn btn-success m-1" (click)="alertService.onClickButton(1, 'msg 1')">
        Success
      </button>
      <button class="btn btn-danger m-1" (click)="alertService.onClickButton(2, 'msg 2')">
        Error
      </button>
      <button class="btn btn-warning m-1" (click)="alertService.onClickButton(3, 'msg 3')">
        Warning
      </button>
    </div>
  `,
  providers: [AlertService]
})
class AlertDynamicComponent implements OnInit {
  @Output() actionClicked = new EventEmitter()

  actionSubject = new Subject<any>()

  actions = [
    {
      text: 'Actions',
      click: this.actionSubject
    }
  ]

  links = [
    {
      href: 'https://google.com',
      text: 'Learn more'
    }
  ]

  constructor(public alertService: AlertService) {}

  ngOnInit(): void {
    this.actions.forEach((action) => action.click.subscribe({ next: () => this.actionClicked.emit() }))
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
                links: links
              }">
              </ktbAlert>
              <ktbAlert [alertObj]="{
                option: 2,
                type: 1,
                message: 'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.',
                links: links
              }">
              </ktbAlert>
              <ktbAlert [alertObj]="{
                option: 3,
                type: 2,
                message: 'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.',
                links: links
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
