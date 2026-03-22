// Footer — Simple copyright footer

const Footer = () => {
  return (
    <footer className="py-8 bg-beige border-t border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Hemanshu Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
