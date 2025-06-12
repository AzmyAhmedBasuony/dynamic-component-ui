import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { PeopleSelectionService } from '../../services/people-selection.service';

@Component({
  selector: 'app-people-selection',
  imports: [],
  templateUrl: './people-selection.component.html',
  styleUrl: './people-selection.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleSelectionComponent {
  private peopleService = inject(PeopleSelectionService);
  peopleList = this.peopleService.peopleList;
  isLoading = this.peopleService.isLoading;
  errorMessage = this.peopleService.errorMessage;
  selectedModel = this.peopleService.selectedpeople;

  constructor() {
    console.log(`number of people ${this.selectedModel()}`, this.peopleList())

  }
  getpeople() {

    this.selectedModel.set('Skywalker');
    console.log(`number of people ${this.selectedModel()}`, this.peopleList())

  }
}
