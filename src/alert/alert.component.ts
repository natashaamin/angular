import { coerceBooleanProperty } from '@angular/cdk/coercion'
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  HostBinding,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core'
import { Alert, AlertType } from './alert.model'

@Component({
  selector: '{ktbAlert}',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {
  @Input() type: AlertType = AlertType.Success
  @Input() message: string
  @Input() linkLabel: any[]
  @Output() labelClick = new EventEmitter<MouseEvent>()

  isVisible = true

  @HostBinding('class.ktb-alert') get defaultAlert(): boolean {
    return true
  }

  @HostBinding('class.ktb-button--primary') get primaryButton(): boolean {
    if (Object.values(AlertType).includes(this.type)) return this.type === AlertType.Success
    return coerceBooleanProperty(this.type)
  }

  @HostBinding('class.alert--success') get successAlert(): boolean {
    return `${this.type}` === AlertType.Success
  }

  @HostBinding('class.alert--warn') get warnAlert(): boolean {
    return `${this.type}` === AlertType.Warning
  }

  @HostBinding('class.alert--error') get errorAlert(): boolean {
    return `${this.type}` === AlertType.Error
  }

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(this.type)
  }

  public handleClick(event: MouseEvent): void {
    this.labelClick.emit(event)
  }

  public getHostElement(): HTMLElement {
    return this.elementRef.nativeElement
  }
}
