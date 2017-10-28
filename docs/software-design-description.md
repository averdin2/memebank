# 6.0 Software Design Description

## 6.1	Introduction

### 6.1.1 System Objectives Section

### 6.1.2 Hardware, Software, and Human Interfaces Section

## 6.2 Architectural Design Section

The memebank graphical user interface will be constructed using React.js.
Memebank will be using a Ruby on Rails server, and an SQLite database.

### 6.2.1 Major Software Components Section

- Login Page
  - A login page will be displayed to the user
- Entry fields
  - The Frontend shall provide text entry fields into which the user may type their login information.
- Sign Up button
  - A sign up button will be displayed to the user
- Bank CSU Page
- List Module
- New Bank button
- Tag List module
- Tag Filter
- New Link Field 
- Image Preview

### 6.2.2 Major Software Interactions Section

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

### 6.3.2 Detailed Interface Descriptions Section

### 6.3.3 Detailed Data Structure Descriptions Section

### 6.3.4 Detailed Design Diagrams Section

## 6.4 Database Design and Description Section

### 6.4.1  Database Design ER Diagram Section

### 6.4.2  Database Access Section

### 6.4.3  Database Security Section
