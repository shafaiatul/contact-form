BasicExpressWebsite:
--------------------
Setting up a basic Express Website with multiple pages, a template and a working contact from.

Front End : It has home page, couple of inner pages and contact. 
Back End: Node and Express(3rd party module for nodejs). Its a total MVC framework
	->I can serve pages
	->I can define routes
	->Interact with Databases

Installation:
-------------
$npm install -g express // (globally) outside the project directory

$npm install -g express-generator//this will take care generating the framework folders and files

$express express-website// name of the application(express-website), this creates all the folders and files inside the application(express-website)

package.json:
-------------
in this file 
	>change ther version to "1.0.0"
	>add addition dependencies module "nodemailer" :  "*"//so that i can use the contact form, * will replace the latest version.

>cd express-website 
>npm install // install all the dependencies I included in that package.json file. 


Jade templating Engine:
-----------------------
h1= title  //title is passed down as a value of title
p Welcome to #{title} //the value of title is concatenated  to string of 'p' tag

NOTE: when i make a change into JADE file, i just refresh the browser BUT when i change in the router I have to restart the server



contact.jade:
-------------

form(method = 'post', action = 'contact/send')  //basically it will go to the contact route and 'send' function and make a 'post' request

https://github.com/andris9/Nodemailer 

Dummy userid: dummyctg1990@gmail.com
Dummy password: nodecontact
