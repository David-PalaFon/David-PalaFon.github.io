import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-new-index',
  templateUrl: './new-index.component.html',
  styleUrls: ['./new-index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewIndexComponent {

}
