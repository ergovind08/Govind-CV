// pages/api/leetcode.js

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    // Replace with actual logic to fetch LeetCode data
    const response = await fetch(
      `https://api.example.com/leetcode/${incorelang}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching LeetCode data" });
  }
}
