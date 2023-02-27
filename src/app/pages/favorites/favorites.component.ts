import { Component, NgIterable, OnInit } from '@angular/core';
import { PunkIpaService } from 'src/app/shared/services/punk-ipa.service';

type Beer = {
  id: number,
  name: string
}

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  beers: Array<Beer> = [];
  loading = true;

  constructor(private punkIpaService: PunkIpaService) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this.punkIpaService.getBeers()
      .subscribe((data: unknown) => {
        this.beers = data as Array<Beer>;
        this.loading = false;
      });
  }
}
