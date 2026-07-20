const GITHUB_USERNAME = "EleanorLiu12";
const PORTFOLIO_REPO = "KJPortfolio";

const fallbackRepos = [
  {
    name: "CS-Learning",
    html_url: "https://github.com/EleanorLiu12/CS-Learning",
    description: "Self Study",
    language: "Jupyter Notebook",
    fork: false,
  },
  {
    name: "MySQL",
    html_url: "https://github.com/EleanorLiu12/MySQL",
    description: "Tutorial and practice notes relevant to MySQL.",
    language: "Python",
    fork: false,
  },
];

const repoList = document.querySelector("#repo-list");
const repoCount = document.querySelector("#repo-count");
const githubSince = document.querySelector("#github-since");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function buildRepoItem(repo) {
  const item = document.createElement("article");
  item.className = "repo-item";

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = repo.html_url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = repo.name;
  title.append(link);

  const description = document.createElement("p");
  description.textContent = repo.description || "Public GitHub repository.";

  const language = document.createElement("span");
  language.textContent = repo.language || (repo.fork ? "Fork" : "Repo");

  item.append(title, description, language);
  return item;
}

function renderRepos(repos) {
  if (!repoList) {
    return;
  }

  repoList.replaceChildren();
  repos.forEach((repo) => repoList.append(buildRepoItem(repo)));
}

function selectRepos(repos) {
  const ownRepos = repos
    .filter((repo) => !repo.fork && repo.name !== PORTFOLIO_REPO)
    .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at));

  const chosen = ownRepos.length > 0 ? ownRepos : repos.filter((repo) => repo.name !== PORTFOLIO_REPO);
  return chosen.slice(0, 4);
}

async function loadGitHubProfile() {
  const [profileResponse, repoResponse] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`),
  ]);

  if (!profileResponse.ok || !repoResponse.ok) {
    throw new Error("GitHub API request failed");
  }

  const profile = await profileResponse.json();
  const repos = await repoResponse.json();

  if (repoCount && typeof profile.public_repos === "number") {
    repoCount.textContent = String(profile.public_repos);
  }

  if (githubSince && profile.created_at) {
    githubSince.textContent = String(new Date(profile.created_at).getFullYear());
  }

  renderRepos(selectRepos(repos));
}

loadGitHubProfile().catch(() => {
  renderRepos(fallbackRepos);
});
