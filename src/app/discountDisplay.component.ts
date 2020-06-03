import { DiscountService } from "./discount.service";
import { Input, Component } from "@angular/core";

@Component({
    selector: "paDiscountDisplay",
    template:   `<div class="bg-info text-white p-2">
                    The discount is {{discounter.discount}}
                </div>`
})
export class PaDiscountDisplayComponent {

    @Input("discounter")
    discounter: DiscountService;
}