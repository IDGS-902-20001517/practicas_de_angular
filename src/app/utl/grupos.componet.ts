import { Component } from "@angular/core";

@Component({
    selector:"app-grupos",
    template:`<h1>Hola Grupos Utl</h1>
    <form>
        <label>Numero:</label>
        <input type="text" name="x" value="">
        <button class="btn btn-primary">Calcular</button>
    </form>
    
    
    `
})
export class NameGrupos{
    constructor(){}
}



@Component({
    selector:"app-alumno",
    template:`<h1>Alumno</h1>
    <form>
        <label>Alejandro Saldivar </label>
    </form>
    
    `
})
export class Alumno{
    constructor(){}
}