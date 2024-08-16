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
        setLoading(false); // Ensure loading is set to false in case of error
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

  const { name, birthday, avatar, ranking, reputation, school, progress } =
    leetcodeData;

  const { badges, upcomingBadges, activeBadge } = badgesData;

  return (
    <>
      <h1 className=" text-xl text-gray-600  mb-3">LeetCode Dashboard</h1>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 bg-gray-200 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 flex items-center">
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-500"
            />
          </div>
          <div className="ml-6">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="text-sm">
              <span className="text-green-600">Username:</span> incorelang
            </p>
            <p className="text-sm">
              <span className="text-green-600">DOB:</span> {birthday}
            </p>
            <p className="text-sm">
              <span className="text-green-600">Institution:</span> {school}
            </p>
          </div>
        </div>
        <div>
          {/* Progress Bar Card */}
          <div className="bg-gray-50 dark:bg-gray-900 p-1 rounded-lg shadow-md">
            {progress &&
              progress.map((item) => (
                <div key={item.difficulty} className="mb-4">
                  <p className="text-lg mb-2">
                    <strong>{item.difficulty} Problems Solved:</strong>
                  </p>
                  <ProgressBar
                    now={item.percentage}
                    label={`${item.percentage}%`}
                    variant="success"
                  />
                </div>
              ))}
          </div>

          {/* Active Badge Card */}
          <div className=" dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Active Badge</h3>
            {activeBadge && (
              <div className="flex items-center">
                <img
                  src={activeBadge.icon}
                  alt={activeBadge.displayName}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">
                    {activeBadge.displayName}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Earned on: {activeBadge.creationDate}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Badges Section */}
        <div className="p-2 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-4">Badges Earned</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center"
              >
                <img
                  src={badge.icon}
                  alt={badge.displayName}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <p className="text-lg font-semibold">{badge.displayName}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Earned on: {badge.creationDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Badges Section */}
      </div>
    </>
  );
};

export default LeetCodeDashboard;
