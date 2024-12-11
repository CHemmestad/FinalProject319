import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [aboutMovieReview, setAboutMovieReview] = useState('');

    useEffect(() => {
        fetch('./Reviews/aboutMovieReviews.txt') // Path to your text file
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                setAboutMovieReview(data);
            })
            .catch((error) => console.error('Error loading text file:', error));
    }, []);
    return (
        <main>
            <h1>Home</h1>
            <div
                className="row mb-3 center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    className="col-3 themed-grid-col"
                    style={{
                        backgroundImage: "url('./Images/Logo.webp')",
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                    }}
                ></div>
            </div>
            <div
                className="row mb-3 center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="col-8 themed-grid-par" style={{ borderRadius: '2%' }}>
                    <h3>
                        <strong>About Movie Reviews</strong>
                    </h3>
                    <p id="aboutMovieReview">{aboutMovieReview}</p>
                </div>
            </div>
        </main>
    );
}
export default Home;