# Project Name

"React Gallery" by T Mark Schisel

## Description

For this project, the requirements were:

"Create a gallery page to share pictures of things that are important to you. Visitors can click on an image to see a description and use a button to "like" an image."

To practice passing values through `props` in React, I built the gallery using mulitple components - an `App`, `GalleryList`, and `GalleryItem`.

- `App` - represents the overall application or site 
- `GalleryList` - represents the gallery of images. 
- `GalleryItem` - represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.

## Technology Used
- React
- JavaScript
- HTML
- CSS

For additional styling, 
    - Material UI
    - SweetAlerts
    - Multer

## Application Instructions

Please review the database.sql file for information on how to create a database for this application.


## Problems solved
- toggling between images and descriptions
- learning about the many different options for styling Apps, i.e. multer, sweet alerts, material UI, etc.
- React syntax, and navigation
- review of SQL database protocols, and operation
- using Postman for testing, need to review

## Stretch Goals completed

- [x] Move the data into a database (postgresql)
    - [x] name your database `react_gallery`
    - [x] include a `database.sql` file documenting your database tables
- [x] Add a form (new **component**) that allows a user to POST a new gallery item
  - [x] Client side form (use absolute URL for images)
  - [x] Server side route for posting an image
- [x] Ability to delete a gallery item
- [x] Add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
- [x] Use [multer](https://github.com/expressjs/multer) for image upload 

## Additional Goals to be completed in the near future:
- [] make an edit button that allows description to be modified
- [] make a comment button that can add comments/view
- [x] back to the top button?
- [] side menu?