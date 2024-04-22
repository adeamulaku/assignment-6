document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    const textarea = document.createElement("textarea");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    root.appendChild(textarea);
    root.appendChild(submitBtn);

    submitBtn.addEventListener("click", function() {
        const inputText = textarea.value.trim();

        if (inputText !== ""){
            const frequencyTable = {};
            const words = inputText.split(/\s+/);

            words.forEach(word => {
                frequencyTable[word] = (frequencyTable[word] || 0) + 1;
            });

            const sortedWords = Object.keys(frequencyTable).sort((a,b) => {
                if (frequencyTable[a] == frequencyTable[b]) {
                    return a.localeCompare(b);
                } 
                else {
                    return frequencyTable[b] - frequencyTable[a];
                }
            });

            const top5words = sortedWords.slice(0, 5);

            const table = document.createElement("table");
            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");

            const th1 = document.createElement("th1");
            th1.textContent = "Words";
            const th2 = document.createElement("th2");
            th2.textContent = "Words frequency";

            thead.appendChild(th1);
            thead.appendChild(th2);

            top5words.forEach(word => {
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");

                td1.textContent = word;
                td2.textContent = frequencyTable[word];

                tr.appendChild(td1);
                tr.appendChild(td2);
                tbody.appendChild(tr);
            });

            table.appendChild(thead);
            table.appendChild(tbody);
            root.appendChild(table);

            console.log(frequencyTable);
        }
    });
});