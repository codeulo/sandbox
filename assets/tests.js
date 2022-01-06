const addMeta = () => {
  setTimeout(() => {
    let meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    meta.setAttribute(
      "content",
      "https://sandbox.modulo.to/assets/og-pass.png"
    );
    document.head.append(meta);
  }, 3000);
};

addMeta();
