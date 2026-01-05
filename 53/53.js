import React, { useState } from "react";

function Tabs() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <h2>Tabs Example</h2>

      {/* Tab Buttons */}
      <button onClick={() => setActiveTab("tab1")}>
        Tab 1
      </button>

      <button onClick={() => setActiveTab("tab2")}>
        Tab 2
      </button>

      {/* Tab Content */}
      <div>
        {activeTab === "tab1" && <p>This is content of Tab 1</p>}
        {activeTab === "tab2" && <p>This is content of Tab 2</p>}
      </div>
    </div>
  );
}

export default Tabs;
