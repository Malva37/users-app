#Users-App

- [DEMO LINK](https://malva37.github.io/users-app/)

The application consists of two pages with the ability to route between them. The first page is called "Index," and the second is called "About." The first page contains two components: a list of users and a filter, while the second page contains arbitrary information.

"Users-App" is a client for the https://randomuser.me/api/?seed=foobar API. The "seed" parameter was used in the API to receive identical data every time. The collection is organized into 100 users, and you can view them in a table of 25 users per page (using DevExpress). By clicking on the arrow next to a user's picture, you can view additional information such as their city, street, and email.

The filter component is placed above the table component and contains a set of Bootstrap checkboxes for the following parameters:
1.Sex
2.City
3.Street
4.Email
5.Phone

Selected parameters are saved in localStorage. This component filters the data in the table and modifies the transferred data parameters. If you want to receive new data (without the seed parameter) from the backend, you can click the "get new users" button.

##Technologies Used
-Angular
-TypeScript
-HTML
-SCSS
-Bootstrap
-DevExpress
-API



