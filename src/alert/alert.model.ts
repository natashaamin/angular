export class Alert {
  type: AlertType
  message: string
  fade: boolean
  link: AlertLink[]

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init)
  }
}

export enum AlertType {
  Success,
  Error,
  Warning
}

export interface AlertLink {
  text: string
  href: string
}
