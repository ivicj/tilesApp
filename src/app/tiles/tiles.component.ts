import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import tilesData from '../../assets/data/tiles.json';
import { Tile } from '../model/tile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
    this.tiles = tilesData;
  }

  public openLearnMore(tile: Tile, i: number) {
    if(!this.isTileADuplicate(i)) {
      this.removeDuplicateTiles();
      this.addTile(tile, i);
    }
  }

  public isTileADuplicate(i: number): boolean {
    if(this.tiles[i+1] && this.tiles[i].title.toLowerCase() === this.tiles[i+1].title.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  public removeDuplicateTiles(): void {
    this.tiles = this.tiles.filter(
      (value, index, array) => 
        index == array.findIndex((item) => item.title.toLowerCase() === value.title.toLowerCase())
    );
  }

  public addTile(tile: Tile, i: number): void {
    let newTile = {
      title: tile.title,
      caption: tile.caption,
      detail: tile.detail,
      learnMore: !tile.learnMore,
      enabled: tile.enabled,
      isApp: tile.isApp,
      image: tile.image
    };

    this.tiles.splice(i + 1, 0, newTile);
  }

  public openContact() {
    //@TODO
  }

  public onAppClick(tile:Tile): void {
    this.tiles.forEach((app) => {
      if(app.title.toLowerCase() === tile.title.toLowerCase()) {
        this.router.navigate([tile.title.toLowerCase()]);
      }
    });
  }

  public removeTile(i: number): void {
    this.tiles.splice(i, 1);
  }

}
