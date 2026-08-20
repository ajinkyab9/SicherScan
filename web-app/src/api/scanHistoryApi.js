export const fetchScanHistory = async () => {
  const historyRecords = await fetch(
    "http://localhost:5000/api/scans/scanHistory",
  );
  const historyData = await historyRecords.json();
  console.log("Backend Data:", historyData);
  return historyData;
};
