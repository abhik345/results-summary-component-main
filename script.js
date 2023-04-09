fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dataContainer = document.getElementById("data");
    const totalScore = data.reduce((sum, item) => {
      return sum + item.score;
    }, 0);
    let avgScore = Math.round(totalScore / data.length);

    const reportCard = document.getElementById("reportCard");
    const pTag = document.createElement("p");
    pTag.appendChild(document.createTextNode(`${avgScore} out of 100`));
    reportCard.appendChild(pTag);

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary");

    data.forEach((item) => {
      const span = document.createElement("span");
      const paragraph = document.createElement("p");
      const image = document.createElement("img");

      image.src = item.icon;
      paragraph.textContent = ` ${item.category}  ${item.score}/100`;
      span.appendChild(image);
      span.appendChild(paragraph);

      summaryDiv.appendChild(span);
    });

    dataContainer.appendChild(summaryDiv);

    const button = document.createElement("button");
    button.innerText = "Continue";
    button.classList.add("btn", "btn-primary", "w-75");
    dataContainer.appendChild(button);
  })
  .catch((error) => console.log(error));
