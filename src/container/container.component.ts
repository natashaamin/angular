import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: '[ktbContainer]',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
  @HostBinding('class.container') get defaultContainer(): boolean {
    return true
  }
  ngOnInit(): void {}
}
