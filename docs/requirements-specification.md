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
        - 5.2.1.2.2.1.2 Tag search field module -- input field for searching tags associated with selected bank
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
  - 5.3.1.1 The Frontend shall display a login page for the user
    - 5.3.1.1.1 The Frontend shall provide text entry fields into which the user may type their login information.
    - 5.3.1.1.2 The Frontend shall provide error checking on text entered in fields upon clicking the login button.
    - 5.3.1.1.3 The Frontend shall display a sign up button.
      - 5.3.1.1.3.1 The Frontend shall provide another text entry field for confirming password of new user.
  - 5.3.1.2 The Frontend shall direct users to the bank CSU page after a successful login.
  - 5.3.1.3 The Frontend shall display the Bank list module on the left side of the page
    - 5.3.1.3.1 The Frontend shall display a new bank button at the top of the list of banks.
      - 5.3.1.3.1.1 The Frontend shall provide text entry fields for the user to create a new bank with their own configurations.
  - 5.3.1.4 The Frontend shall display the tag list module to the right of the bank list module on the left side of the page
    - 5.3.1.4.1 The Frontend  shall provide users the ability to choose which tags they wish to filter
  - 5.3.1.5 The Frontend shall react to mouse clicks on displayed buttons
  - 5.3.1.6 The Frontend shall provide a text entry field at the top and center of the page.
    - 5.3.1.6.1 The Frontend shall provide the ability to make queries on a Database
  - 5.3.1.7 The Frontend shall display the Bank display module under the search text entry field in the center of the page.
  - 5.3.1.8 The Frontend shall display a link input modal module
    - 5.3.1.8.1 The Frontend shall display input forms for users to type their links
    - 5.3.1.8.2 The Frontend shall display image previews of the links
### 5.3.2	Backend

### 5.3.3	Database

## 5.4	Performance Requirements by CSC
  - 5.4.1 User login verification should take 1 second or less. Once the user enters
  their login credentials the web page should almost instantaneously take the user to their
  home page.

## 5.5	Project Environment Requirements

### 5.5.1	Development Environment Requirements
Hardware Requirements
| Category | Requirement |
|---|---|
| Processor | i6 6700k |
| Graphics Card | Intel(R) HD Graphics 4600 |
| Ram | 32 |

Software Requirements
| Category | Requirement |
|---|---|
| Front End | React.js |
| Server | Ruby on Rails |
| Database | SQLite |

### 5.5.2	Execution Environment Requirements
