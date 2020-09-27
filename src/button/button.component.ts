import { coerceBooleanProperty } from '@angular/cdk/coercion'
import { Component, HostBinding, Input, OnInit, ViewEncapsulation, ElementRef } from '@angular/core'

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  TertiaryOutline = 'tertiary-ouline'
}
@Component({
  selector: '[ktbButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() ktbButton: ButtonVariants = ButtonVariants.Primary

  private _disabled: boolean

  @Input()
  @HostBinding('attr.disabled')
  get disabled(): boolean {
    return this._disabled
  }

  set disabled(value: boolean) {
    this._disabled = value
  }

  @HostBinding('class.ktb-button') get defaultButton(): boolean {
    return true
  }

  @HostBinding('class.ktb-button--primary') get primaryButton(): boolean {
    if (Object.values(ButtonVariants).includes(this.ktbButton)) return this.ktbButton === ButtonVariants.Primary
    return coerceBooleanProperty(this.ktbButton)
  }

  @HostBinding('class.ktb-button--secondary') get secondaryButton(): boolean {
    return this.ktbButton === ButtonVariants.Secondary
  }

  @HostBinding('class.ktb-button--tertiary') get tertiaryButton(): boolean {
    return this.ktbButton === ButtonVariants.Tertiary
  }

  @HostBinding('class.ktb-button--tertiary-outline') get tertiaryOutlineButton(): boolean {
    return this.ktbButton === ButtonVariants.TertiaryOutline
  }

  @HostBinding('class.ktb-button--disabled') get disabledButton(): boolean {
    return coerceBooleanProperty(this.disabled)
  }

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}

  public getHostElement(): HTMLElement {
    return this.elementRef.nativeElement
  }
}
