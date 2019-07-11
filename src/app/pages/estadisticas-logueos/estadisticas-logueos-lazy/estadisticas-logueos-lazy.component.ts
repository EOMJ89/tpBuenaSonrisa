import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Logueo } from 'src/app/models/logueo/logueo';

@Component({
  selector: 'app-estadisticas-logueos-lazy',
  templateUrl: './estadisticas-logueos-lazy.component.html',
  styleUrls: ['./estadisticas-logueos-lazy.component.css']
})
export class EstadisticasLogueosLazyComponent implements OnChanges {
  @Input() public logueos: Array<any>;

  ngOnChanges() {
    // console.log(this.logueos);
  }
}
