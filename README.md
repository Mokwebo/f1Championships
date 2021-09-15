# F1Championships

What have I done in this application?

I have desided to build this with Angular as I am more familiar with it.
This simple applications just retrieves data for us via http call to the provided api.
I added a few node_modules dependencies for converting xml to json. (Was curious).
I went on  to create a dew components that can be reused in a large scale application.
The application is structured in a way anyone with coding experience can understand and find there way.
Cache has been implemented and can be tested by selecting a year or 2, switching off netwok and selecting the seasons selected before nework was switch off, implemented catch will take over and display what already has been called else api is called.
Simple Unit tests have been included in the appliation.
A Variables file has been included for easy reuse of colors and if there is a need for changing them they can be done in a central location. 

To run the application just run ng serve. (Nothing fancy done)

Patterns like state has been implemented for the application to hold the state and reuse what can be reused,
adapter pattern used for easy integration of components and services/functions with same types of datatypes. (Any)
Observer pattern, to update all depends.

Added abit of UX to the application to make it look appealing for the user. 
Unidirectional data flow has also been implemented.
The reusable components can solve scalable senarios. 
Application has the core layer services/api interface and classes, abstaction layer and the presentation layer.
With caching i would have used the RxJS shareReplay() operator but would have ment i had to do way more manupulating of data then I have done with my custom caching implemented. 
