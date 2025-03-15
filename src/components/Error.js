function Error() {
    return (
        <div className="text-center my-auto">
            <h1>404 - Page Not Found</h1>
            <p>Please ensure you have a valid URL and try again</p>
            <a href="/"><button type="button" className="btn btn-primary btn-lg">Home</button></a>
        </div>
    );
}

export default Error;


