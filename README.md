# trips
Listings Search Clone

```
npm install
```

```
npm start
```

The app is running at http://localhost:8080/search

# About

This app imitates the filtering capabilities of usual listings apps like airbnb, plumguide and the like. The search menu is a strip of different components that will filter (when implemented fully) apartments listings coming from the back end. The more filters button opens a bigger component with obviously more filters that take and hide away the listings panel.

State wise I was concerned as state as a single source of truth, so no duplicity of data is used. For example, the list of active menu renders active filters mapping an isActive data table where the key is a filter id. This way any related data that is needed is constructed at render time, and not saved anywhere duplicated on state.

# About components/libraries used

I am very picky about third party libraries. And they usually come with a lot more functionality that I need. I use them for motivation, and then either look for vanilla js implementations/ do your own or be careful with what you need from them

E.g.
1. moment.js: Very popular but very heavy library given the amount of code you actually use out of it. Fortunally there are ways on how to regulate its size. 
[Here's a good discussion here](https://github.com/moment/moment/issues/2373).
2. [Flatpickr:](https://chmln.github.io/flatpickr) - This is a lightweight datetimepicker with no dependencies, staying away from heavy frameworks such as jQuery, or even Bootstrap.

# Contacts App

![alt tag](http://assets.fincaspace.com/img/trips_screen_1.jpg)
![alt tag](http://assets.fincaspace.com/img/trips_screen_2.jpg)
