import { ChangeDetectionStrategy, Component, HostBinding, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { LayoutService } from '../../services/layout.service';
import { LayoutType } from '../../features/core/types/layout-type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  @Input() type: LayoutType = 'desktop';
  private layoutService = inject(LayoutService);

  @HostBinding('class.mobile') get isMobile(): boolean {
    return this.type === 'mobile';
  }

  setSidebarMode(mode: boolean): void {
    this.layoutService.setSidebarMode$(mode);
  }
}
