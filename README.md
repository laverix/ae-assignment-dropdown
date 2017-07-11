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
