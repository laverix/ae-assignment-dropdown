# Ae Assignment

Interview Exercise: Dropdown Component

![](src/assets/img/logo.png)

## Usage

Import `DropdownModule` in the root module


```javascript
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
  imports: [
    // ...
    DropdownModule
  ]
})
```

In your template

```html
<ae-dropdown [data]="yourdata", (formUpdated)="yourEventHandler($event)"></ae-dropdown>
```

## Exercise

Implement the Dropdown Component with Angular2/4. Use this dropdown as a reference for design and functionality.

Dropdown Requirements:

Open and Close States
Options in Dropdown should be selectable and update the title of Dropdown
Only if a selection is made, should you be able to clear your selection via Clear button
Dropdown should be scrollable
Dropdown Items should have hover state
Clear button should be displayed when a selection has been made

Link to MovieDB API Docs: https://developers.themoviedb.org/3/movies

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History

TODO: Write history

## Credits

TODO: Write credits

## License

MIT © [Valery Lyatsevich](http://lyatsevich.com)
