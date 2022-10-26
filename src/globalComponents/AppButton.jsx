import React from "react";

function AppButton({ icon, text, onClick }) {
  return (
    <button
      className="flex bg-orange border-none px-4 justify-center
                py-3 gap-3 rounded-xl
                md:py-5 md:px-8"
      onClick={onClick}
    >
      <div className="text-white text-12 
                      md:text-b10 lg:text-b9 "> {text}</div>
    </button>
  );
}

export default AppButton;
