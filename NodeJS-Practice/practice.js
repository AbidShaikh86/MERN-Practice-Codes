const http = require('http');

const demoApp = http.createServer((request, response) => {
    const { url } = request;
    // response.write("<h1>Hello World!</h1>")
    if (url.toLowerCase() === '/' || url.toLowerCase() === '/home') {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(`
            <nav>
                <div class="logo">MyBrand</div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>

            <header class="hero">
                <h1>Welcome to My Website</h1>
                <p>This is a simple, clean home page created with HTML and CSS.</p>
                <a href="#" class="btn">Learn More</a>
            </header>
            `);
        response.end()
    } else if (url.toLowerCase() === '/about') {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(`
            <nav>
                <div class="logo">MyBrand</div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>
                <section class="container">
                    <h1>About Us</h1>
                    <p>Founded in 2026, MyBrand started as a small project to help people build better web experiences. Our mission is simplicity and speed.</p>
                <div class="team-grid" style="display: flex; gap: 20px; margin-top: 20px;">
                <div style="background: #eee; padding: 20px; border-radius: 8px; flex: 1;">
                    <h3>Our Vision</h3>
                    <p>To make the web accessible and beautiful for everyone.</p>
                </div>
                <div style="background: #eee; padding: 20px; border-radius: 8px; flex: 1;">
                    <h3>Our Values</h3>
                    <p>Transparency, innovation, and user-first design.</p>
                </div>
                </div>
                </section>
            `);
            response.end();
    } else if (url.toLowerCase() === '/service') {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(`
            <nav>
                <div class="logo">MyBrand</div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>
                <section class="container">
                    <h1>Our Services</h1>
                    <div class="services-list" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="service-card" style="border: 1px solid #ddd; padding: 15px;">
                            <h3>Web Design</h3>
                            <p>Modern, responsive layouts tailored to your brand identity.</p>
                        </div>
                        <div class="service-card" style="border: 1px solid #ddd; padding: 15px;">
                            <h3>Backend Development</h3>
                            <p>Robust Node.js servers and database management.</p>
                        </div>
                        <div class="service-card" style="border: 1px solid #ddd; padding: 15px;">
                            <h3>SEO Optimization</h3>
                            <p>Helping your site rank higher on search engines.</p>
                        </div>
                        <div class="service-card" style="border: 1px solid #ddd; padding: 15px;">
                            <h3>Consulting</h3>
                            <p>Expert advice on scaling your digital products.</p>
                        </div>
                    </div>
                </section>
            `);
            response.end();
    } else if (url.toLowerCase() === '/contact') {
        response.writeHead(200, { "content-type": "text/html" })
        response.write(`
            <nav>
                <div class="logo">MyBrand</div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
            </nav>
                <section class="container">
                    <h1>Contact Us</h1>
                    <p>Have a question? Drop us a message and we'll get back to you within 24 hours.</p>
                    <form style="display: flex; flex-direction: column; max-width: 400px; gap: 10px;" action="/home" method="post">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" style="padding: 10px;">
        
                        <label>Email</label>
                        <input type="email" placeholder="Email Address" style="padding: 10px;">
        
                        <label>Message</label>
                        <textarea rows="5" style="padding: 10px;"></textarea>
        
                        <button type="submit" style="background: #2c3e50; color: white; padding: 10px; border: none; cursor: pointer;">
                            Send Message
                        </button>
                    </form>
                </section>
            `);
            response.end();
    } else {
        response.writeHead(501);
        response.end();
    }
    console.log(url);

});

const PORT = 1234;

demoApp.listen(PORT, () => {
    console.log(`Server IS running on http://localhost:${PORT}`);
});