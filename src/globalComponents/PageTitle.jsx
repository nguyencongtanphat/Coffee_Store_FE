import React from "react";

function PageTitle({ title }) {
  const titlePage = (title ?? "Default Page Title").toUpperCase();
  return (
    <div className="flex items-center m-2">
      <img
        src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
        alt=""
        width="40"
      />
      <h1
        className="text-b10 text-orange
                    md:text-h3
                    lg:text-h2"
      >
        {titlePage}
      </h1>
      <img
        src="https://img.freepik.com/free-vector/start_53876-25533.jpg"
        alt=""
        width="40"
      />
    </div>
  );
}

export default PageTitle;
