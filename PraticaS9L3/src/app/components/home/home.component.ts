import { Component, OnInit } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiUrl: string = '../../../assets/db.json';

  postArr: iPost[] = [];
  randomPosts: iPost[] = [];

  ngOnInit() {
    this.getPosts();
  }

  async getPosts(): Promise<void> {
    let response = await fetch(this.apiUrl);
    let data = await response.json();
    this.postArr = data.posts;
    console.log("Il mio oggetto è", this.postArr);
    this.randomPosts = this.getRandomPosts(this.postArr, 4);
    console.log("Il mio arrayrandom è",this.randomPosts);
  }

  getRandomPosts(arr: iPost[], num: number): iPost[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }


  /*appunti per me:
  Il codice 0.5 - Math.random() restituisce un numero casuale compreso tra -0.5 e 0.5. Ecco come funziona:

Math.random(): Restituisce un numero pseudo-casuale compreso tra 0 (incluso) e 1 (escluso).
0.5 - Math.random(): Sottrae questo numero da 0.5, ottenendo un numero casuale compreso tra -0.5 e 0.5.
Il motivo per cui 0.5 - Math.random() funziona per mescolare un array è che:

Quando il risultato è negativo, indica che l'elemento a deve essere ordinato prima di b.
Quando il risultato è positivo, indica che l'elemento a deve essere ordinato dopo di b.
Quando il risultato è zero (un caso raro), gli elementi mantengono l'ordine relativo.
Questo causa un ordinamento casuale degli elementi perché ogni coppia di elementi nell'array sarà ordinata in modo casuale.

Perché 0.5 - Math.random()?
Il valore 0.5 è scelto come punto medio perché la distribuzione uniforme di Math.random() attorno a 0.5 dà una probabilità equa di
 ottenere un valore positivo o negativo, quindi mescola l'array in modo efficace. */
}
