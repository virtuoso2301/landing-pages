# servilo_cleaning

## Project Overview
The `servilo_cleaning` project is a web application designed to provide users with an easy way to book home services. The application features a modern user interface with various sections that highlight the services offered, user testimonials, and a call-to-action for downloading the app.

## Project Structure
The project is organized into the following main directories and files:

- **src/**: Contains the source code for the application.
  - **components/**: Contains reusable components for different sections of the application.
    - `HeroSection.tsx`: Renders the hero section with animations and a call-to-action button.
    - `SecondPageSection.tsx`: Displays a series of images in a mobile frame design with animations.
    - `FeaturesSection.tsx`: Highlights the app's features with multiple animated cards.
    - `TestimonialsSection.tsx`: Shows user testimonials in a carousel format.
    - `CTASection.tsx`: Encourages users to download the app with a prominent button.
    - `Footer.tsx`: Contains links to services, company information, and legal details.
  - **pages/**: Contains the main pages of the application.
    - `Index.tsx`: Assembles the main page using components from the `components` directory.
  - `App.tsx`: The main application component that sets up routing and layout.
  - `main.tsx`: The entry point of the application that renders the `App` component into the DOM.

- **tsconfig.json**: TypeScript configuration file specifying compiler options and files to include in the compilation.

- **package.json**: npm configuration file listing dependencies and scripts for the project.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd servilo_cleaning
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.