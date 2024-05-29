import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  NgbDatepickerI18n,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbTimepickerConfig,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CustomDatepickerI18n } from '../../../servicios/custom-datepicker-i18n.service';
import { ActorListadoComponent } from '../../actor/actor-listado/actor-listado.component';
import { Actor } from '../../../clases/actor';
import { PeliculaService } from '../../../servicios/pelicula.service';
import { Pelicula } from '../../../clases/pelicula';

@Component({
  selector: 'app-pelicula-alta',
  standalone: true,
  imports: [
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgIf,
    NgFor,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ActorListadoComponent,
  ],
  providers: [{ provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }], // ### Importante para que se aplique el cambio de idioma del DatePicker ###
  templateUrl: './pelicula-alta.component.html',
  styleUrl: './pelicula-alta.component.css',
})
export class PeliculaAltaComponent implements OnInit {
  @Input() modoRouter = false;
  @ViewChild('inputFoto', { static: false }) inputFoto!: ElementRef; // ### Importante para limpiar el input file
  formPelicula: FormGroup;

  get nombre() {
    return this.formPelicula.get('nombre') as FormControl;
  }
  get tipo() {
    return this.formPelicula.get('tipo') as FormControl;
  }
  get cantidadPublico() {
    return this.formPelicula.get('cantidadPublico') as FormControl;
  }
  get diaEstreno() {
    return this.formPelicula.get('diaEstreno') as FormControl;
  }
  get horaEstreno() {
    return this.formPelicula.get('horaEstreno') as FormControl;
  }
  get foto() {
    return this.formPelicula.get('foto') as FormControl;
  }
  get listaActores() {
    return this.formPelicula.get('listaActores') as FormControl;
  }

  constructor(
    private timePickerConfig: NgbTimepickerConfig,
    private peliculaService: PeliculaService
  ) {
    this.timePickerConfig.seconds = false;
    this.timePickerConfig.spinners = false;
    this.formPelicula = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      cantidadPublico: new FormControl(0, Validators.required),
      diaEstreno: new FormControl(
        { year: 0, month: 0, day: 0 },
        Validators.required
      ),
      horaEstreno: new FormControl(
        { hour: 0, minute: 0, second: 0 },
        Validators.required
      ),
      foto: new FormControl(undefined, Validators.required),
      listaActores: new FormControl([], Validators.required),
    });
  }

  ngOnInit(): void {}

  realizarAlta() {
    let pelicula = new Pelicula();
    pelicula.nombre = this.nombre.value;
    pelicula.tipo = this.tipo.value;
    pelicula.fechaEstreno = this.getDatetimePicker();
    pelicula.cantidadDePublico = this.cantidadPublico.value;
    pelicula.file = this.foto.value;
    pelicula.listaActores = this.listaActores.value.map((item: any) => {
      return item.id;
    });

    this.peliculaService.insertar(pelicula);
    this.limpiar();
  }

  recibirActor($event: Actor) {
    let lista = this.listaActores.value;
    if (lista.length === 0) {
      this.listaActores.markAsDirty();
    }
    const actorExistente = lista.find((item: any) => item.id === $event.id);
    if (actorExistente) {
      lista = lista.filter((item: any) => item.id !== $event.id);
    } else {
      lista.push($event);
    }
    this.listaActores.setValue(lista);
  }
  setTipo(value: string) {
    this.tipo.setValue(value);
    this.tipo.markAsDirty(); // Marca el control como dirty
  }
  setFoto($event: any) {
    this.foto.setValue($event.target.files[0]);
    this.foto.markAsDirty();
  }

  getDatetimePicker() {
    const datePicker = this.diaEstreno.value;
    const timePicker = this.horaEstreno.value;
    return new Date(
      `${datePicker.year}-${datePicker.month}-${datePicker.day} ${timePicker.hour}:${timePicker.minute}`
    );
  }
  getCurrentDateTime() {
    return new Date();
  }

  private limpiar() {
    this.nombre.setValue('');
    this.tipo.setValue('');
    this.diaEstreno.setValue({ year: 0, month: 0, day: 0 });
    this.horaEstreno.setValue({ hour: 0, minute: 0, second: 0 });
    this.cantidadPublico.setValue(0);
    this.foto.setValue(undefined);
    this.listaActores.setValue([]);
    this.inputFoto.nativeElement.value = ''; // ### Importante para limpiar el input file
  }
}
