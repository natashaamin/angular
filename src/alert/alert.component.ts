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
export class AlertComponent implements OnInit {
  alerts: Alert[] = []
  alert: any

  @Input() get alertObj(): Alert {
    return this.alert
  }
  set alertObj(obj: Alert) {
    this.alert = Object.assign({}, obj)
  }

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.currentOption.subscribe((alert) => {
      if (alert) {
        this.alert = alert
      }
    })
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
    return classes.join(' ')
  }
}
