import { Component, OnInit } from '@angular/core';
import { HumanResources } from '../../Services/Resources/Interfaces';
import { ResourcesService } from '../../Services/Resources/resources.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddResourceDialgComponent } from './Components/add-resource-dialg/add-resource-dialg.component';
import { EditResourceDialgComponent } from './Components/edit-resource-dialg/edit-resource-dialg.component';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css'],
  providers: [DialogService],
})
export class ResourcesPageComponent implements OnInit {
  layout: string = 'list';

  resources!: HumanResources[];

  products!: any;

  ref: DynamicDialogRef | undefined;

  constructor(
    private resourceService: ResourcesService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.products = this.generateRandomData();
    this.resourceService.getActiveProjectResources().subscribe((data) => {
      this.resources = data;
      console.log(this.resources);
    });
  }

  generateRandomData() {
    const products = [];
    const categories = ['Accessories', 'Clothing', 'Electronics'];
    const inventoryStatuses = ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'];

    for (let i = 0; i < 5; i++) {
      const product = {
        id: Math.random(),
        code: Math.random().toString(36).substring(2),
        name: `Product ${i}`,
        description: `Product Description ${i}`,
        image: `product-image-${i}.jpg`,
        price: Math.floor(Math.random() * 100) + 1,
        category: categories[Math.floor(Math.random() * categories.length)],
        quantity: Math.floor(Math.random() * 100) + 1,
        inventoryStatus:
          inventoryStatuses[
            Math.floor(Math.random() * inventoryStatuses.length)
          ],
        rating: Math.floor(Math.random() * 5) + 1,
      };
      products.push(product);
    }

    return products;
  }

  async handleAddNewResource() {
    this.ref = this.dialogService.open(AddResourceDialgComponent, {
      header: 'Add a resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      this.resourceService.createResource(data).subscribe((data) => {
        this.resources.push(data);
      });
    });
  }

  async handleEditResource(resource: HumanResources) {
    this.ref = this.dialogService.open(EditResourceDialgComponent, {
      header: 'Edit resource',
      footer: 'YoraStd',
      width: '50vw',
      modal: true,
    });

    this.ref.onClose.subscribe((data: any) => {
      console.log(data);
    });
  }
}
