  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
})
export class ListuserComponent implements OnInit {
  list: User[];
  listInitiale : User[];
  prop1 = 'x';
  prop2 = 'testngmodel';
  prop3 = 'test';
  searchval = '';
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
    ) {}
  getVal(val: string) {
    this.prop1 = val;
    console.log(this.prop1);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => console.log(params.get('cat')));

    this.userService.getUsersFromApi().subscribe((users) => (this.list = users));

    this.listInitiale=this.list;
     this.route.paramMap.subscribe(
      res => {
      console.log(res.get('cat'));
      this.list=this.listInitiale.filter((user) =>{
         return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
      });
    })

  }

  deleteUser(i: number) {
    this.list.splice(i, 1);
    console.log(this.list);
  }


}
