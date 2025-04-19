import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Plan() {
  const [selectedTab, setSelectedTab] = useState("budget");
  const navigate = useNavigate()
  return (
    <div className="max-w-4xl mx-auto p-6">
      <br /><br />
      <h1 className="text-3xl font-bold text-center mb-6">
        Plan: Your Dream Wedding Planner
      </h1>

      <div className="grid grid-cols-5 gap-2 bg-gray-100 p-2 rounded-lg">
        {["budget", "venue", "guests", "checklist"].map((tab) => (
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
            {/* {tab === "invitations" && "✉️ Invitations"} */}
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
              <button onClick={()=>{navigate("/register"),(scrollTo(0,0))}} className="bg-orange-300 text-white px-4 py-2 rounded">Venue Menu</button>
 
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
              <li>🔲 Book Venue</li>
              <li>🔲 Choose Caterer</li>
              <li>🔲 Send Invitations</li>
            </ul>
          </>
        )}
        {/* {selectedTab === "invitations" && (
          <>
            <h2 className="text-xl font-semibold">Send Invitations</h2>
            <p>Create and send personalized digital or printed wedding invites.</p>
            <button className="bg-orange-300 text-white px-4 py-2 rounded mt-4">Create Invitation</button>
          </>
        )} */}
      </div>
    </div>
  );
}

