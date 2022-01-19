# inventory-tracking

Shopify Backend Developer Intern Challenge 2022 (https://docs.google.com/document/d/1z9LZ_kZBUbg-O2MhZVVSqTmvDko5IJWHtuFmIu_Xg1A/edit)

## Tech stack

I have used React for the frontend, and Nestjs with TypeORM for the backend, with a PgSQL database engine. I know it is very hectic and tedious to set it up, so I decided to learn and use Docker (for the first time) to make it easier to set up.

## Docker

In order to run the app, you can clone it (or download it), and then run the following command: `docker-compose up` while in the directory.

## Prerequisites

Before running the app, you only need to have Docker installed.

## How to run project
After running `docker-compose up` (takes around a minute), you can access the project frontend on the following port [localhost:3000](http://localhost:3000)

When accessing the frontend, you can press on `Generate Data` to generate 10 random items. However, after pressing the button, you have to refresh the page to be able to see them. 
You can create an item by pressing `Creating Item` button and fill out the information in the modal.
You can edit an item by pressing the Edit icon on the row of the given item. 
To export the data to CSV, you can press on `Export to CSV` on the bottom of the page
