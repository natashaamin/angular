import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './alert.component'
import { ContainerComponent, ContainerModule } from 'ktb-ui-components/container'
import { IconsComponent, IconsModule } from 'ktb-ui-components/icons'

import { AlertService } from './alert.service'

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, ContainerModule, IconsModule],
  exports: [AlertComponent, ContainerComponent, IconsComponent],
  providers: [AlertService]
})
export class AlertModule {}
