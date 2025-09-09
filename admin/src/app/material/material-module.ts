import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    exports:[
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatMenuModule
    ]
})
export class MaterialModule{}