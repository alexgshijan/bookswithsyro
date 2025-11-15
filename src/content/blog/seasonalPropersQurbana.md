---
title: "English Holy Qurbana [Seasonal Propers]"
description: "Slides designed for the congregation for use in the English Holy Qurbana as per the new (2025) English Taksa"
pubDate: "Nov 14 2025"
heroImage: "/images/cover/seasonalqurbana.png"
author: smym
---
<div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe id="canvaFrame" loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGyaKlR1Yk/fK5UbNxBjJHoHvqzcfTW_Q/view?embed" allow="fullscreen" allowfullscreen>
  </iframe>
</div>

<script>
  const fragment = window.location.hash;
  const frame = document.getElementById('canvaFrame');

  const seasonMap = {
    7: "https://www.canva.com/design/DAG20rD1u-c/fvHwjhtPgR5IaknlPq9BXw/view?embed",
    4: "https://www.canva.com/design/DAGy8Af3R0k/UVqHKIKPRHlA9PsDFQuphA/view?embed",
    5: "https://www.canva.com/design/DAGy8Af3R0k/UVqHKIKPRHlA9PsDFQuphA/view?embed",
    6: "https://www.canva.com/design/DAGy8Af3R0k/UVqHKIKPRHlA9PsDFQuphA/view?embed"
  };

  async function fetchDayData() {
    const liturgicalURL =
      "https://syrocalendar.com/SyroMalabarCalendar/?Mode=JSON&Type=DailyReadings";

    const liturgicalData = await fetch(liturgicalURL)
      .then(r => r.json())
      .catch(() => null);

    if (!liturgicalData || !liturgicalData.Set1?.length) return;

    const seasonID = liturgicalData.Set1[0].SeasonID;
    const newURL = seasonMap[seasonID];

    if (newURL) {
      frame.src = newURL + fragment;
    } else {
      // keep the default frame.src but still apply fragment
      frame.src = frame.src + fragment;
    }
  }

  document.addEventListener('DOMContentLoaded', fetchDayData);
</script>