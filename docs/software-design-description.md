# 6.0 Software Design Description

## 6.1	Introduction

This Software Design Description (SDD) presents the architecture and detailed design for the software for the Memebank web application. Memebank is a personal online database and social media platform that allows users to store, sort, and share links to their favorite memes. A memebank user will be able to upload links and store them in a bank. The bank will provide users with a clean and organized visualization of their memes in the form of cards. The meme bank will include organization features such as a tag filter option. This option will allow the users to view their memes that are associated with certain tags. Memebank will also allow for sharing of banks to other users. The Memebank system architecture is comprised of a React.js graphical user interface, a Ruby on Rails server, and a SQLite database.

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

- Login Page
  - A login page will be displayed to the user
- Entry fields
  - The Frontend shall provide text entry fields into which the user may type their login information.
- Sign Up button
  - A sign up button will be displayed to the user
- Bank CSU Page
  - This page will display the bank of memes
- List Module
  - This list module will display a list of banks
- New Bank button
  - This button will allow the user to create a new bank
- Tag List module
  - This will be a list of tags associated with the meme bank
- Tag Filter
  - This filter option will allow the user to filter the memes by tags
- New Link Field
  - This field will allow a user to copy and paste a link to upload a meme
- Image Preview
  - An image preview will appear when a meme is uploaded

### 6.2.2 Major Software Interactions Section

- Login Page
  - A login page will be displayed to the user. The login page will have entry fields for the user to enter login information. The login page will also have a Sign Up button for the user to create an account.
- Entry fields
  - The Frontend shall provide text entry fields into which the user may type their login information. Once the user enters their information, they will be taken to the Bank CSU Page.
- Sign Up Button
  - A sign up button will be displayed to the user to create a new account. When the Sign Up Button is pressed, a form will appear with fields asking for the user information.
- Bank CSU Page
  - This page will display the bank of memes. The cards will display all the memes in the particular bank being displayed.
- List Module
  - This list module will display a list of banks that the user owns.
- New Bank button
  - This button will allow the user to create a new bank.
- Tag List module
  - This will be a list of tags associated with the meme bank. These tags will be associated with the memes in the user's meme bank.
- Tag Filter
  - This filter option will allow the user to filter the memes by tags. The user can use this option to only view memes that are associated with specific tags.
- New Link Field
  - This field will allow a user to copy and paste a link to upload a meme. Once the meme is uploaded, the new card will appear alongside the other cards.
- Image Preview
  - An image preview will appear when a meme is uploaded

### 6.2.3 Architectural Design Diagrams Section

## 6.3 CSC and CSU Descriptions Section

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

- Front End CSC
  - Login/Join CSU -- This page will allow the users the log in or sign up for a memebank account. There will be a form that will ask for the username and password, accompanied by the Login Button. When the user logs in to their account, they will be taken to the Bank Page. If the user chooses to Join, a new form will appear for the user to enter their information. When a new user joins, they will be taken to the Bank page displaying an empty meme bank.
  - Bank CSU -- The Bank CSU will display the user's banks. The first bank displayed will automatically default to the user's first bank that was created. The bank will display all the cards/memes that are stored in that bank. The Bank CSU will also include a list of the other banks owned by the user, and all the information associated with the various banks.
    - Bank list module -- The bank list module will be comprised of a list of all the user's banks. If the user clicks on one of the banks in the list, the view will change to display the cards that are in the newly selected bank.
    - Bank info module -- The Bank info module will show the information regarding that particular bank.
    - Tag list module --The Tag list module will display a list of tags that are associated with all of the user's memes. The tag list will have a filter and search bar associated with it. The user will be able to search the tag list to display all the memes that are associated with those particular tags.
    - Bank display module -- displays stored links in a grid
    - Link input module -- input field for adding new links to a bank
      - Link input module -- The Link input module will allow the user to paste a link to upload a new meme. The card will appear when the new meme is uploaded. If the user uploads a new meme, it will be added to the bank that is currently displayed.
    - User display module -- The User display module will show the list of users that currently have access to the selected bank. The user can choose to add or remove users from a bank.

### 6.3.3 Detailed Data Structure Descriptions Section

- User Data Structure
  - User_id -- This is the index for individual user, this is unique.
  - Email -- This is the user's email that the user inputs when they sign up for their account. This is used for the login and provides uniqueness for each users. Emails has to be unique and valid which our database would check and no email could be used twice to make a second account. It accepts any existing email format that seems similar to abc123@something.com. It is saved as a string in the database.
  - Username -- This is user's username that does not have to be unique and the user can change any time they want. It is saved as a string in the database.
  - Password -- This is user's password that the user inputs when they sign up for their account. It consists of special characters, letters, and numbers. It is saved as a string in the database.
  - Created_at -- The date and timestamp that the user account was created at. This holds datetime value.
  - Updated_at -- The date and timestamp that the user account has been modified at. This can be either change of password or username. This holds datetime value.

- Bank Data Structure
  - Title -- This is the name of the Bank, it does not have to be unique. This is a string value.
  - Size -- Size is how many cards, or memes, that the bank holds. It would be incremented as images are added and decremented as images are removed. This holds an integer.
  - User_id -- This is a foreign key from the User Entity and will be referring to which user the bank is created and owned by. This is interger.
  - Created_at -- The date and timestamp that the bank was created at. This holds datetime value.
  - Updated_at -- The date and timestamp that the bank has been modified at. This can be either change of title by adding or removing cards from the bank. This holds datetime value.

- Card Data Structure
  - Src -- This is the a string source of the image, which usually takes in a url.
  - Bank_id -- This is a foreign key from the Bank Entity and will be referring to which bank the card is added in.
  - Created_at -- The date and timestamp that the card was created at.
  - Updated_at -- The date and timestamp that the card has been modified at. This can be either change of src for which bank it is contained in.

### 6.3.4 Detailed Design Diagrams Section

## 6.4 Database Design and Description Section

The memebank database contains user, bank, and meme entity with attributes and relations attached to each of them. Each meme will be held and referred to the card it is contained in. The database we are using at the moment is SQLite, because the data we are keeping is so lightweight, but this is subject to change as we introduce image hosting and other heavyweight features. The engine we will likely switch to if that becomes the case is PostreSQL. The database itself is being designed in the standard of Ruby on Rails applications, which is to reflect the model entity created by the Ruby on Rails generator (the data structures listed before, in section 6.3.3, follow this standard).

### 6.4.1  Database Design ER Diagram Section

![Database Design ERD](software-design-description-erd.PNG)

### 6.4.2  Database Access Section

memebank's database access is handled through two main methods:
- Automatic queries:
  - These are the queries performed when automatically creating the database and when there is data being added to, modified, or removed from the database.
  - Any person who uses the application is using this method to manipulate the database.
- Migrations:
  - These are queries created manually using Rails' database (domain specific language). They allow you to change the database schema without disturbing the application or the data.
  - Anyone who has access to development of the application has the ability to perform migrations.

### 6.4.3  Database Security Section

The security of the database of the application is being handled by Rails' protections that are built in (simple examples of which are found in section 6.4.2) and by Doorkeeper a Rails gem that provides the OAuth2 implementation for our application. OAuth uses token-based and encrypted authentication to check that the correct clients are accessing their permitted data.
