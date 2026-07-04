const miLegends = [
  {
    rank: 1,
    name: "Rohit Sharma",
    nickname: "Hitman",
    role: "Batter / Former Captain",
    tagline: "5 IPL titles as captain. The greatest leader in IPL history.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Rohit_Gurunath_Sharma.jpg"
  },
  {
    rank: 2,
    name: "Lasith Malinga",
    nickname: "Slinga Malinga",
    role: "Fast Bowler",
    tagline: "IPL's most feared yorker specialist. 4 titles with MI.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Lasinga_Malinga_MI.jpg"
  },
  {
    rank: 3,
    name: "Kieron Pollard",
    nickname: "Polly",
    role: "All-rounder",
    tagline: "MI's greatest finisher. 2 CLT20 & 4 IPL titles.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Kieron_pollard_training.jpg"
  },
  {
    rank: 4,
    name: "Jasprit Bumrah",
    nickname: "Boom Boom",
    role: "Fast Bowler",
    tagline: "Once in a generation talent. MI's spearhead since 2013.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Jasprit_Bumrah_%284%29.jpg"
  },
  {
    rank: 5,
    name: "Suryakumar Yadav",
    nickname: "SKY",
    role: "Batter",
    tagline: "World No.1 T20I batter. Mr. 360.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Suryakumar_Yadav_%281%29.jpg"
  },
  {
    rank: 6,
    name: "Sachin Tendulkar",
    nickname: "Master Blaster",
    role: "Batter / Icon",
    tagline: "God of Cricket. MI's first icon player & mentor.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Sachin-Tendulkar.jpg"
  },
  {
    rank: 7,
    name: "Harbhajan Singh",
    nickname: "Bhajji",
    role: "Spinner",
    tagline: "Turbanator. MI's match-winner across 3 title wins.",
    photo: "https://th.bing.com/th/id/OIP.X3igyZxDT-Knd0n5RkXifwHaEo?w=280&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    rank: 8,
    name: "Ambati Rayudu",
    nickname: "Rayudu",
    role: "Batter / WK",
    tagline: "The silent assassin. 3 IPL titles with MI.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Ambati_Rayudu.jpg"
  },
  {
    rank: 9,
    name: "Krunal Pandya",
    nickname: "Krunal",
    role: "All-rounder",
    tagline: "The elder Pandya. 4 IPL titles & a CLT20 winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Krunal_Pandya_and_Hardik_Pandya_%28cropped%29.jpg"
  },
  {
    rank: 10,
    name: "Ishan Kishan",
    nickname: "Pocket Dynamo",
    role: "WK Batter",
    tagline: "Aggressive opener. 2 IPL titles with MI.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/329300/329345.jpg"
  },
  {
    rank: 11,
    name: "Quinton de Kock",
    nickname: "QDK",
    role: "WK Batter",
    tagline: "Explosive opener. Back-to-back titles in 2019 & 2020.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/263700/263767.jpg"
  },
  {
    rank: 12,
    name: "Lendl Simmons",
    nickname: "Simmons",
    role: "Batter",
    tagline: "2015 final hero. 68* off 45 in the title clash.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Lendl_Simmons.jpg"
  },
  {
    rank: 13,
    name: "Hardik Pandya",
    nickname: "Kung Fu Pandya",
    role: "All-rounder / Captain",
    tagline: "Current MI captain. 4 titles as player, 1 as mentor.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hardik_Pandya_%28cropped_2%29.jpg"
  }
];

const miPlayers = [
  {
    rank: 1,
    name: "Hardik Pandya",
    nickname: "Kung Fu Pandya",
    role: "All-rounder / Captain",
    tagline: "Leading MI to title #6.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Hardik_Pandya_%28cropped_2%29.jpg"
  },
  {
    rank: 2,
    name: "Tilak Varma",
    nickname: "Tilly",
    role: "Batter",
    tagline: "Mr. Consistent. MI's future star.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Tilak_Varma_in_March_2026.png"
  },
  {
    rank: 3,
    name: "Trent Boult",
    nickname: "Bolt",
    role: "Fast Bowler",
    tagline: "Swing king. Powerplay specialist.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Trent_Boult.jpg"
  },
  {
    rank: 4,
    name: "Will Jacks",
    nickname: "Jacks",
    role: "Batting All-rounder",
    tagline: "Explosive English talent. Spin basher.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/383100/383155.png"
  },
  {
    rank: 5,
    name: "Ryan Rickelton",
    nickname: "Rickelton",
    role: "WK Batter",
    tagline: "South African firepower at the top.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/2_40_Ryan_Rickleton.jpg"
  },
  {
    rank: 6,
    name: "Deepak Chahar",
    nickname: "DP",
    role: "Fast Bowler",
    tagline: "Swing bowler who can bat. Wicket-taker.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Deepak_Chahar.jpg"
  },
  {
    rank: 7,
    name: "Mitchell Santner",
    nickname: "Santner",
    role: "All-rounder",
    tagline: "NZ's spin wizard. Cool head under pressure.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/398100/398133.jpg"
  },
  {
    rank: 8,
    name: "Naman Dhir",
    nickname: "Naman",
    role: "Batter",
    tagline: "Young gun. Fearless hitter.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/381300/381384.png"
  },
  {
    rank: 9,
    name: "Robin Minz",
    nickname: "Robin",
    role: "WK Batter",
    tagline: "Tribal warrior. Power-hitter from Jharkhand.",
    photo: "https://img.ipl.com/upload/20251202/ccc222b68cc0b9451b54c862cedaa3d8.jpg"
  },
  {
    rank: 10,
    name: "Karn Sharma",
    nickname: "Karn",
    role: "Spinner",
    tagline: "Leg-spin veteran. Big-match player.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/324200/324221.png"
  },
  {
    rank: 11,
    name: "Zaheer Khan",
    nickname: "Zak",
    role: "Fast Bowler",
    tagline: "Indian pace legend. 2013 & 2015 title winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Zaheer_Khan.jpg"
  },
  {
    rank: 12,
    name: "Dwayne Smith",
    nickname: "Smith",
    role: "All-rounder",
    tagline: "Explosive opener. 2013 title winner.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/316500/316547.png"
  },
  {
    rank: 13,
    name: "Corey Anderson",
    nickname: "Cozza",
    role: "All-rounder",
    tagline: "Fastest ODI century. 2015 title winner.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/316600/316617.png"
  },
  {
    rank: 14,
    name: "Mitchell Johnson",
    nickname: "Mitch",
    role: "Fast Bowler",
    tagline: "Australian pace legend. 2013 title winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/3/34/MITCHELL_JOHNSON_%2811705174114%29_%28cropped%29.jpg"
  },
  {
    rank: 15,
    name: "Parthiv Patel",
    nickname: "Parthiv",
    role: "WK Batter",
    tagline: "Dynamic keeper-opener. 2015 & 2017 title winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Parthiv_Patel.jpg"
  },
  {
    rank: 16,
    name: "Aditya Tare",
    nickname: "Tare",
    role: "WK Batter",
    tagline: "2014 qualifier hero. Hit the winning runs.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/308900/308968.png"
  },
  {
    rank: 17,
    name: "Nathan Coulter-Nile",
    nickname: "NCN",
    role: "Fast Bowler",
    tagline: "Express pace. 2019 & 2020 title winner.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/237600/237675.jpg"
  },
  {
    rank: 18,
    name: "Tim David",
    nickname: "The Beast",
    role: "Finisher",
    tagline: "The 360-degree finisher. Muscle at the death.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/340300/340305.png"
  },
  {
    rank: 19,
    name: "Rahul Chahar",
    nickname: "Rahul",
    role: "Spinner",
    tagline: "Leg-spin prodigy. 2020 title winner.",
    photo: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/331100/331166.png"
  },
  {
    rank: 20,
    name: "Adam Gilchrist",
    nickname: "Gilly",
    role: "WK Batter",
    tagline: "Australian legend. MI's first icon overseas player.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Adam_Gilchrist_of_Australia_%28cropped%29.jpg"
  },
  {
    rank: 21,
    name: "Dwayne Bravo",
    nickname: "DJ Bravo",
    role: "All-rounder",
    tagline: "Champion performer. IPL's first 500-wicket taker.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Dwayne_Bravo_2010.jpg"
  },
  {
    rank: 22,
    name: "Jos Buttler",
    nickname: "Jos",
    role: "WK Batter",
    tagline: "English firepower. 2017 title winner with MI.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Jos_buttler.JPG"
  },
  {
    rank: 23,
    name: "James Franklin",
    nickname: "Franklin",
    role: "All-rounder",
    tagline: "NZ all-rounder. 2013 CLT20 winner.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/James_Franklin_and_Joe_Burns.jpg"
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
    renderGrid(playersGrid, filteredPlayers, "Players & Fan Favorites", "players");
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
  const names = ["Rohit Sharma", "Jasprit Bumrah", "Suryakumar Yadav", "Hardik Pandya" , "Kieron Pollard", "Lasith Malinga"];
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
