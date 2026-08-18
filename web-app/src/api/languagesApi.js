export const fetchLanguages = async () => {
    const response = await fetch("http://localhost:5000/api/scans/languages");
    const data = await response.json();
console.log("My Backend Data:", data);
    return data;
}