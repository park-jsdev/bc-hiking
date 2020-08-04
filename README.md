# BC Hiking
A Node.js web application powered by Express and MongoDB where users can sign up, upload and comment on local hiking trails.
The client was built with jQuery, EJS and Bootstrap
![Screenshot](https://i.imgur.com/UpEgSVD.png)

## Features
- **Beautiful Landing Page**: Responsive, cross-platform landing page for visitors
- **Sign Up**: Users can create an account. Only signed in users can perform actions in the application
- **Login**: Users can log in once they have created an account
- **Post a Trail**: Users can post a trail, with an image, description, and other info
- **Comment**: Users can comment on trail posts
- **Edit/Delete**: Users can edit or delete their posts or comments. Only admin can do this for others' posts
- **Add Location**: Users can add a location, which will show up through a Geocoding API


![Screenshot](https://i.imgur.com/o1ZMXPp.png)

![Screenshot](https://i.imgur.com/gafyBCS.png)

## Technologies / Requirements
- [Node v4+](https://nodejs.org/en/)
- [MongoDB v2+](https://www.mongodb.com/)

# Getting Started

## Installing
Clone the repo to your system and run ``npm install`` to install all the dependencies.

## Usage
Go to the root directory and run ``npm start`` to start the application.
Access it at localhost:3000

### Using Geocoder API
Sign up for an API key at [Google Developers](https://developers.google.com/maps/web/), create two API keys, one restricted and one unrestricted. The restricted key can be restricted for HTTP for public use. It is **critical** to hide the unrestricted key in an environment variable such that it is not exposed to the public. Hide the ``.env`` file by creating a ``.gitignore`` file. If deploying on Heroku, you will need to configure the key manually in Settings: Config vars, or enter in Heroku CLI: `` heroku config:set GEOCODER_API_KEY=your-key-here ``

## Testing
TODO

## Deployment
The application was deployed on to Heroku for the dedicated server.

## Roadmap / TODO
- Ratings system
- Make Post previews on main page even-sized
- More Google Maps interactivity
- Fuzzy Search
- Authentication flash messages 
- Display time since post was created with Moment JS
- Check users database from web client side as admin
- User profile
- User private messaging
- Messenger system
- Password reset 
- Admin delete/ban users
- In-app notifications
- Donation payment system with Stripe API
- Setup continuous integration
- Improve frontend design
- Migrate project to React framework

## License
This project is licensed under the terms of the [MIT](https://github.com/park-jsdev/bc-hiking/blob/master/LICENSE) license. 

## Credits
- [Colt Steele's "The Web Developer Bootcamp"](https://www.udemy.com/course/the-web-developer-bootcamp/)
