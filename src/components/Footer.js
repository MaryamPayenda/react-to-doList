const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div>
      <h4 className="footer">Copyrights ®{year} </h4>
    </div>
  );
};

export default Footer;
