import { ChangeDetectionStrategy, HostBinding, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core'
import { systemIcons } from './data/system-icons'
import { nagivationMenu } from './data/navigation-menu-icons'
import { subMenu } from './data/sub-menu-icons'
import { formElements } from './data/form-element-icons'
import { countryFlags } from './data/country-flag-icons'
import { banks } from './data/bank-icons'
import { billers } from './data/biller-icons'
import { contextual } from './data/contextual-icons'

@Component({
  selector: 'ktb-icon',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconsComponent {
  @Input() set name(iconName: string) {
    this.element.nativeElement.innerHTML =
      systemIcons[iconName] ||
      nagivationMenu[iconName] ||
      subMenu[iconName] ||
      formElements[iconName] ||
      countryFlags[iconName] ||
      banks[iconName] ||
      billers[iconName] ||
      contextual[iconName] ||
      null
  }

  @HostBinding('class.ktb-icon') get setDefaultClass(): boolean {
    return true
  }

  constructor(private element: ElementRef) {}
}
