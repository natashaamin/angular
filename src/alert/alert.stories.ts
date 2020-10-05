import { Meta, moduleMetadata } from '@storybook/angular'
import { AlertComponent, AlertModule, AlertService } from 'ktb-ui-components/alert'

export default {
  title: 'Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [AlertModule],
      providers: [AlertService]
    })
  ]
} as Meta

export const Overview = () => ({
  component: [AlertComponent],
  template: `
            <h2>Success Alert Notification</h2>
            <ktbAlert></ktbAlert>

            <div>
            <button class="btn btn-success m-1" (click)="_alertService.success('ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs. Learn more.', options)">Success</button>
            </div>
            `
})
