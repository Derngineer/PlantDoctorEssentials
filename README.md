# plant-doctor
# Plant Doctor - Detecting Plant Diseases and Generating Prescriptions

The Plant Doctor app is designed to detect plant diseases from images of plant leaves. It utilizes TensorFlow models for image classification and passes the predicted results to OpenAI's large language models to generate human-readable prescriptions. The app consists of a REST API server built with Django and uses Nginx for deployment. The frontend is built with React.

## Getting Started

These instructions will help you set up the Plant Doctor app on your local machine for development and testing purposes.

### Prerequisites

To run the Plant Doctor app, you need the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/plant-doctor-app.git
cd plant-doctor-app
Build and start the Docker containers using Docker Compose:
bash
Copy code
docker-compose up --build
After the containers are up and running, you can access the Plant Doctor app:
Web Application: http://localhost:80
TensorFlow Serving: http://localhost:8501
Usage
Upload an image of a plant leaf to the web application.
The app will analyze the image using TensorFlow models to detect any diseases.
Predicted results are then passed to OpenAI's language model to generate a prescription.
The generated prescription will be displayed on the web application.
Deployment
To deploy the Plant Doctor app in a production environment, you can use platforms like AWS, Google Cloud, or Heroku. Follow these general steps:

Set up a production server with Docker and Docker Compose.
Clone the Plant Doctor repository on your production server.
Modify the environment variables in the .env file for production settings.
Build and start the Docker containers on your production server using Docker Compose.
Remember to configure SSL certificates for secure communication if needed.

Built With
Django - Backend server
React - Frontend user interface
TensorFlow - For plant disease detection
OpenAI GPT-3 - For generating prescriptions
Nginx - Web server and reverse proxy
Docker - Containerization
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
TensorFlow for machine learning capabilities
OpenAI for language models
Django and React communities for powerful frameworks
Nginx for serving the application
Docker for containerization
Happy Plant Doctoring!
