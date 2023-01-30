# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: One can fix this by adding a new column to the table. The name of the foeign key should be cohort_id. It would be in the Cohort model. 

Researched answer: In order to fix forgetting to add a foreign key, migrations are needed. This is done by creating a new column by going into the migration file and adding add_column :cohort, :cohort_id, :intger. Firstly, add_column is a command which adds a column. The next part of the code will be the name of the table in which we want to add this column to. Then, we add what the name of the column will be, in this case it's cohort_id because this is the usual naming convention for the foreign key. And lastly, we add what type of data the column accepts which would be integer. After saving the file, we run rails db:migrate in the terminal in order to migrate the changes. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Create, show, destroy and update must always be passed params because the params are used to pass information to other parts of code. 

Researched answer: The RESTful routes that must always be passed params are create, show, destroy, and update. Create uses strong params in order to have control over what information is provided. For show, the route is retrieving information for the id that is being called upon. The params is used to find that information at that id. Destroy uses params to find the id and delete it. Lastly, update uses to update data in whatever id that is called upon using params. 

3. Name three rails generator commands. What is created by each?

Your answer: A rails generator command includes rails generate migration action_name_here. This can be used to add more data to a table. rails generate rspec:install is used to install spec files to your computer. Lastly, rails generate controller is used to create a controlled which will be used to manipulate data in a database.

Researched answer: rails generate migration action_name_here creates whatever the user puts into the action_name_here part and can be used to make changes to the database schema. For example, add_column and remove_column can do what they are both respectively named. This can be useful to make changes to a table after already creating it. Next, rails generate rspec:install generates the the spec folder for your tests. Spec (meaning specifications)  is used to see if the code is returning what is meant to be returned. Lastly, rails generate controller is used to create a controller in your ruby on rails project. Controllers are used to update and change the data in a model. It can also be used to display the information in the model to the view. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students 
Routes.application.routes.draw do
    get '/students' => 'main#students'
end
this controller method would interpret this command as requesting the information at the studnets location and return this information

action: "POST" location: /students
post 'students' => 'students#create' 
this is used to create new data into a model. 

action: "GET" location: /students/new
get 'students/new' => 'students#new'
this is used to show the page to create posts which will become added data

action: "GET" location: /students/2
get 'students/2' => 'students#show'
this is used to look for one specific item in the database with the idea 2. 

action: "GET" location: /students/2/edit
get 'students/2/edit' => 'students#show'
this is used to show the edit form for once item in the database with the idea 2 

action: "PATCH" location: /students/2
patch '/students/2' => 'studnets#update'
this command is used to update a part of the item and not affect the whole data

action: "DELETE" location: /students/2
delete '/students/2' => 'students#destroy'
this command is used to remove an item from the data

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can visit a home page.
As a user, I can visit another page where I can submit a task for the to do list 
As a user, I can see in the home page a list of all the tasks in the to do list
As a user, I can input an ID to see the task at that ID
As a user, I can input an ID and edit that task at that ID
As a user, I can input an ID and delete the task at that ID
As a user, I can visit all pages from the home page
As a user, I can see that the to do list changes based on what tasks are deleted, updated, and created
As a user, I can change the information in the tasks like the ID
As a user, I can click on the tasks from the homepage to make changes. 