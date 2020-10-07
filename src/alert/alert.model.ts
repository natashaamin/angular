export class Alert {
  type: AlertType
  message: string
  fade: boolean

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init)
  }
}

export enum AlertType {
  Success,
  Error,
  Warning
}
