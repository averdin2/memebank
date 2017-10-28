# 6.0 Software Design Description

## 6.1	Introduction

### 6.1.1 System Objectives Section
The system objective of meme bank is to serve as a link storage site for memes
that will be sorted by tags which makes it easier to find ones memes
and be able to share your memes with friend. Our project will allow for users to easily
add their memes to their bank. It will allow users to quickly access and retrieve
their memes from their web browser.
### 6.1.2 Hardware, Software, and Human Interfaces Section
| Interface Type | Interface Description |
|---|---|
| Human Interface | keyboard and mouse |
| Human Interface | monitor |
| Software | (fill in) |
| Hardware | (fill in) |
## 6.2 Architectural Design Section

The memebank graphical user interface will be constructed using React.js.
Memebank will be using a Ruby on Rails server, and an SQLite database to store
all its data.

### 6.2.1 Major Software Components Section

- Front End CSC -- web-based GUI for Memebank
  - Login/Join CSU -- page for users to log in or sign up for a Memebank account
  - Bank CSU -- page for users to view and manage their banks
    - Bank list module -- displays the user's banks
    - Bank info module -- displays basic information of the selected bank
    - Tag list module -- displays searchable list of link tags in the ban
    - Bank display module -- displays stored links in a grid
    - Link input module -- input field for adding new links to a bank
      - Link input modal module -- presents input fields for adding new links
    - User display module -- displays list of users with access to the selected bank
- Server CSC
  - Ruby on Rails CSU -- modules for handling http(s) connections and requests
  - API Routes CSU --  modules for handling API requests to the server and database
- Database CSC
  - Rails Models CSU -- modules for filtering/modeling the data for storage in database
  - queries CSU -- modules for handling queries on the database

### 6.2.2 Major Software Interactions Section

### 6.2.3 Architectural Design Diagrams Section

## 6.3 CSC and CSU Descriptions Section

### 6.3.1 Detailed Class Descriptions Section
- Front Page
  - Login Class -- This class has the GUI for memebank's login page as well as sending the data to our database for authentication when logging in
  - Join Class -- This class has the GUI for memebank's sign up page and also sends and saves the data to our database to register this user
- Home Page
  - View Bank -- This class is the GUI for each persons bank and contains a list of cards that are displayed to the user and can be narrowed down through the tag system. It also contains a search bar at the top to search through the cards as well as an insertion bar at the bottom that always the user to input a link that makes a new Card and adds it to your View Bank.
    - Card Class -- This class makes an object for each meme and its properties such as the tags it contains.
    - Toolbar Class -- Has the GUI for the specific user
- Account Class -- Talks to our account Database the fetch user info and deals with stuff such as authentication, changing profile name and pictures, and deleting an account.
- Bank Class -- Deals with the storage of memes and makes sure that the user is entering in a valid value, meaning that the link address given is valid. 
### 6.3.2 Detailed Interface Descriptions Section

### 6.3.3 Detailed Data Structure Descriptions Section

### 6.3.4 Detailed Design Diagrams Section

## 6.4 Database Design and Description Section

### 6.4.1  Database Design ER Diagram Section

### 6.4.2  Database Access Section

### 6.4.3  Database Security Section
