# 5.0	Requirements Specification


## 5.1	Introduction

This Software Requirements Specification (SRS) documents the requirements for the Memebank web application. Memebank is a personal online database and social media platform that allows users to store, sort, and share links to their favorite memes.

Memebank's primary function is to store users' links in a database. Through its web application, Memebank will provide users with an interactive visualization of the content of these links. Functionality will include features such as link sorting via a tag system and link sharing via social media outlets.

The Memebank system architecture is comprised of a React.js graphical user interface, a Ruby on Rails server, and a SQLite database.

## 5.2	CSCI Component Breakdown

CSCI Memebank is composed of the following CSCs:

- 5.2.1 Front End CSC -- web-based GUI for Memebank

  - 5.2.1.1 Login/Join CSU -- page for users to log in or sign up for a Memebank account
    - 5.2.1.1.1 Login/Join input module -- input fields for username and password
    - 5.2.1.1.2 Login submit button -- button sends input to server for a login
    - 5.2.1.1.2 Join submit button -- button sends input to server for a join
  - 5.2.1.2 Bank CSU -- page for users to view and manage their banks
    - 5.2.1.2.1 Bank list module -- displays the user's banks
      - 5.2.1.2.1.1 Bank icon button -- button to take user to specified bank
      - 5.2.1.2.1.2 New bank button -- button to create a new bank
        - 5.2.1.2.1.2.1 New bank modal module -- presents input fields for creating new bank
    - 5.2.1.2.2 Bank info module -- displays basic information of the selected bank
      - 5.2.1.2.2.1 Tag list module -- displays list of link tags in the bank
        - 5.2.1.2.2.1.1 Tag selection button -- selectively displays links in the bank of the selected tag
    - 5.2.1.2.3 Bank display module -- displays stored links in a grid
      - 5.2.1.2.3.1 Link display module -- shows the tags and content of the link
    - 5.2.1.2.4 Link input module -- input field for adding new links to a bank
      - 5.2.1.2.4.1 Link input modal module -- presents input fields for adding new links
        - 5.2.1.2.4.1.1 Link preview module -- displays a preview of how a link will appear in a bank
        - 5.2.1.2.4.1.2 Tag input module -- input field for adding tags to a link
    - 5.2.1.2.5 User display module -- displays list of users with access to the selected bank
      - 5.2.1.2.5.1 User input field module -- input field for granting users access to a bank

## 5.3	Functional Requirements by CSC

### 5.3.1	Frontend

### 5.3.2	Backend

### 5.3.3	Database
  - 5.3.3.1 The database will have a table containing data about each bank
    - 5.3.3.1.1 The database will contain the user of each bank
      - 5.3.3.1.1.1 The database will have a list of users who have access to each bank
    - 5.3.3.1.2 The database will contain the memes in each bank
    - 5.3.3.1.3 The database will hold the tags in each bank
  - 5.3.3.2 The database will have a table containing info about each user
    - 5.3.3.2.1 The database will store each user's profile info (name, birthday, short bio)
    - 5.3.3.2.2 The database will store everyone who follows each user
    - 5.3.3.2.3 The database will store everyone each user follows
  - 5.3.3.2 The database will contain a table with info about each meme
    - 5.3.3.2.1 The database will contain a list of genres that each meme can be categorized under
    - 5.3.3.2.2 The database will store info about human responses to each meme
      - 5.3.3.2.2.1 The database will store the user that uploaded the meme
      - 5.3.3.2.2.2 The database will store all users that viewed the meme
        - 5.3.3.2.2.2.1 The database will have a list of users that 'liked' the meme
        - 5.3.3.2.2.2.2 The database will have a list of users that saved the meme to their own bank
      - 5.3.3.2.2.3 The database will store all 'tags' that the meme holds

## 5.4	Performance Requirements by CSC

## 5.5	Project Environment Requirements

### 5.5.1	Development Environment Requirements

| Category | Requirement |
|---|---|
| Front End | React.js |
| Server | Ruby on Rails |
| Database | SQLite |

### 5.5.2	Execution Environment Requirements
