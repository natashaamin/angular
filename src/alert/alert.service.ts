import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { filter } from 'rxjs/operators'

import { Alert, AlertType } from './alert.model'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() {}

  private subject = new Subject<Alert>()
  private defaultId = 'default-alert'

  onAlert(id = this.defaultId): Observable<Alert> {
    return this.subject.asObservable().pipe(filter((x) => x && x.id === id))
  }

  success(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Success, message }))
  }

  error(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Error, message }))
  }

  warn(message: string, options?: any): void {
    this.alert(new Alert({ ...options, type: AlertType.Warning, message }))
  }

  alert(alert: Alert): void {
    alert.id = alert.id || this.defaultId
    this.subject.next(alert)
  }
}
