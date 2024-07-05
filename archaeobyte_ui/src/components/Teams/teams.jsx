import React from 'react'

const teams = () => {
  return (
    <div className="container">
      <h1>What is .NET?</h1>
      <p>.NET is a free and open-source application platform supported by Microsoft.</p>

      <div className="content">
        <div className="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/watch?v=dQw4w9WgXcQ" // Update this with the correct YouTube video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text">
          <div className="dotnet">
            <h2>.NET</h2>
            <p>
              .NET is a secure, reliable, and high-performance application platform.
              <br />
              C# is the programming language for .NET. It's strongly-typed and type-safe and has integrated concurrency and automatic memory management.
            </p>
            <a href="https://dotnet.microsoft.com/">Learn about .NET →</a>
          </div>

          <div className="csharp">
            <h2>C#</h2>
            <p>
              C# is a modern, safe, and object-oriented programming language that spans from high-level features such as data-oriented records to low-level features such as function pointers.
            </p>
            <a href="https://docs.microsoft.com/en-us/dotnet/csharp/">Learn about C# →</a>
          </div>
        </div>
      </div>

      <div className="application-models">
        <h2>Application models</h2>
        <p>You can build many types of apps with .NET. To help you build apps faster, app models are built on top of the base libraries.</p>
        <div className="models-grid">
          <div className="model">
            <h3>Web</h3>
            <p>Build web apps and services for Windows, Linux, macOS, and Docker.</p>
          </div>
          <div className="model">
            <h3>Mobile</h3>
            <p>Use a single codebase to build native mobile apps for iOS, Android, and more.</p>
          </div>
          <div className="model">
            <h3>Desktop</h3>
            <p>Create native apps for Windows and macOS or build apps that run anywhere with web technologies.</p>
          </div>
          <div className="model">
            <h3>Microservices</h3>
            <p>Create independently deployable microservices that run on Docker containers.</p>
          </div>
          <div className="model">
            <h3>Cloud</h3>
            <p>Consume existing cloud services, or create and deploy your own.</p>
          </div>
          <div className="model">
            <h3>Machine learning</h3>
            <p>Add vision algorithms, speech processing, predictive models, and more to your apps.</p>
          </div>
          <div className="model">
            <h3>Game development</h3>
            <p>Develop 2D and 3D games for the most popular desktops, phones, and consoles.</p>
          </div>
          <div className="model">
            <h3>Internet of Things</h3>
            <p>Make IoT apps, with native support for the Raspberry Pi and other single-board computers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default teams