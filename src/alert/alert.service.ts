import { Injectable } from '@angular/core'
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import { filter } from 'rxjs/operators'

import { Alert, AlertType } from './alert.model'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}

  alerts = [
    {
      option: 1,
      type: AlertType.Success,
      message:
        'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.'
    },
    {
      option: 2,
      type: AlertType.Error,
      message:
        'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.'
    },
    {
      option: 3,
      type: AlertType.Warning,
      message:
        'ALERT: These are scam calls targeting customers to make bank transfers. DO NOT disclose any account details, USER Id, PINS or SMS OTPs.'
    }
  ]

  private option = new BehaviorSubject<any>(undefined)
  currentOption = this.option.asObservable()

  onClickButton(option, msg?): void {
    const alert = this.alerts.filter((a) => {
      if (a.option === option) return a
    })
    // let extracted_alert = Object.assign({}, alert[0]);
    const extractedAlert = alert[0]
    if (msg) extractedAlert.message = msg
    this.updateOptions(extractedAlert)
  }

  updateOptions(value): void {
    this.option.next(value)
  }
}
