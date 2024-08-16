"use client"; // Add this directive if you need client-side features in this component

import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import { Divider } from "@nextui-org/react";
import GithubHeader from "./GithubHeader";
import Header from "./Header";
import Stats from "./Stats/Stats";
import Spotify from "./Spotify";
import LeetCodeDashboard from "./LeetCodeDashboard"; // Import the new component

export default function Index({ githubData }) {
  const leetCodeUsername = "your_leetcode_username"; // Replace with dynamic username if needed

  return (
    <div className="h-full">
      <Header />
      <DashedDivider className={"my-6"} />
      <Stats />
      <Divider className="my-6" />
      <GithubHeader />
      <Divider className="my-6" />
      <LeetCodeDashboard username={leetCodeUsername} />{" "}
      {/* Add LeetCode Dashboard */}
    </div>
  );
}
