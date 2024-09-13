export default function LocationMap() {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.0977284647793!2d106.82266616977275!3d-6.1944380162406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5af1271d4c5%3A0xeefb198cb99d43f0!2sHalte%20Transjakarta%20Bundaran%20HI%20Astra!5e0!3m2!1sen!2seg!4v1726188821992!5m2!1sen!2seg";

  return (
    <div style={{ height: "400px", width: "35%" }} data-aos="fade-right">
      <iframe
        src={iframeSrc}
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
