// Example data from JSON or manually added
const labsData = [
    {
        "labName": "AI Research Lab",
        "researchArea": "Artificial Intelligence",
        "principalInvestigator": "Dr. Smith",
        "contact": "smith@university.edu"
        "page": "lab-pages/ai-research-lab.html"
    },
    {
        "labName": "Quantum Physics Lab",
        "researchArea": "Quantum Computing",
        "principalInvestigator": "Dr. Doe",
        "contact": "doe@university.edu"
        "page": "lab-pages/quantum-physics-lab.html"
    },
    {
        "labName": "Prather Lab",
        "researchArea": "Metabolic Engineering",
        "principalInvestigator": "Dr. Kristala Prather",
        "contact": "doe@university.edu"
        "page": "lab-pages/pratherlab.html"
    }
    // Add more labs here
];

const tableBody = document.getElementById("labsTableBody");

labsData.forEach(lab => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><a href="${lab.page}">${lab.labName}</a></td>
        <td>${lab.researchArea}</td>
        <td>${lab.principalInvestigator}</td>
        <td>${lab.contact}</td>
    `;
    tableBody.appendChild(row);
});
