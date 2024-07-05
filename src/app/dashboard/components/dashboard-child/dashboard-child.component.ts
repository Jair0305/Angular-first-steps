import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss'
})
export class DashboardChildComponent implements OnInit{

  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('se cambio el valor de text', changes)
  }

  ngOnInit() {
    console.log('se inicializo el DashboardChildComponent')
  }

  handleClick() {
    this.text = 'Dashboard text changed by the child!';
    this.textChange.emit(this.text);
  }
}
