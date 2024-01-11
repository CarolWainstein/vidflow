# VidFlow - Video Sharing App

VidFlow is a simple video-sharing application built with HTML, CSS, and JavaScript. It allows users to view a list of videos, perform searches, and filter videos by category. Below are the main features and instructions for running the application.

## Features

1. **Video Listing**: Videos are dynamically loaded from an API (`http://localhost:3000/videos`) and displayed on the user interface.

2. **Video Search**: A search bar enables users to filter videos based on the title.

3. **Category Filtering**: Users can filter videos by category using the available category buttons.

## Usage Instructions

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Open the `index.html` file in your web browser.

3. Interact with the features:

    - Use the search bar to search for videos by title.
    - Click on category buttons to filter videos by category.

4. Enjoy the browsing experience on VidFlow!

## Project Structure

- **HTML (`index.html`)**: Web page structure.
- **CSS (`styles.css`, `reset.css`, `flexbox.css`)**: Styles for responsive design.
- **JavaScript (`script.js`)**: Interaction logic, API calls, and filtering functionalities.

## Error Handling

The code includes error handling for the case of failing to load videos from the API, displaying an appropriate error message.

```javascript
.catch((error) => {
    containerVideos.innerHTML = `<p> There was an error loading the videos: ${error} </p>`
})
