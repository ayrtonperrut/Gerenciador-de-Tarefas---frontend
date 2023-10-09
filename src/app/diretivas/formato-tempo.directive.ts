import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ItemService } from '../componentes/tarefas/itens/item.service';

@Directive({
  selector: '[formatoTempo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: FormatoTempoDirective,
    multi: true
  }]
})
export class FormatoTempoDirective {

  constructor(private itemService: ItemService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const formato = control.value

   return this.itemService.isFormatoTempoValido(formato) ? null : {'formatoTempo': true}
  }

}
