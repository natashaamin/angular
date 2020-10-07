import { Component, ViewEncapsulation } from '@angular/core'
import { moduleMetadata, storiesOf } from '@storybook/angular'
import { AlertModule, AlertService } from 'ktb-ui-components/alert'

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
class AlertBasicComponent {
  constructor(public alertService: AlertService) {}
}

storiesOf('Alert Notification', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AlertBasicComponent],
      imports: [AlertModule]
    })
  )
  .add('Dynamic', () => ({
    template: `
            <alert-dynamic-button></alert-dynamic-button>
            `,
    encapsulation: ViewEncapsulation.None
  }))
