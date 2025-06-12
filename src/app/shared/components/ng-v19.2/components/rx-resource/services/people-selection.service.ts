import { httpResource, HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { PeopleResponse } from '../interfaces/pepole-selection';
import { setErrorMessage } from '../../../../../models/error-message';

@Injectable({
  providedIn: 'root'
})
export class PeopleSelectionService {
 private peopleUrl = 'https://swapi.py4e.com/api/people';
  selectedpeople = signal<any>('');

  private peopleResource = httpResource<PeopleResponse>(() => {
    const model = this.selectedpeople();
    if (model) {
    //  return `${this.peopleUrl}${model}`;
    return `${this.peopleUrl}?search=${model}`;
    } else {

      return this.peopleUrl;
    }
  });
  peopleList = computed(() => this.peopleResource.value()?.results ?? [] as PeopleResponse[]);
  error = computed(() => this.peopleResource.error() as HttpErrorResponse);
  errorMessage = computed(() => setErrorMessage(this.error(), 'People'));
  isLoading = computed(() => this.peopleResource.isLoading());
  constructor() { }
}
