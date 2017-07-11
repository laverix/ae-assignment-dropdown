import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'ae-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form;
  @Input() data;
  @Output() formUpdated = new EventEmitter();

  public chosenItem = '';
  public showClearButton: Boolean;

  constructor() {
  }

  public onSelect(event) {
    const value = event['ae-dropdown'];

    this.showClearButton = false;

    if (value) {
      this.showClearButton = true;
    }

    this.formUpdated.emit(value);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.control.valueChanges.subscribe(values => this.onSelect(values));
  }
}
