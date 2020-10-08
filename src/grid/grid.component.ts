import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core'

export enum ContentAlignments {
  Start = 'start',
  End = 'end',
  Center = 'center',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly',
  Unset = 'unset'
}

export enum ItemAlignments {
  Start = 'start',
  End = 'end',
  Stretch = 'strech',
  Center = 'center',
  Unset = 'unset'
}

@Component({
  selector: '[ktbGrid]',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
  @Input() cols: number | string
  @Input() gap: string
  @Input() justifyContent: ContentAlignments
  @Input() alignContent: ContentAlignments
  @Input() justifyItems: ItemAlignments
  @Input() alignItems: ItemAlignments

  @HostBinding('class.ktb-grid') get defaultGrid(): boolean {
    return true
  }

  @HostBinding('style.grid-template-columns') get columnSetting(): number | string {
    const column = '1fr' + ' '

    if (isNaN(Number(this.cols))) return this.cols
    return column.repeat(parseInt(`${this.cols}`, 10))
  }

  @HostBinding('style.gap') get gapSetting(): string {
    return `${this.gap}`
  }

  @HostBinding('style.justify-content') get justifyContentSetting(): string {
    return `${this.justifyContent}`
  }

  @HostBinding('style.align-content') get alignContentSetting(): string {
    return `${this.alignContent}`
  }

  @HostBinding('style.align-items') get alignItemSetting(): string {
    return `${this.alignItems}`
  }

  @HostBinding('style.justify-items') get justifyItemSetting(): string {
    return `${this.justifyItems}`
  }

  constructor() {}

  ngOnInit(): void {}
}
