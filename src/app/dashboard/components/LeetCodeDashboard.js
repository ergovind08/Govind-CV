"use client"; // Ensure this component is rendered on the client-side

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const LeetCodeDashboard = ({ username }) => {
  const [leetcodeData, setLeetCodeData] = useState(null);
  const [badgesData, setBadgesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/incorelang`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLeetCodeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };

    const fetchBadgesData = async () => {
      try {
        const response = await fetch(
          `https://alfa-leetcode-api.onrender.com/incorelang/badges`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBadgesData(data);
      } catch (error) {
        console.error("Error fetching badges data:", error);
        setError("Failed to load badges. Please try again later.");
      }
    };

    fetchLeetCodeData();
    fetchBadgesData();
  }, [username]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!leetcodeData || !badgesData)
    return <p className="text-center text-gray-500">No data available</p>;

  const { name, birthday, avatar, school, progress } = leetcodeData;

  const { badges, activeBadge } = badgesData;

  return (
    <>
      <h1 className="text-xl mb-3">LeetCode Badges</h1>
      <div className="max-w-4xl mx-auto dark:bg-dark rounded-lg overflow-hidden">
        <div className="dark:bg-dark text-gray-900 dark:text-gray-100 flex items-center"></div>
        <div>
          <div className="dark:bg-dark p-3 rounded-lg">
            {activeBadge && (
              <div className="flex items-center mb-4 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                <img
                  src={activeBadge.icon}
                  alt={activeBadge.displayName}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="text-sm font-semibold">
                    {activeBadge.displayName}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Earned on: {activeBadge.creationDate}
                  </p>
                </div>
              </div>
            )}
            <div className="space-y-4">
              {badges
                .filter((badge) => badge.icon)
                .slice(0, 2)
                .map((badge) => (
                  <div
                    key={badge.id}
                    className="bg-white dark:bg-dark p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md flex items-center"
                  >
                    <img
                      src={badge.icon}
                      alt={badge.displayName}
                      className="w-12 h-12 mr-4"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        {badge.displayName}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Earned on: {badge.creationDate}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeetCodeDashboard;
