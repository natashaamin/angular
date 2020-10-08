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

  onClickButton(option, message?, link?): void {
    let type
    let extractedAlert
    let getMessage
    const x = []

    const alert = this.alerts.filter((val) => {
      if (val.option === option) {
        type = val.type
      }
    })

    for (const i of link) {
      x.push(link[i])
    }

    extractedAlert = Object.assign({}, alert[0])
    getMessage = extractedAlert.message = message

    this.updateOptions(new Alert({ type, message: getMessage, link: x }))
  }

  updateOptions(alert: Alert): void {
    this.option.next(alert)
  }
}
