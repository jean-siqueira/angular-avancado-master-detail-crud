import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Component, OnInit } from '@angular/core';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];

  constructor(
      protected resourceService: BaseResourceService<T>
  ) {}

  ngOnInit() {
    this.resourceService.getAll().subscribe(
        resources => this.resources = resources.sort((a,b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteResoruce(resource: T) {

    const mustDelete = confirm('Deseja realmente excluir este item?')
    
    if(mustDelete){
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert("Erro ao tentar exlcuir")
      )
    }
    
  }

}
