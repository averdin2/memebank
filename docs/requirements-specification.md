# 5.0	Requirements Specification


## 5.1	Introduction

This Software Requirements Specification (SRS) documents the requirements for the Memebank web application. Memebank is a personal online database and social media platform that allows users to store, sort, and share links to their favorite memes. Memebank's primary function is to store users' links in a database. Through its web application, Memebank will provide users with an interactive visualization of the content of these links. Functionality will include features such as link sorting via a tag system and link sharing via social media outlets. The Memebank system architecture is comprised of a React.js graphical user interface, a Ruby on Rails server, and a SQLite database.

## 5.2	CSCI Component Breakdown
CSCI Memebank is composed of the following CSCs:

- 5.2.1 Front End CSC -- web-based GUI for Memebank
  - 5.2.1.1 Login/Join CSU -- page for users to log in or sign up for a Memebank account
  - 5.2.1.2 Bank CSU -- page for users to view and manage their banks
    - 5.2.1.2.1 Bank list module -- displays the user's banks
    - 5.2.1.2.2 Bank info module -- displays basic information of the selected bank
    - 5.2.1.2.3 Tag list module -- displays searchable list of link tags in the ban
    - 5.2.1.2.4 Bank display module -- displays stored links in a grid
    - 5.2.1.2.5 Link input module -- input field for adding new links to a bank
      - 5.2.1.2.5.1 Link input modal module -- presents input fields for adding new links
    - 5.2.1.2.6 User display module -- displays list of users with access to the selected bank
- 5.2.2 Server CSC
  - 5.2.2.1 Ruby on Rails CSU -- modules for handling http(s) connections and requests
  - 5.2.2.2 API Routes CSU --  modules for handling API requests to the server and database
- 5.2.3 Database CSC
  - 5.2.2.1 Rails Models CSU -- modules for filtering/modeling the data for storage in database
  - 5.2.2.2 queries CSU -- modules for handling queries on the database

## 5.3	Functional Requirements

### 5.3.1	Frontend
  - 5.3.1.1 The Frontend shall display a login page for the user
  - 5.3.1.2 The Frontend shall provide text entry fields into which the user may type their login information.
  - 5.3.1.3 The Frontend shall provide error checking on text entered in fields upon clicking the login button.
  - 5.3.1.4 The Frontend shall display a sign up button.
  - 5.3.1.5 The Frontend shall provide another text entry field for confirming password of new user.
  - 5.3.1.6 The Frontend shall direct users to the Bank CSU page after a successful login.
  - 5.3.1.7 The Frontend shall display the Bank list module on the left side of the page
  - 5.3.1.8 The Frontend shall display a new bank button at the top of the list of banks.
  - 5.3.1.9 The Frontend shall provide text entry fields for the user to create a new bank with their own configurations.
  - 5.3.1.10 The Frontend shall display the tag list module to the right of the bank list module on the left side of the page
  - 5.3.1.11 The Frontend  shall provide users the ability to choose which tags they wish to filter
  - 5.3.1.12 The Frontend shall react to mouse clicks on displayed buttons
  - 5.3.1.13 The Frontend shall provide a text entry field at the top and center of the page.
  - 5.3.1.14 The Frontend shall provide the ability to make queries on a Database
  - 5.3.1.15 The Frontend shall display the Bank display module under the search text entry field in the center of the page.
  - 5.3.1.16 The Frontend shall display a link input modal module
  - 5.3.1.17 The Frontend shall display image previews of the links

### 5.3.2	Backend
  - 5.3.2.1 The Backend shall respond to HTTP requests from the Frontend correctly.
  - 5.3.2.2 The Backend shall make a network connection with the database.
  - 5.3.2.3 The Backend shall send all Frontend based queries into their respective databases
  - 5.3.2.4 The Backend shall send all results of database queries to the Frontend.
  - 5.3.2.5 The Backend shall authenticate users.
  - 5.3.2.6 The Backend shall perform data validation before sending queries to the database.
  - 5.3.2.7 The Backend shall throw a 404 error code when a page is not found.
  - 5.3.2.8 The Backend shall throw a 500 error code when there is an unknown issue with the server.
  - 5.3.2.9 The Backend shall throw a 503 error code if the overloaded or server is under maintenance

### 5.3.3	Database
  - 5.3.3.1 The database will have a table containing data about each bank
  - 5.3.3.2 The database will contain data about the owner of each bank
  - 5.3.3.3 The database will have a list of users who have access to each bank
  - 5.3.3.4 The database will contain data about the links in each bank
  - 5.3.3.5 The database will contain data about the tags in each bank
  - 5.3.3.6 The database will have a table containing info about each user
  - 5.3.3.7 The database will contain a table with the metadata and tags of each link
  
## 5.4	Performance Requirements by CSC
  - 5.4.1 User registration should be less than 3 minutes. Once the user registers
  the web page should almost instantaneously take the user to their home page.
  - 5.4.2 User login verification should take 1 second or less. Once the user enters
  their login credentials the web page should almost instantaneously take the user to their
  home page.
  - 5.4.3 User logout should take less than 0.5 seconds. Once the user logs out, the web
    directs the user to the login page.
  - 5.4.4 Account management should take less than 1
     - 5.4.4.1 Changing profile picture should take less than 10 seconds. If it takes longer,
     break out of the command and alert the user of an error.
     - 5.4.4.2 Changing nickname should take less than 0.5 seconds.
     - 5.4.4.2 Changing password should take less than 1 second.
       - 5.4.4.2.1 Verification of password change should take 0.5 seconds.
     - 5.4.4.3 Deleting an account should take less than 1 second.
       - 5.4.4.3.1 Verification of deleting an account should take 0.5 seconds.
  - 5.4.5 Interaction with bank should be instantaneous, or less than 0.5 seconds.
    - 5.4.5.1 Creation of a new bank should be instantaneous.
    - 5.4.5.2 Modification of a new bank should be instantaneous.
    - 5.4.5.3 Deletion of a bank should be instantaneous.
  - 5.4.6 Interaction with meme should not take a significant amount of time.
    - 5.4.6.1 Saving a meme in the bank should not take longer than saving the meme on their computer directly.
    - 5.4.6.2 Deleting a meme from the meme bank should not take longer than deleting the file on their computer.
    - 5.4.6.3 Adding or removing a tag to a meme should not take longer than 0.3 seconds.

## 5.5	Project Environment Requirements

### 5.5.1	Development Environment Requirements
Hardware Requirements

| Category | Requirement |
|---|---|
| 2 x 1,6 GHz CPU |
| Graphics Card | Intel(R) HD Graphics 4600 |
| Ram | 8 GB |

Software Requirements

| Category | Requirement |
|---|---|
| Front End | React.js |
| Server | Ruby on Rails |
| Database | SQLite |


### 5.5.2	Execution Environment Requirements

| Category | Requirement |
|---|---|
| Operating System | Windows 10 / Mac OSX |
