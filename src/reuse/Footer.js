function Footer() {
    return (
        <div className="bg-primary text-light text-center h-10 d-flex justify-content-evenly align-items-center py-3">
            <div className="px-5 text-start">
                <p>Styled By <a className='text-light' href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a></p>
                <p>Made with <a className='text-light' href="https://react.dev/" target="_blank" rel="noreferrer">React</a></p>
                <p>Made using elements from <a className='text-light' href="https://react-bootstrap.netlify.app/" target="_blank" rel="noreferrer">React-Bootstrap</a></p>
            </div>
            <div className="px-5">
                <p><a className='text-light' href="https://www.linkedin.com/in/andrew-morse-320641239/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p><a className='text-light' href='/contact'>Contact Me</a></p>
            </div>
        </div>
        
    );
}

export default Footer;