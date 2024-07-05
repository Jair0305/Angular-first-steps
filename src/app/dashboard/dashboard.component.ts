import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DashboardChildComponent} from "./components/dashboard-child/dashboard-child.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  text = 'Dashboard';

  /*deteccion de cambios por settimeout*/
  // constructor(cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.text = 'Dashboard text changed!'
  //     cd.detectChanges();
  //   }, 5000)
  // }

  /*Deteccion de cambios por handleclick aplicado a un boton*/
  handleClick() {
    this.text = 'Dashboard text changed!'
  }

}
