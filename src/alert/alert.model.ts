export class Alert {
  details: AlertDetails[]
  link: AlertLink[]

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init)
  }
}

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

export interface AlertLink {
  text: string
  href: string
}

export interface AlertDetails {
  message: string
  type: AlertType
}
