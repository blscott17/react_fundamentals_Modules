const Footer = () => {
  // first way to do this returns only year
  //let d = new Date();
  //let y = d.getFullYear();
  //return <p>Copyright BLS {y}</p>;

  return <p>Copyright BLS {new Date().getFullYear()}</p>;
};

export default Footer;
