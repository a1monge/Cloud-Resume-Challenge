# Cloud Resume Challenge 

### Backend: https://github.com/a1monge/Resume-Challenge-Backend
### Website URL: https://almonge-resume.com

## Project Overview

This project implements a serverless cloud-based solution that dynamically hosts my resume and tracks visitors to the page. The solution leverages AWS services like S3, DynamoDB, Lambda, and API Gateway. The infrastructure is managed using Terraform, and the deployment is automated through GitHub Actions for continuous integration and delivery (CI/CD).

### Features
- **Static Website Hosting**: Hosted on AWS S3 as a static website.
- **Visitor Counter**: A dynamic counter tracks the number of visitors, using DynamoDB for storage and API Gateway to communicate with the backend.
- **Serverless Architecture**: AWS Lambda interacts with the DynamoDB database to update and retrieve visitor counts.
- **CI/CD Pipeline**: Deployed via GitHub Actions, automating testing and deployment of front and backend components. 
- **Infrastructure as Code**: Entire infrastructure is defined and provisioned using **Terraform**. 

## Architecture Diagram

![Cloud Architecture Diagram](./Cloud%20Resume.drawio.png)


## Tech Stack

### Frontend
- **React.js**: JavaScript library used to build the resume as a dynamic single-page application (SPA).
- **Node.js**: Used to build the react app to upload onto S3.
- **JavaScript**: Manages API calls and frontend functionality.
- **Bootstrap**: CSS framework for responsive design and styling.
- **HTML & CSS**: Used for basic layout and styling of the resume.

### Backend
- **AWS Lambda**: Serverless functions written in Python for handling API requests.
- **AWS API Gateway**: Manages and secures communication between the frontend and backend.
- **AWS DynamoDB**: NoSQL database used for storing visitor counts.

### Infrastructure & Deployment
- **Terraform**: Used for managing and provisioning AWS infrastructure resources, including S3, DynamoDB, Lambda, and API Gateway.
- **GitHub Actions**: Automates CI/CD processes for deploying frontend (S3) and backend (Lambda, DynamoDB).
- **AWS S3**: Hosts the static website globally served using **CloudFront**.

### CI/CD Pipeline
- The project uses GitHub Actions to automate deployment:

- Linting & Testing: Runs tests for the backend (Lambda) code.
- Build & Deploy: If tests pass, Terraform deploys the backend resources, and the React app is built and deployed to the S3 bucket.

## Lessons Learned
- Serverless Computing: Learned how to build a serverless architecture using AWS Lambda.
- Infrastructure as Code: Gained experience using Terraform to automate AWS resource provisioning.
- CI/CD Pipelines: Implemented a full CI/CD pipeline with GitHub Actions, automating the deployment of both frontend and backend components.
- DNS and Security: Used Route 53 for custom domain setup, ACM for SSL certificates, and CloudFront for content delivery.
- Responsive Design: Bootstrap ensured that the website was fully responsive and visually appealing on all device sizes.

## Future Improvements
- Improve the design and layout of the website
- Extend Terraform configuration to manage Route53 and ACM more efficiently.
- Add additional features like logging and monitoring with AWS CloudWatch.
- Expand the visitor counter to track more detailed metrics, such as geolocation data.
