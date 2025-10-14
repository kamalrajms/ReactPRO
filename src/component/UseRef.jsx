import React, { useRef, useState, useEffect } from "react";

export default function UseRef() {
  //eg1
  const inpuRef = useRef();

  const focusInput = () => {
    inpuRef.current.focus();
  };
  // eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  //eg3
  const [newProductImages, setNewProductImages] = useState(true);
  const [imageURL, setIMageURL] = useState("");

  const imageRef = useRef(0);
  const handleimagechange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setIMageURL(preview);
      setNewProductImages(false);
      console.log(preview);
    }
  };

  return (
    <div>
      {/* eg 1 */}
      <nav>
        <input ref={inpuRef} type="text" placeholder="enter name" />
        <button onClick={focusInput}>focus input</button>
      </nav>
      {/* eg2 */}
      <nav>
        <h3>Timer :{sec}</h3>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </nav>
      {/* eg 3 */}

      <nav>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={imageRef}
          onChange={handleimagechange}
        />
        {newProductImages ? (
          <div onClick={() => imageRef.current.click()} className="container">
            Upload images
          </div>
        ) : (
          <img
            src={imageURL}
            onClick={() => imageRef.current.click()}
            className="img-container"
          />
        )}
      </nav>
    </div>
  );
}
