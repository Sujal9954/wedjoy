import { useState } from "react";

export default function Plan() {
  const [selectedTab, setSelectedTab] = useState("budget");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Plan: Your Dream Wedding Planner
      </h1>

      <div className="grid grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg">
        {["budget", "venue", "guests", "checklist", "invitations"].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-2 rounded-md ${
              tab === selectedTab ? "bg-orange-300 text-white" : "bg-white hover:bg-gray-300"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab === "budget" && "💰 Budget"}
            {tab === "venue" && "🏰 Venue"}
            {tab === "guests" && "👥 Guest List"}
            {tab === "checklist" && "📋 Checklist"}
            {tab === "invitations" && "✉️ Invitations"}
          </button>
        ))}
      </div>

      <div className="mt-4 border rounded-lg shadow-md p-4 bg-white space-y-2">
        {selectedTab === "budget" && (
          <>
            <h2 className="text-xl font-semibold">Set Your Budget</h2>
            <p>Define your budget and get a breakdown of expected costs.</p>
            <label className="block">
              Total Budget: <input type="number" className="border p-2 rounded w-full" placeholder="Enter budget" />
            </label>
            <button className="bg-orange-300 text-white px-4 py-2 rounded">Save Budget</button>
          </>
        )}
        {selectedTab === "venue" && (
          <>
            <h2 className="text-xl font-semibold">Find Your Venue</h2>
            <p>Browse and book stunning wedding venues based on your style.</p>
            <div className="mt-4 space-y-2">
              <p>🔹 Venue 1: Grand Palace</p>
              <p>🔹 Venue 2: Beachside Resort</p>
              <p>🔹 Venue 3: Garden Paradise</p>
            </div>
          </>
        )}
        {selectedTab === "guests" && (
          <>
            <h2 className="text-xl font-semibold">Manage Your Guest List</h2>
            <p>Add guests, track RSVPs, and organize seating arrangements.</p>
            <input type="text" className="border p-2 rounded w-full mt-4" placeholder="Enter guest name" />
            <button className="bg-orange-300 text-white px-4 py-2 rounded mt-2">Add Guest</button>
          </>
        )}
        {selectedTab === "checklist" && (
          <>
            <h2 className="text-xl font-semibold">Wedding Checklist</h2>
            <p>Stay on track with a step-by-step planning guide.</p>
            <ul className="mt-4 list-disc pl-6">
              <li>✅ Book Venue</li>
              <li>✅ Choose Caterer</li>
              <li>🔲 Send Invitations</li>
            </ul>
          </>
        )}
        {selectedTab === "invitations" && (
          <>
            <h2 className="text-xl font-semibold">Send Invitations</h2>
            <p>Create and send personalized digital or printed wedding invites.</p>
            <button className="bg-orange-300 text-white px-4 py-2 rounded mt-4">Create Invitation</button>
          </>
        )}
      </div>
    </div>
  );
}




// import React, { useState } from "react";

// const checklistData = [
//     {
//         category: "Venue",
//         icon: "📍",
//         tasks: ["Research venues", "Book venue", "Visit location"]
//     },
//     {
//         category: "Wedding Website",
//         icon: "💻",
//         tasks: [
//             "Browse free website designs",
//             "Set up a gift registry",
//             "Share wedding website with guests",
//             "Add cover photo & event details",
//             "Add travel & hotel info",
//             "Set up RSVPs"
//         ]
//     },
//     {
//         category: "Photos & Videos",
//         icon: "📷",
//         tasks: ["Hire photographer", "Book videographer", "Plan photo shoot"]
//     },
//     {
//         category: "Food & Drink",
//         icon: "🍽",
//         tasks: ["Choose menu", "Book caterer", "Confirm guest meals"]
//     },
//     {
//         category: "Attire",
//         icon: "👗",
//         tasks: ["Buy wedding dress", "Get alterations", "Pick groom's outfit"]
//     },
//     {
//         category: "Music",
//         icon: "🎵",
//         tasks: ["Hire DJ/Band", "Make playlist", "Schedule first dance"]
//     },
//     {
//         category: "Flowers & Decor",
//         icon: "🌸",
//         tasks: ["Choose color theme", "Book florist", "Select table decor"]
//     }
// ];

// const Plan = () => {
//     const [openSections, setOpenSections] = useState({});
//     const [completedTasks, setCompletedTasks] = useState({});

//     const toggleSection = (category) => {
//         setOpenSections((prev) => ({
//             ...prev,
//             [category]: !prev[category]
//         }));
//     };

//     const toggleTask = (category, task) => {
//         setCompletedTasks((prev) => ({
//             ...prev,
//             [category]: {
//                 ...prev[category],
//                 [task]: !prev[category]?.[task]
//             }
//         }));
//     };

//     return (
//         <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
//           <br /><br />
//             {checklistData.map(({ category, icon, tasks }) => (
//                 <div key={category} className="mb-4 border rounded-lg">
//                     <button
//                         onClick={() => toggleSection(category)}
//                         className="flex justify-between w-full p-4 text-lg font-semibold bg-gray-100"
//                     >
//                         <span>{icon} {category}</span>
//                         <span>{openSections[category] ? "▲" : "▼"}</span>
//                     </button>
//                     {openSections[category] && (
//                         <ul className="p-4 bg-white">
//                             {tasks.map((task) => (
//                                 <li key={task} className="flex items-center space-x-2 py-2">
//                                     <input
//                                         type="checkbox"
//                                         checked={completedTasks[category]?.[task] || false}
//                                         onChange={() => toggleTask(category, task)}
//                                         className="w-5 h-5"
//                                     />
//                                     <span className={completedTasks[category]?.[task] ? "line-through text-gray-500" : ""}>
//                                         {task}
//                                     </span>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Plan;
