import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-builders/pwa-local-storage';

@Component({
  template: `
    <p id="lazy">{{text}}</p>
  `,
})
export class PageComponent implements OnInit {

  text = 'not ok';

  constructor(private storageMap: StorageMap) {}

  ngOnInit(): void {

    this.storageMap.get('key', { type: 'string' }).subscribe((result) => {
      this.text = result || 'not ok';
    });

  }

}
