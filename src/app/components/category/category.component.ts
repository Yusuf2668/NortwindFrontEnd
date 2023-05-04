import { Component, OnInit } from '@angular/core';
import { Catergory } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Catergory[] = [];
  currentCategory: Catergory;
  selectedItemClass:string = "list-group-item";;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentCategory(category: Catergory) {
    this.selectedItemClass="list-group-item";
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Catergory) {
    if (category == this.currentCategory) {
      return "list-group-item active";
    }
    return "list-group-item"
  }

  changeSelectedListItemClass(){
    return  this.selectedItemClass;
  }

  changeItemClass(){
    this.currentCategory = null;
    if( this.selectedItemClass =="list-group-item active"){
      this.selectedItemClass ="list-group-item";
    }else if(this.selectedItemClass =="list-group-item"){
      this.selectedItemClass ="list-group-item active";
    }
  }
}
