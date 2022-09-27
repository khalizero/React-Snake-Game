import React, { useEffect } from "react";

const Settings = () => {
  useEffect(() => {
    document.title = "Change The Snake";
  }, []);

  return <div>Settings</div>;
};

export default Settings;
