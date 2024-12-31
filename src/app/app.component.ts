import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from './services/theme.service';
@Component({
  selector: 'app-root',
  imports: [MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected themeService = inject(ThemeService);
}
