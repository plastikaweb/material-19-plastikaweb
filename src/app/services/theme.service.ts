import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly theme = signal<Theme>(localStorage.getItem('user-theme') as Theme ?? 'light');

  toggleTheme(): void {
    if (this.theme() === 'dark') {
      this.setTheme('light');
    } else {
      this.setTheme('dark');
    }
  }

  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.setThemeLocalStorage(theme);

    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
    }

  }

  setThemeLocalStorage(theme: Theme): void {
    localStorage.setItem('user-theme', theme);
  }

  getThemeLocalStorage(): Theme {
    return this.theme();
  }
}
