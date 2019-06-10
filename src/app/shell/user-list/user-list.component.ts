import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  data: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.data;
  }

}
