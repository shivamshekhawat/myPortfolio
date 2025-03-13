export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70 text-sm">© {currentYear} Portfolio. All rights reserved.</p>
          </div>
          <div>
            <p className="text-foreground/70 text-sm">Designed & Built with ❤️ using React, Node.js & MongoDB</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

