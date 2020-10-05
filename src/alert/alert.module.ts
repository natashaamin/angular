import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './alert.component'
import { ContainerComponent, ContainerModule } from 'ktb-ui-components/container'

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, ContainerModule],
  exports: [AlertComponent, ContainerComponent],
  providers: []
})
export class AlertModule {}
