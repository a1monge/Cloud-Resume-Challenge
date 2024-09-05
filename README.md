# Cloud Resume Challenge

## Project Overview

This project implements a serverless cloud-based solution that dynamically hosts my resume and tracks visitors to the page. The solution leverages AWS services like S3, DynamoDB, Lambda, and API Gateway. The infrastructure is managed using Terraform, and the deployment is automated through GitHub Actions for continuous integration and delivery (CI/CD).

### Features
- **Static Website Hosting**: Hosted on AWS S3 as a static website.
- **Visitor Counter**: A dynamic counter tracks the number of visitors, using DynamoDB for storage and API Gateway to communicate with the backend.
- **Serverless Architecture**: AWS Lambda interacts with the DynamoDB database to update and retrieve visitor counts.
- **CI/CD Pipeline**: Deployed via GitHub Actions, automating testing and deployment of front and backend components.
- **Infrastructure as Code**: Entire infrastructure is defined and provisioned using **Terraform**.

---

## Tech Stack

### Frontend
- **HTML & CSS**: Basic web development technologies used to create the resume.
- **JavaScript**: Manages the visitor counter functionality by calling the API.

### Backend
- **AWS Lambda**: Serverless functions written in Python for handling API requests.
- **AWS API Gateway**: Manages and secures communication between the frontend and backend.
- **AWS DynamoDB**: NoSQL database used for storing visitor counts.

### Infrastructure & Deployment
- **Terraform**: Used for managing and provisioning AWS infrastructure resources, including S3, DynamoDB, Lambda, and API Gateway.
- **GitHub Actions**: Automates CI/CD processes for deploying frontend (S3) and backend (Lambda, DynamoDB).
- **AWS S3**: Hosts the static website globally served using **CloudFront**.

### Website URL: https://almonge-resume.com
