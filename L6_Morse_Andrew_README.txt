# Lab 6

* *Date Created*: 12 Mar 2025
* *Last Modification Date*: 14 Mar 2025
* *Lab URL*: <https://csci31712lab6.netlify.app/>
* *Git URL*: https://git.cs.dal.ca/amorse/csci3172/-/tree/main/labs/lab6/lab6?ref_type=heads


## Authors

Andrew Morse (amorse@dal.ca) - Developer


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [React](https://react.dev/) - Javascript framework
* [React-Bootstrap](https://react-bootstrap.netlify.app/) - Used for custom react components



## Sources Used


### Home.js

*Lines 11 - 15*

```
var link = "mailto:amorse@dal.ca"
            + "&subject=" + encodeURIComponent(`${subject} - Portfolio Inquiry`)
            + "&body=" + encodeURIComponent(message);

        window.location.href = link;

```

The code above was created by adapting the code in [stack overflow](https://stackoverflow.com/questions/271171/sending-emails-with-javascript) as shown below: 

```
var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    ;
    
    window.location.href = link;

```

I didn't know how to implement a mailto link that could be used in a contact form. I had to look up the proper syntax to implement this functionality. I knew that I wanted to do something like this but didn't have the words to execute my vision. This is why I consulted this source.


### About.css

*Lines 12 - 14*

```
li {
    list-style-position: inside;
}

```

The code above was created by adapting the code in [stack overflow](https://stackoverflow.com/questions/58191973/center-aligning-an-unordered-list-with-bullets-in-bootstrap) as shown below: 

```
li {
    list-style-position: inside;
}

```

I needed help styling my list elements to fit the aesthetic of my website. This helped me to properly align them to look the best on my about me page.



## Artificial Intelligence Tools Used
No AI was used in the creation of this lab



## Acknowledgments
The development of this website relied heavily on techniques learned in lectures and labs in this class. Thank you to all instructors who have helped me to gain the knowledge and skills demonstrated in this product.

##Testing
Test 1 - All links were tested both through the routing buttons and directly typing the URL => Outputs were as expected

Test 2 - 404 page - the 404 page was tested by entering incorrect URLs => (http://localhost:3000/test) was used as an example URL => Outputs returned as expected

Test 3 - Mailto - Mailto was tested by completing the contact form and testing to see if it was correctly launched and formatted => "Job offer" was the sample subject and Lorem Ipsum was used as the content => results returned as expected

Test 4 - Blank mailto - " " empty strings were used to bypass the required tag on the form inputs => Form still behaved as expected and generated an email with blank subject and blank conent => Outputs functioned as expected