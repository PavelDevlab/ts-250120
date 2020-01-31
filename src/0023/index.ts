import { debounce, logErrorToSentry, logInputEventValue } from "./functions";

class Search {
    public constructor(private el: HTMLInputElement) {
        this.el.addEventListener('input', this.onSearch.bind(this))
    }

    @debounce(500)
    @logInputEventValue
    @logErrorToSentry
    public onSearch(this: this, _e: any) {
    }
}


const input: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
const search = new Search(input);
search.onSearch({target: {value: '1'}});
search.onSearch({target: {value: '2'}});
search.onSearch({target: {value: '3'}});
search.onSearch({target: {value: '4'}});
search.onSearch({target: {value: '5'}});



