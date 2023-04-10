# AngularUsersApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.



Users-App

Users-App is a client for the https://randomuser.me/api/?seed=foobar. Seed was used in API to received identical every time.
Collection organized in the amount of 100 users and you could see them in
a table of 25 per "page"(DevExpress).
With a click of the arrow near picture, you can see extra information(City, Street, Email).

Filter component placed above the table component.
Contains a set of Bootstrap checkboxes responsible for the following parameters:
● Sex
● City
● Street
● Email
● Phone

Selected parameters saved in localStorage. This component filter the data in the table, as well as modify the transferred data
parameters.
If you want receive new data from the backend you can click to button get new users

Demo

Technologies Used
This project uses Angular, TypeScript, HTML, SCSS, bootstrap, DevExpress, API



