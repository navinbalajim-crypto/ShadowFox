const miLegends = [
  {
    rank: 1,
    name: "Sachin Tendulkar",
    nickname: "Master Blaster",
    role: "Batter / Icon",
    tagline: "God of Cricket. MI's first icon player & mentor.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Sachin-Tendulkar.jpg"
    
  },

  {
    rank: 2,
    name: "Rohit Sharma",
    nickname: "Hitman",
    role: "Batter",
    tagline: "5 IPL titles as captain. The greatest leader in IPL history.",
    photo: "https://statico.sportskeeda.com/editor/2024/04/5ec27-17131540202121-1920.jpg"
  },

  {
    rank: 2,
    name: "Kieron Pollard",
    nickname: "Polly",
    role: "All-rounder",
    tagline: "MI's greatest finisher. 2 CLT20 & 4 IPL titles.",
    photo: "https://th.bing.com/th/id/OIP.QW7mdZTvPA8Tmz7mXSrnxQHaEK?w=303&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 3,
    name: "Lasith Malinga",
    nickname: "Slinga Malinga",
    role: "Fast Bowler",
    tagline: "IPL's most feared yorker specialist. 4 titles with MI.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Lasinga_Malinga_MI.jpg"
  },
  {
    rank: 1,
    name: "Hardik Pandya",
    nickname: "Kung Fu Pandya",
    role: "All-rounder / Captain",
    tagline: "Leading MI to title #6.",
    photo: "data:image/webp;base64,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"
  },
  {
    rank: 4,
    name: "Jasprit Bumrah",
    nickname: "Boom Boom",
    role: "Fast Bowler",
    tagline: "Once in a generation talent. MI's spearhead since 2013.",
    photo: "https://th.bing.com/th/id/OIP.2e9LTmPV_MHZJ3PJPAM7LgHaJB?w=150&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 3,
    name: "Suryakumar Yadav",
    nickname: "SKY",
    role: "Batter",
    tagline: "World No.1 T20I batter. Mr. 360.",
    photo: "https://th.bing.com/th/id/OIP.lfV6ornZhEZeJM83LIBNGAHaEo?w=295&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 4,
    name: "Harbhajan Singh",
    nickname: "Bhajji",
    role: "Spinner",
    tagline: "Turbanator. MI's match-winner across 3 title wins.",
    photo: "https://tse4.mm.bing.net/th/id/OIP.L-i0ivZ6n4KAeLloYF_d0AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    rank: 5,
    name: "Ambati Rayudu",
    nickname: "Rayudu",
    role: "Batter / WK",
    tagline: "The silent assassin. 3 IPL titles with MI.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Ambati_Rayudu.jpg"
  },
  {
    rank: 6,
    name: "Krunal Pandya",
    nickname: "Krunal",
    role: "All-rounder",
    tagline: "The elder Pandya. 4 IPL titles & a CLT20 winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Krunal_Pandya_and_Hardik_Pandya_%28cropped%29.jpg"
  },
  
  {
    rank: 8,
    name: "Lendl Simmons",
    nickname: "Simmons",
    role: "Batter",
    tagline: "2015 final hero. 68* off 45 in the title clash.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Lendl_Simmons.jpg"
  }
];

const miPlayers = [
  {
    rank: 1,
    name: "Hardik Pandya",
    nickname: "Kung Fu Pandya",
    role: "All-rounder / Captain",
    tagline: "Leading MI to title #6.",
    photo: "data:image/webp;base64,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"
  },
  {
    rank: 2,
    name: "Rohit Sharma",
    nickname: "Hitman",
    role: "Batter",
    tagline: "5 IPL titles as captain. The greatest leader in IPL history.",
    photo: "https://statico.sportskeeda.com/editor/2024/04/5ec27-17131540202121-1920.jpg"
  },
  {
    rank: 3,
    name: "Suryakumar Yadav",
    nickname: "SKY",
    role: "Batter",
    tagline: "World No.1 T20I batter. Mr. 360.",
    photo: "https://th.bing.com/th/id/OIP.lfV6ornZhEZeJM83LIBNGAHaEo?w=295&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 4,
    name: "Jasprit Bumrah",
    nickname: "Boom Boom",
    role: "Fast Bowler",
    tagline: "Once in a generation talent. MI's spearhead since 2013.",
    photo: "https://th.bing.com/th/id/OIP.2e9LTmPV_MHZJ3PJPAM7LgHaJB?w=150&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 5,
    name: "Tilak Varma",
    nickname: "Tilly",
    role: "Batter",
    tagline: "Mr. Consistent. MI's future star.",
    photo: "https://th.bing.com/th/id/OIP.Tyyxj70x1kKl78LtKIGqhQHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 6,
    name: "Trent Boult",
    nickname: "Bolt",
    role: "Fast Bowler",
    tagline: "Swing king. Powerplay specialist.",
    photo: "https://www.bing.com/th/id/OIP.caxkes35FXCrhy4_gksYbgHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 7,
    name: "Quinton de Kock",
    nickname: "QDK",
    role: "WK Batter",
    tagline: "Explosive opener. Back for more in 2026.",
    photo: "https://th.bing.com/th/id/OIP.Vl6HXkm_VOluAx4E64IdOgHaO0?w=115&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 8,
    name: "Deepak Chahar",
    nickname: "DP",
    role: "Fast Bowler",
    tagline: "Swing bowler who can bat. Wicket-taker.",
    photo: "https://th.bing.com/th/id/OIP.w-GyOO6Rc7S4X5cpz16NNwHaEp?w=296&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 9,
    name: "Mitchell Santner",
    nickname: "Santner",
    role: "All-rounder",
    tagline: "NZ's spin wizard. Cool head under pressure.",
    photo: "https://th.bing.com/th/id/OIP.ZUdsU8iMW-OkJnhZoxwa9QHaHa?w=153&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 10,
    name: "Will Jacks",
    nickname: "Jacks",
    role: "Batting All-rounder",
    tagline: "Explosive English talent. Spin basher.",
    photo: "https://www.bing.com/th/id/OIP._mQ3xc15Z3M_MaloT2DhMQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 11,
    name: "Ryan Rickelton",
    nickname: "Rickelton",
    role: "WK Batter",
    tagline: "South African firepower at the top.",
    photo: "https://www.bing.com/th/id/OIP.p_EBIHlwaSPvZQbTOPSuXwHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 12,
    name: "Naman Dhir",
    nickname: "Naman",
    role: "Batter",
    tagline: "Young gun. Fearless hitter.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/381300/381384.png"
  },
  {
    rank: 13,
    name: "Robin Minz",
    nickname: "Robin",
    role: "WK Batter",
    tagline: "Tribal warrior. Power-hitter from Jharkhand.",
    photo: "https://img.ipl.com/upload/20251202/ccc222b68cc0b9451b54c862cedaa3d8.jpg"
  },
  {
    rank: 14,
    name: "Shardul Thakur",
    nickname: "Lord Shardul",
    role: "All-rounder",
    tagline: "Impact player. Batting all-rounder with attitude.",
    photo: "https://www.bing.com/th/id/OIP.RiTzApk9qb15pdvHxknu5QAAAA?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 15,
    name: "Sherfane Rutherford",
    nickname: "Sherfane",
    role: "All-rounder",
    tagline: "West Indian power. Six-hitter on demand.",
    photo: "https://www.bing.com/th/id/OIP.ZvFm95gxg8K7KyIMmhzB8wHaI0?w=193&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 16,
    name: "Mayank Markande",
    nickname: "Markande",
    role: "Spinner",
    tagline: "Leg-spin wicket-taker. Back home at MI.",
    photo: "https://www.bing.com/th/id/OIP.klGypwKEdRmHf7FaViYJCwAAAA?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 17,
    name: "Corbin Bosch",
    nickname: "Bosch",
    role: "All-rounder",
    tagline: "South African pace-bowling all-rounder.",
    photo: "https://www.bing.com/th/id/OIP.-msxHmD7sGku93otT13RnAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2"
  },
  {
    rank: 18,
    name: "Raj Bawa",
    nickname: "Bawa",
    role: "All-rounder",
    tagline: "U19 World Cup hero. Rising Indian talent.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/339100/339156.png"
  },
  {
    rank: 19,
    name: "Ashwani Kumar",
    nickname: "Ashwani",
    role: "Fast Bowler",
    tagline: "Left-arm pace prospect."
  },
  {
    rank: 20,
    name: "Raghu Sharma",
    nickname: "Raghu",
    role: "Fast Bowler",
    tagline: "Young Indian speedster."
  },
  {
    rank: 21,
    name: "Allah Ghazanfar",
    nickname: "Ghazanfar",
    role: "Spinner",
    tagline: "Afghan mystery spinner. Middle-overs weapon.",
    photo: "data:image/webp;base64,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"
  },
  {
    rank: 22,
    name: "Danish Malewar",
    nickname: "Danish",
    role: "Batter",
    tagline: "Uncapped Indian talent."
  },
  {
    rank: 23,
    name: "Mohammad Izhar",
    nickname: "Izhar",
    role: "Batter",
    tagline: "Uncapped Indian talent."
  },
  {
    rank: 24,
    name: "Atharva Ankolekar",
    nickname: "Atharva",
    role: "All-rounder",
    tagline: "Left-arm spin & lower-order grit."
  },
  {
    rank: 25,
    name: "Mayank Rawat",
    nickname: "Mayank",
    role: "Batter",
    tagline: "Uncapped Indian talent."
  }
];

const seasonWins = [
  { season: "2008", wins: 7 },
  { season: "2009", wins: 5 },
  { season: "2010", wins: 9 },
  { season: "2011", wins: 9 },
  { season: "2012", wins: 8 },
  { season: "2013", wins: 10 },
  { season: "2014", wins: 7 },
  { season: "2015", wins: 10 },
  { season: "2016", wins: 7 },
  { season: "2017", wins: 12 },
  { season: "2018", wins: 6 },
  { season: "2019", wins: 11 },
  { season: "2020", wins: 11 },
  { season: "2021", wins: 7 },
  { season: "2022", wins: 4 },
  { season: "2023", wins: 9 },
  { season: "2024", wins: 4 },
  { season: "2025", wins: 8 },
  { season: "2026", wins: 4 }
];

const championshipYears = [2013, 2015, 2017, 2019, 2020];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getRoleCategory(role) {
  const value = role.toLowerCase();
  if (value.includes("wk") || value.includes("wicket")) return "Wicket Keeper";
  if (value.includes("all-rounder") || value.includes("finisher")) return "All-rounder";
  if (value.includes("bowler") || value.includes("spinner")) return "Bowler";
  if (value.includes("batter")) return "Batter";
  return role;
}

function getAccentIndex(player) {
  return (player.rank + player.name.length) % 6;
}

function renderPlayerCard(player, group) {
  const portrait = player.photo
    ? `<img src="${player.photo}" alt="${player.name}" loading="lazy">`
    : `<strong>${getInitials(player.name)}</strong>`;

  return `
    <article class="player-card" data-group="${group}">
      <div class="player-photo accent-${getAccentIndex(player)}">
        <span class="rank-badge">#${player.rank}</span>
        ${portrait}
      </div>
      <div class="player-card-body">
        <p class="eyebrow">${group}</p>
        <h2>${player.name}</h2>
        <p class="nickname">${player.nickname}</p>
        ${player.tagline ? `<p class="tagline">${player.tagline}</p>` : ""}
        <div class="player-meta">
          <span>${player.role}</span>
          <span>${getRoleCategory(player.role)}</span>
        </div>
      </div>
    </article>
  `;
}

function initPlayers() {
  const legendsGrid = document.querySelector("#legendsGrid");
  const playersGrid = document.querySelector("#playersGrid");
  const legendsCount = document.querySelector("#legendsCount");
  const playersCount = document.querySelector("#playersCount");
  const search = document.querySelector("#playerSearch");
  const pills = [...document.querySelectorAll("[data-role]")];
  let activeRole = "all";

  if (!legendsGrid || !playersGrid || !search) return;

  const filterList = (list) => {
    const query = search.value.trim().toLowerCase();
    return list.filter((player) => {
      const roleCategory = getRoleCategory(player.role);
      const haystack = `${player.rank} ${player.name} ${player.nickname} ${player.role} ${roleCategory}`.toLowerCase();
      const matchesSearch = haystack.includes(query);
      const matchesRole = activeRole === "all" || roleCategory === activeRole;
      return matchesSearch && matchesRole;
    });
  };

  const renderGrid = (grid, list, group, emptyText) => {
    grid.innerHTML = list.length
      ? list.map((player) => renderPlayerCard(player, group)).join("")
      : `<article class="player-card empty-card"><h2>No ${emptyText} found</h2><p>Try a different role or search term.</p></article>`;
  };

  const render = () => {
    const filteredLegends = filterList(miLegends);
    const filteredPlayers = filterList(miPlayers);
    renderGrid(legendsGrid, filteredLegends, "MI Legends", "legends");
    renderGrid(playersGrid, filteredPlayers, "MI Squad 2026", "players");
    if (legendsCount) legendsCount.textContent = `${filteredLegends.length} Players`;
    if (playersCount) playersCount.textContent = `${filteredPlayers.length} Players`;
  };

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      activeRole = pill.dataset.role;
      pills.forEach((item) => item.classList.toggle("active", item === pill));
      render();
    });
  });

  search.addEventListener("input", render);
  render();
}

function drawWinsChart() {
  const canvas = document.querySelector("#winsChart");
  if (!canvas) return;

  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 56;
  const maxWins = Math.max(...seasonWins.map((item) => item.wins));
  const barGap = 24;
  const barWidth = (width - padding * 2 - barGap * (seasonWins.length - 1)) / seasonWins.length;

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fbfdff";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "#dce3ef";
  context.lineWidth = 1;
  context.font = "14px Arial";
  context.fillStyle = "#667085";

  for (let index = 0; index <= 4; index += 1) {
    const y = padding + ((height - padding * 2) / 4) * index;
    context.beginPath();
    context.moveTo(padding, y);
    context.lineTo(width - padding, y);
    context.stroke();
  }

  seasonWins.forEach((item, index) => {
    const x = padding + index * (barWidth + barGap);
    const barHeight = (item.wins / maxWins) * (height - padding * 2);
    const y = height - padding - barHeight;
    const gradient = context.createLinearGradient(0, y, 0, height - padding);
    gradient.addColorStop(0, "#ffcc29");
    gradient.addColorStop(0.5, "#12d8ff");
    gradient.addColorStop(1, "#005cff");

    const isTitleYear = championshipYears.includes(parseInt(item.season));

    context.fillStyle = gradient;
    context.fillRect(x, y, barWidth, barHeight);

    if (isTitleYear) {
      context.fillStyle = "#ffcc29";
      context.font = "bold 10px Arial";
      context.textAlign = "center";
      context.fillText("🏆", x + barWidth / 2, y - 18);
    }

    context.fillStyle = "#101828";
    context.font = "bold 18px Arial";
    context.textAlign = "center";
    context.fillText(item.wins, x + barWidth / 2, y - 12);
    context.fillStyle = "#667085";
    context.font = "bold 14px Arial";
    context.fillText(item.season, x + barWidth / 2, height - 22);
  });
}

function initPoll() {
  const actions = document.querySelector("#pollActions");
  const results = document.querySelector("#pollResults");
  const reset = document.querySelector("#resetPoll");
  if (!actions || !results) return;

  const key = "miFanVotes";
  const names = ["Rohit Sharma", "Jasprit Bumrah", "Suryakumar Yadav", "Hardik Pandya", "Tilak Varma", "Quinton de Kock"];
  const getVotes = () => JSON.parse(localStorage.getItem(key) || "{}");
  const saveVotes = (votes) => localStorage.setItem(key, JSON.stringify(votes));

  const render = () => {
    const votes = getVotes();
    const total = names.reduce((sum, name) => sum + (votes[name] || 0), 0);

    results.innerHTML = names.map((name) => {
      const count = votes[name] || 0;
      const percent = total ? Math.round((count / total) * 100) : 0;
      return `
        <div class="result-row">
          <header><span>${name}</span><span>${count} votes</span></header>
          <div class="bar-track"><div class="bar-fill" style="--value:${percent}%"></div></div>
        </div>
      `;
    }).join("");
  };

  actions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-player]");
    if (!button) return;
    const votes = getVotes();
    votes[button.dataset.player] = (votes[button.dataset.player] || 0) + 1;
    saveVotes(votes);
    render();
  });

  reset?.addEventListener("click", () => {
    localStorage.removeItem(key);
    render();
  });

  render();
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  const note = document.querySelector("#formNote");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    note.textContent = `Thanks, ${name}! Aala re Aala — your MI fan message has been received. #OneFamily`;
    form.reset();
  });
}

function initChampionshipTicker() {
  const ticker = document.querySelector("#titleTicker");
  if (!ticker) return;

  const years = ["2013", "2015", "2017", "2019", "2020"];
  ticker.innerHTML = years
    .map((y) => `<span class="ticker-year"><span class="trophy-icon">🏆</span> ${y}</span>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  initPlayers();
  drawWinsChart();
  initPoll();
  initContactForm();
  initChampionshipTicker();
});
