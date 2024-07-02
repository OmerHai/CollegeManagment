import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() buttonClassType: string = 'btn-primary';
  @Input() buttonClassSize: string = 'btn-md';
  @Input() label?: string;
  @Input() icon?: string;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
