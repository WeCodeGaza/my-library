(note: this README is super disorganized, but these are roughly the starter code steps to be done)

TODOs:


1. /users/cool -> “You’re so cool”
2. Models
    1. author.js: add first_name and family_name fields
    2. author.js: virtual for author’s full name
    3. book.js: virtual for URL
    4. CHALLENGE: create a model for /models/genre.js
        1. String SchemaType called `name` for the genre
        2. Name should be required
        3. Declare a virtual for the genre’s URL, named `url`
        4. Export the model
3. Testing
    1. npm install async
    2. node populatedb <your mongoldb url>
4. Routes

<< put this on slide >>
* catalog/ — The home/index page.
* catalog/<objects>/ — The list of all books, bookinstances, genres, or authors (e.g. /catalog/books/, /catalog/genres/, etc.)
* catalog/<object>/<id> — The detail page for a specific book, bookinstance, genre, or author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37).
* catalog/<object>/create — The form to create a new book, bookinstance, genre, or author (e.g. /catalog/book/create).
* catalog/<object>/<id>/update — The form to update a specific book, bookinstance, genre, or author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/update).
* catalog/<object>/<id>/delete — The form to delete a specific book, bookinstance, genre, author with the given _id field value (e.g. /catalog/book/584493c1f4887f06c0e67d37/delete).

4. Routes
    1. Look through all files in the controllers/ directory
    2. catalog.js
        1. Add book instance controller
        2. Fill in the GET and POST request to update a book
    3. Update the new index page to be /catalog
    4. Add the catalog router to app.js
    5. Test: navigate to the following
* http://localhost:3000/
* http://localhost:3000/catalog
* http://localhost:3000/catalog/books
* http://localhost:3000/catalog/bookinstances/
* http://localhost:3000/catalog/authors/
* http://localhost:3000/catalog/genres/
* http://localhost:3000/catalog/book/5846437593935e2f8c2aa226
* http://localhost:3000/catalog/book/create
        1. 
5. Views
    1. Look at bookController.js list
    2. bookinstanceController.js: fill in bookinstance_list
    3. genreController.js: create genre_list
    4. genre_list.pug: create genre_list view
        1. match screenshot : https://mdn.mozillademos.org/files/14460/LocalLibary_Express_Genre_List.png
6. Forms
    1. Look at delete author
    2. Delete Book
    3. Delete BookInstance
    4. Delete Genre
A few tips:
* Deleting a Genre is just like deleting an Author as both objects are dependencies of Book (so in both cases you can delete the object only when the associated books are deleted).
* Deleting a Book is also similar, but you need to check that there are no associated BookInstances.
* Deleting a BookInstance is the easiest of all, because there are no dependent objects. In this case you can just find the associated record and delete it.
    1. Look at update book
    2. Update BookInstance
    3. Update Author
    4. Update Genre
The Book update page we just implemented is the hardest! The same patterns can be used for the update pages for the other objects.
The Author date of death and date of birth fields, and the BookInstancedue_date field are the wrong format to input into the date input field on the form (it requires data in form "YYYY-MM-DD"). The easiest way to get around this is to define a new virtual property for the dates that formats the dates appropriately, and then use this field in the associated view templates.
If you get stuck, there are examples of the update pages in the example here.
    1. 
