
export interface MyProject {
  repo: string;
  link: string;
  description: string;
  language: string;
  languageColor: string;
}

export async function getMyProjects(): Promise<MyProject[] | any> {
  try {
    const githubUsername = 'DHRUVDHOLIYA';
    
    const githubApiEndpoint = `https://api.github.com/users/${githubUsername}/repos`;

    const response = await fetch(githubApiEndpoint);

    if (response.ok) {
      const projects: MyProject[] = await response.json();

      const formattedProjects = projects.map((project: any) => ({
        repo: project.name,
        link: project.html_url,
        description: project.description || "No description available",
        language: project.language || "Unknown",
        languageColor: "#000000",
      }));

      return formattedProjects;
    } else {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }
  } catch (err) {
    console.error("Error fetching GitHub projects:", err);
    return [];
  }
}





