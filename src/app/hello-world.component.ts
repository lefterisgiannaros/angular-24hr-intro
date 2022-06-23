import { Component } from '@angular/core';

// component decorator which marks a class as a component. It provides metadata and decides how the component is used at runtime
@Component({
    // this tag will render your component. it's a css selector
    selector: 'app-hello-world',
    // 
    template: '<h1>{{title}}</h1>',
    styles: ['']
})

// here we can define properties, methods, catch component lifecycle events and do dependency injection
export class HelloWorldComponent {
    // all the public properties that are defined here, are accessible in the HTML template
    title = 'Hello World!'
}