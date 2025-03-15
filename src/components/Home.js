import { useState } from "react";

function Home({showContact}) {
    const [show, setShow] = useState(showContact);
    
    const formHandler = (event) => {
        event.preventDefault();
        const subject = event.target.children[0].children[1].value; //subject input value
        const message = event.target.children[1].children[1].value; //text area value
        
        var link = "mailto:amorse@dal.ca"
            + "&subject=" + encodeURIComponent(`${subject} - Portfolio Inquiry`)
            + "&body=" + encodeURIComponent(message);

        window.location.href = link;

        //Reset Form
        event.target.children[0].children[1].value = "";
        event.target.children[1].children[1].value = "";
        setShow(false);
    };

    const handleClick = () => {
        setShow(!show);
    }


    return (
        <div className="d-flex flex-column w-75 mx-auto text-center my-auto">
            <h1>Welcome!</h1>
            <p className='text-center'>
                Thank you for visiting my personal portfolio!<br/>
                My name is Andrew Morse, I am currently a student at Dalhousie university studying Computer Science.<br/>
                Please take a look around! Don't hesitate to reach out below with any questions or inquiries.
            </p>
            <button className='btn btn-outline-primary btn-lg w-25 mx-auto' onClick={handleClick}>Contact</button>

            <div className="w-50 mx-auto my-5">
                {show && <>
                <h2>Contact Me</h2>
                <form id="contactForm" onSubmit={formHandler} autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="contactSubject">Subject:</label>
                        <input type="text" id="contactSubject" name="contactSubject" className="form-control" placeholder="Enter subject here" required/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="contactMsg">Message</label>
                        <textarea id="contactMsg" name="contactMsg" className="form-control" placeholder="Write something.."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> </>}
            </div>
        </div>
    );
}

export default Home;