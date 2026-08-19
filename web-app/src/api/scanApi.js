export const submitCodeScanRequest = async (payload) => {
    try {
        const response = await fetch("http://localhost:5000/api/scans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        const codeData = await response.json();
        return codeData;
    } catch (error) {
        console.error("Scan submit failure:", error);
        throw error;
    }
}