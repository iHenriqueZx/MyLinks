import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() language = 'en';
  @Input() languages: LanguageOption[] = [];

  @Output() languageChange = new EventEmitter<string>();

  languageMenuOpen = false;

  get currentLanguage(): LanguageOption {
    return this.languages.find(lang => lang.code === this.language)
      ?? this.languages[0]
      ?? { code: 'en', label: 'English', flag: '🇺🇸' };
  }

  selectLanguage(code: string): void {
    this.languageChange.emit(code);
    this.languageMenuOpen = false;
  }
}