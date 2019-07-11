import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-registro-lazy',
  templateUrl: './registro-lazy.component.html',
  styleUrls: ['./registro-lazy.component.css']
})
export class RegistroLazyComponent implements OnInit, OnDestroy {
  @Output() public aceptarFormulario = new EventEmitter<Usuario>();

  public form: FormGroup;
  public imagePreview: string | ArrayBuffer = null;

  // tslint:disable-next-line: variable-name
  private _changeTipo: Subscription;

  constructor() { }

  ngOnInit() {
    /** // Para todos
     * key de firebase
     * correo
     * clave
     * nombre
     * apellido
     * tipo (cliente, especialista, recepcionista, administrador)
     * foto
     * // Esto es solo para especialista
     * especialidad
     */
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      tipo: new FormControl('cliente', Validators.required),
      foto: new FormControl('', Validators.required),
      especialidad: new FormControl('none', Validators.required),
    });

    this._changeTipo = this.form.controls.tipo.valueChanges.subscribe((value: string) => {
      if (value === 'especialista') {
        this.form.patchValue({ especialidad: '' });
      } else {
        this.form.patchValue({ especialidad: 'none' });
      }

      // console.log(this.form.value);
    });
  }

  public ngOnDestroy() {
    this._changeTipo.unsubscribe();
  }

  public dropped(files: NgxFileDropEntry[]) {
    const droppedFile = files[0];

    // Es un archivo
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      const reader = new FileReader();

      fileEntry.file((file: File) => {
        // Aquí puedo acceder al archivo real
        // console.log(droppedFile.relativePath, file);

        // Esto es para la preview
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imagePreview = reader.result;
        };

        this.form.patchValue({ foto: file });
      });
    } else {
      // Si fue un directorio (directorios vacios, en caso contrario solo archivos)
      console.log('No se acepta el archivo!');
    }
  }

  public enviarFormulario() {
    // console.log('Envio el event', this.form.value);
    this.aceptarFormulario.emit(this.form.value);
  }
}
