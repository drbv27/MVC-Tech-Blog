<h1 align="center">Model-View-Controller (MVC) Tech Blog</h1>

<div align="center">
   Solution for a challenge from  <a href="https://git.bootcampcontent.com/University-of-California---Irvine/UCI-VIRT-FSF-PT-06-2023-U-LOLC/-/tree/main/14-MVC/02-Challenge" target="_blank">University of California - Irvine
UCI-VIRT-FSF-PT-06-2023-U-LOLC</a>.
</div>

<div align="center">
  <h3>
    <a href="https://github.com/drbv27/MVC-Tech-Blog">
      Solution
    </a>
    <span> | </span>
    <a href="https://git.bootcampcontent.com/University-of-California---Irvine/UCI-VIRT-FSF-PT-06-2023-U-LOLC/-/tree/main/14-MVC/02-Challenge">
      Challenge
    </a>
  </h3>
</div>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/drbv27/MVC-Tech-Blog" />
    <img src="https://img.shields.io/github/languages/top/drbv27/MVC-Tech-Blog"  />
    <img src="https://img.shields.io/github/issues/drbv27/MVC-Tech-Blog" />
    <img src="https://img.shields.io/github/last-commit/drbv27/MVC-Tech-Blog" >
    <a href="https://github.com/drbv27"><img src="https://img.shields.io/github/followers/drbv27?style=social" target="_blank" /></a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/javascript-yellow" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/sequelize-blue"  />
    <img src="https://img.shields.io/badge/handlebars-red"  />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/dotenv-green" />
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

<!------------Description------------>   
## Description

A MySQL database-backed CMS blog application that is implemented using the Model-View-Controller (MVC) design pattern, and built with the following JavaScript libraries: MySQL2, Express, Sequelize, Bulma, Handlebars, and dotenv.

  
Here is a screenshot of the application.:
  
![tech blog](screenshot.png)

<!------------User Story------------>
## User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
<!------------Acceptance Criteria------------>
## Acceptance Criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site
```
   

<!------------Installation------------>
## Installation
First clone the repository to your local machine:
  
`npm install`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

`npm install express`

`npm install express-handlebars`

`npm install express-session`

`npm install bcrypt`


<!------------Usage------------> 
## Usage
To run the application locally,
dont forget to create a .env file with your mysql credentials:

`DB_NAME='tech_blog_db'`
`DB_USER='root'`
`DB_PW='your password'`
`PORT='3001'`

Also
you need to have previously installed mysql server on your PC.
<a href="https://www.mysql.com/downloads/">MYSQL</a>
Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

if you want to seed the database with test data, run the following command:
`npm run seed`
  
`npm start`

## Testing

Jest is currently the testing framework being used for helpers.

## Contributing
:octocat: [Diego Bonilla](https://github.com/drbv27)

## Questions
Contact me with any questions: [email](mailto:drbv27@gmail.com) , [GitHub](https://github.com/drbv27)<br />