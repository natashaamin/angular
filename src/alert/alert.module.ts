import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './alert.component'
import { ContainerComponent, ContainerModule } from 'ktb-ui-components/container'
import { AlertService } from './alert.service'

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, ContainerModule],
  exports: [AlertComponent, ContainerComponent],
  providers: [AlertService]
})
export class AlertModule {}
