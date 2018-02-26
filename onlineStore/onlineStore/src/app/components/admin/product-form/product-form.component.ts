import { ProductService } from './../../../services/product.service';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.categories$ = this.categoryService.getAll();
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(prod => { this.product = prod });
  }

  ngOnInit() {
  }

  save(product) {

    if (this.id)
      this.productService.update(this.id, product);
    else
      this.productService.create(product);

    this.router.navigate(['/admin/products']);

  }

  getProduct(id) {
    this.productService.get(id);
  }

  delete() {
    if (!confirm('Are you sure that you want to delete this product')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);

  }

}
