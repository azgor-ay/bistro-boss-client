import React from "react";
import bg from "../../assets/home/chef-service.jpg";
const BIO = () => {
  return (
    <div
      className="hero min-h-min p-12 bg-fixed"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content text-center text-black">
        <div className="max-w-2xl px-12 py-3 bg-white bg-opacity-90">
          <h1 className="mb-5 text-5xl font-bold crinzel">Bistro Boss</h1>
          <p className="mb-5 text-xs text-gray-600">
            Bistro Boss is the epitome of culinary excellence and
            sophistication, providing a dining experience that leaves a lasting
            impression. Nestled in the heart of a bustling city, this enchanting
            restaurant embodies the perfect blend of contemporary style and
            timeless charm. <br /> <br />
            As you step into Bistro Boss, you are immediately greeted by an
            inviting ambiance that exudes warmth and elegance. The interior
            decor boasts a tasteful fusion of modern design elements with rustic
            touches, creating an atmosphere that is both cozy and chic. Soft,
            ambient lighting casts a gentle glow, casting an intimate spell upon
            the space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BIO;
