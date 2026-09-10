import { Component, OnInit } from '@angular/core';
import { Menu } from '../../componentes/menu/menu';
import { Veiculo } from '../../models/veiculo.model';
import { Automavel } from '../../services/automavel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  imports: [Menu, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  veiculos: Veiculo[] = [];

  veiculoSelecionado: Veiculo | null = null;

  constructor(private vehicle:Automavel) {}

  ngOnInit(): void {
    this.vehicle.getVeiculos().subscribe(
      response => {
        this.veiculos = response.vehicles;
      }
    )
  }
  
  veiculoEscolhido(event: Event): void{
    const idSelecionado = (event.target as HTMLSelectElement).value;
    if(idSelecionado) {
      this.veiculoSelecionado = this.veiculos.find( v=>v.id == Number(idSelecionado)) || null;
    }

  }

}
