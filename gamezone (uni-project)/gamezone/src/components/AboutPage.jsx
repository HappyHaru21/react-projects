import React from 'react'

const AboutPage = () => {
    return (
        <main style={{ height: '69vh', textAlign: 'center', padding: '2rem' }}>
          <h2>About Us</h2>
          
          <section style={{ marginBottom: '1.5rem' }}>
            <p>Welcome to <strong>GameZone</strong>! 🎮</p>
          </section>
          
          <section style={{ marginBottom: '1.5rem' }}>
            <p>
              We're all about bringing fun and excitement to your screen with our collection of mini-games. 
            </p>
            <p>
              Whether you're a fan of classic games like Tic-Tac-Toe 🐾 or looking to test your memory with 
              Photo Match 🧠, we've got something for everyone!
            </p>
          </section>
          
          <section style={{ marginBottom: '1.5rem' }}>
            <p>
              Our mission? To make your day a little brighter, one game at a time. 🌟
            </p>
          </section>
          
          <section>
            <p>
              Built with ❤️ by passionate developers who believe in the power of play. 
            </p>
            <p>
              So, grab a friend, pick a game, and let the fun begin!
            </p>
          </section>
        </main>
    );
}

export default AboutPage