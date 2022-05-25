import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonComponent } from "./button/button.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CategoryItemComponent } from "./category-item/category-item.component";
import { FoodCardComponent } from "./food-card/food-card.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";

@NgModule({
    declarations: [
        SearchbarComponent, 
        CategoryItemComponent, 
        FoodCardComponent,
        BadgeComponent,
        ButtonComponent,
        CartItemComponent
    ],
    imports: [
        CommonModule, 
        IonicModule
    ],
    exports: [
        SearchbarComponent, 
        CategoryItemComponent, 
        FoodCardComponent,
        BadgeComponent,
        ButtonComponent,
        CartItemComponent
    ]
})
export class ComponentsModule {}