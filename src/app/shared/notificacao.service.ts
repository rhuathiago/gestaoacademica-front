import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackBar: MatSnackBar) { }

  mostrarMensagemSucesso(messagem: string) {
    const config: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['green-snackbar']
    };

    this.snackBar.open(messagem, 'OK', config);
  }

  mostrarMensagemErro(messagem: string) {
    const config: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['red-snackbar']
    };

    this.snackBar.open(messagem, 'Tente novamente', config);
  }

}
