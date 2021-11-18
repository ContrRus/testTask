import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  clientInfo = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => console.log('res', res.get('data')));
    this.route.queryParams.subscribe((res) => (this.clientInfo = res.data));

    // console.log('queryData', queryData);
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
