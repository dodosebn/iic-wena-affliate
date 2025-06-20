import Footer from './components/footer';
import NavBar from './components/navBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div>
          <NavBar />
    {children}
    </div>
          <Footer />

      </body>
    </html>
  );
}
