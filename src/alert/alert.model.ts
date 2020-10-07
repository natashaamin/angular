export class Alert {
  type: AlertType
  message: string
  fade: boolean
  links: string

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init)
  }
}

export enum AlertType {
  Success,
  Error,
  Warning
}
