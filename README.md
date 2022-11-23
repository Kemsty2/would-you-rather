<p align="center"><img height="100px" src="./public/logo192.png"></p>
<p align="center">
<a href="https://travis-ci.org/Kemsty2/udacity-capstone">
    <img src="https://travis-ci.org/Kemsty2/udacity-capstone.svg?branch=master">
</a>
</p>

# Introduction

Would You Rather is the project N°2 i realized for the React Nanodegree Course.
Please note that this package is still under active MIT License.

![TTA Screenshot](./public/images/img1.png)

# Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [Poll Item](#poll-item)
    - [LogIn into the application](#login-into-the-application)
    - [List the poll](#list-the-poll)
    - [Add a poll](#add-a-poll)
    - [Answer a poll](#answer-a-poll)
    - [See Poll Details](#see-poll-details)
    - [Display Leaderboard](#display-leaderboard)
  - [Credits](#credits)
  - [License](#license)

## Requirements

Make sure your computer meets the following requirements.

- Node > 10.x
- Yarn > 1.21.x
- Firefox or Google Chrome Navigator

## Features

We have few features :

- [x] List the polls
- [x] Answer a poll
- [x] See details of a poll
- [x] Create a Poll
- [x] Login on the application
- [x] See Leaderboard

## Installation

Firstly, download the project using :

``` bash
$git clone https://github.com/kemsty2/woudl-you-rather

```

Install all the dependecies of the client app :

```bash

$cd Frontend
$yarn install
```

This command will install all the required dependecies to run the react client application.

## Usage

Run webpack live server

```bash
$yarn start
```

To view the application, go to:

```php
http://localhost:3000/
```

## Documentation

### Poll Item

The application is able to manage poll. A poll item contains the following field :

- `id` (string) - a unique id for a poll
- `author` (string) - a id which represent the poll author
- `timestamp` (int) - which represent the creation date of the poll
- `optionOne` (object) - information about the option One. Number of votes and the text
- `optionTwo` (object) - information about the option One. Number of votes and the text

### LogIn into the application

First,  the user should login to the platform. To log into the platform,
select a user in the user list and click on `Sign In`
![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img2.png)

### List the poll

After logging on the application, the list of poll is displayed. You can

1. Filter the poll between Unanswered and Answered Poll

![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img1.png)

### Add a poll

To add a poll, Click on `Add Poll` Nav Link.

1. Edit the optionOne and optionTwo
2. Click on Add

![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img5.png)

### Answer a poll

To answer a poll,

1. Click on a poll
2. Select your option
3. Click on submit

The Poll Details is displayed.

![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img3.png)

### See Poll Details

Click on an answered poll

1. The Details of a poll is displayed

![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img4.png)

### Display Leaderboard

To display a leaderboard, click on `Leaderboard Nav Item`

![TTA Screenshot](https://github.com/Kemsty2/would-you-rather/tree/master/public/images/img6.png)

## Credits  
  
- [Kemgne Moyo Steeve Aymard](https://twitter.com/kemsty2)
  
## License  
  
MIT. Please see the [license file](LICENSE) for more information.
