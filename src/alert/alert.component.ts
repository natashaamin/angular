import { coerceBooleanProperty } from '@angular/cdk/coercion'
import { Component, OnInit, OnDestroy, Input, HostBinding, Host, Output, EventEmitter } from '@angular/core'
import { Subscription } from 'rxjs'
import { Alert, AlertType } from './alert.model'
import { AlertService } from './alert.service'

@Component({
  selector: 'ktbAlert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert'
  @Input() fade = true

  alerts: Alert[] = []
  alertSubscription: Subscription

  constructor(private _alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this._alertService.onAlert(this.id).subscribe((alert) => {
      this.alerts.push(alert)
    })
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe()
  }

  removeAlert(alert: Alert): void {
    if (!this.alerts.includes(alert)) return

    if (this.fade) {
      this.alerts.find((x) => x === alert).fade = true

      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert)
      }, 10)
    } else {
      this.alerts = this.alerts.filter((x) => x !== alert)
    }
  }

  alertStyle(alert: Alert): any {
    if (!alert) return

    const classes = []

    const alertType = {
      [AlertType.Success]: 'success',
      [AlertType.Error]: 'error',
      [AlertType.Warning]: 'alert'
    }

    classes.push(alertType[alert.type])
    if (alert.fade) {
      classes.push('fade')
    }
    return classes.join(' ')
  }
}
